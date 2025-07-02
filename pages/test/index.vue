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
				:current-quiz-id="quizStore.state.activeQuiz.currentQuizId"
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
import { ref } from 'vue'
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
		// The startTest function now handles loading questions and clearing old state.
		const success = await quizStore.startTest(quizId, locale.value)

		if (success) {
			router.push(`/test/${quizId}`)
		} else {
			// If startTest returns false, the error is already set in the store.
			throw new Error(quizStore.state.error || "Failed to start quiz.")
		}
	} catch (err) {
		console.error("Error starting quiz:", err)
		error.value = err instanceof Error ? err.message : "An unknown error occurred."
	} finally {
		isLoading.value = false
	}
}
</script>
