<template>
	<div>
		<!-- Category Selection -->
		<CategorySelector
			v-if="currentStep === 'category'"
			@select="handleCategorySelected"
			@back="navigateTo('/')"
		/>

		<!-- Quiz Selection -->
		<div v-else-if="currentStep === 'quiz'">
			<UAlert
				v-if="error"
				color="red"
				variant="solid"
				:title="t('error.title')"
				:description="error"
				class="max-w-2xl mx-auto mb-8"
			/>
			<QuizSelector
				:has-active-quiz="quizStore.hasActiveQuiz.value"
				:current-quiz-id="quizStore.state.currentQuizId"
				:selected-category="selectedCategory!"
				:loading="isLoading"
				@start="startQuiz"
				@back-to-categories="currentStep = 'category'"
				@change-language="navigateTo('/')"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, navigateTo } from '#app'
import { useQuizStore } from '~/composables/useQuizStore'
import { useI18n } from '~/composables/useI18n'
import type { UserCategory } from '~/types/quiz'

const { t, locale } = useI18n()
const quizStore = useQuizStore()
const router = useRouter()

type Step = 'category' | 'quiz'

const currentStep = ref<Step>('category')
const selectedCategory = ref<UserCategory | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

const handleCategorySelected = (category: UserCategory) => {
	selectedCategory.value = category
	currentStep.value = 'quiz'
}

const startQuiz = async (quizId: string) => {
	isLoading.value = true
	error.value = null

	try {
		// If there's an active quiz, reset it before starting a new one
		if (quizStore.hasActiveQuiz.value) {
			quizStore.resetTest()
		}

		await quizStore.loadQuestions(quizId, locale.value)

		if (quizStore.state.error) {
			throw new Error(quizStore.state.error)
		}

		const success = quizStore.startTest(quizId)
		if (!success) {
			throw new Error(quizStore.state.error || `Failed to start quiz.`)
		}

		router.push(`/test/${quizId}`)

	} catch (err) {
		console.error("Error starting quiz:", err)
		error.value = err instanceof Error ? err.message : "An unknown error occurred while starting the quiz."
	} finally {
		isLoading.value = false
	}
}

onMounted(() => {
	quizStore.loadState()
})
</script>
