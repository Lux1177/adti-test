<template>
	<div>
		<!-- Loading State -->
		<div v-if="quizStore.state.isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-4">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
				<p class="text-lg text-gray-600">Саволлар юкланмоқда...</p>
			</div>
		</div>

		<!-- Error State -->
		<UAlert
			v-else-if="quizStore.state.error"
			color="red"
			variant="solid"
			title="Хатолик"
			:description="quizStore.state.error"
			class="max-w-2xl mx-auto mb-8"
		/>

		<!-- No Active Quiz -->
		<div v-else-if="!quizStore.hasActiveQuiz.value" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-6">
				<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
					<Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-yellow-400 mx-auto mb-4" />
					<h2 class="text-2xl font-light text-white mb-4">Фаол тест топилмади</h2>
					<p class="text-white/70 mb-6">Тест топшириш учун аввал тестни бошлашингиз керак.</p>
					<NuxtLink to="/">
						<button class="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center mx-auto">
							<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
							Бош саҳифага қайтиш
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Quiz Question -->
		<QuizQuestion
			v-else
			:question="quizStore.getCurrentQuestion.value"
			:current-question-index="quizStore.state.currentQuestionIndex"
			:total-questions="quizStore.state.currentQuestions.length"
			:progress="quizStore.getProgress.value"
			:is-last-question="quizStore.isLastQuestion.value"
			@answer="handleAnswer"
			@next="handleNext"
		/>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/composables/useQuizStore'

useHead({
	title: 'Test topshirish',
	meta: [
		{ name: 'description', content: 'Test topshirish' }
	],
})

const quizStore = useQuizStore()
const router = useRouter()

const loadQuizData = () => {
	if (quizStore.state.allQuestions.length === 0) {
		quizStore.loadQuestions()
	}
	quizStore.loadState()
}

onMounted(() => {
	loadQuizData()
})

const handleAnswer = (answer: string) => {
	quizStore.selectAnswer(answer)
}

const handleNext = () => {
	quizStore.nextQuestion()

	if (quizStore.isTestComplete.value) {
		router.push('/results')
	}
}
</script>
