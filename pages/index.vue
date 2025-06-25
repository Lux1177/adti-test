<template>
	<div>
		<!-- Loading State -->
		<div v-if="quiz.state.isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-4">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
				<p class="text-lg text-gray-600">Саволлар юкланмоқда...</p>
			</div>
		</div>

		<!-- Error State -->
		<UAlert
			v-else-if="quiz.state.error"
			color="red"
			variant="solid"
			title="Хатолик"
			:description="quiz.state.error"
			class="max-w-2xl mx-auto mb-8"
		/>

		<!-- Quiz Content -->
		<div v-else>
			<!-- Start Screen -->
			<QuizStart
				v-if="currentScreen === 'start'"
				@start="startQuiz"
			/>

			<!-- Quiz Screen -->
			<QuizQuestion
				v-else-if="currentScreen === 'quiz'"
				:question="quiz.getCurrentQuestion()"
				:current-question-index="quiz.state.currentQuestionIndex"
				:total-questions="quiz.state.currentQuestions.length"
				:progress="quiz.getProgress()"
				:is-last-question="quiz.isLastQuestion()"
				@answer="handleAnswer"
				@next="handleNext"
			/>

			<!-- Results Screen -->
			<QuizResults
				v-else-if="currentScreen === 'results'"
				:score="quiz.state.score"
				:total-questions="quiz.state.currentQuestions.length"
				:percentage="quiz.getPercentage()"
				:user-answers="quiz.state.userAnswers"
				@restart="restartQuiz"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuiz } from '~/composables/useQuiz'
import { ref, onMounted } from 'vue'
import { useHead } from '#app'

const quiz = useQuiz()

type Screen = 'start' | 'quiz' | 'results'
const currentScreen = ref<Screen>('start')

// Set page meta
useHead({
	title: 'Инглиз Тили Бўйича Тест',
	meta: [
		{ name: 'description', content: 'Инглиз тили бўйича онлайн тест' }
	]
})

// Load questions on mount
onMounted(async () => {
	await quiz.loadQuestions()
})

const startQuiz = () => {
	const success = quiz.startTest()
	if (success) {
		currentScreen.value = 'quiz'
	}
}

const handleAnswer = (answer: string) => {
	quiz.selectAnswer(answer)
}

const handleNext = () => {
	quiz.nextQuestion()

	if (quiz.isTestComplete()) {
		currentScreen.value = 'results'
	}
}

const restartQuiz = () => {
	currentScreen.value = 'start'
}
</script>
