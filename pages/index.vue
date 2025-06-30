<template>
	<div>
		<!-- Language Selection -->
		<LanguageSelector
			v-if="currentStep === 'language'"
			@continue="handleLanguageSelected"
		/>

		<!-- Category Selection -->
		<CategorySelector
			v-else-if="currentStep === 'category'"
			@select="handleCategorySelected"
			@back="currentStep = 'language'"
		/>

		<!-- Quiz Selection -->
		<div v-else-if="currentStep === 'quiz'">
			<!-- Loading State -->
			<div v-if="isLoading" class="flex justify-center items-center min-h-screen">
				<div class="text-center space-y-4">
					<div class="animate-spin-smooth rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
					<p class="text-lg text-gray-600">{{ t('loading.questions') }}</p>
				</div>
			</div>

			<!-- Error State -->
			<UAlert
				v-else-if="error"
				color="red"
				variant="solid"
				:title="t('error.title')"
				:description="error"
				class="max-w-2xl mx-auto mb-8"
			/>

			<!-- Quiz Selection -->
			<QuizSelector
				v-else
				:has-active-quiz="quizStore.hasActiveQuiz.value"
				:current-quiz-id="quizStore.state.currentQuizId"
				:selected-category="selectedCategory!"
				:loading="isLoading"
				@start="startQuiz"
				@back-to-categories="currentStep = 'category'"
				@change-language="currentStep = 'language'"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/composables/useQuizStore'
import { useI18n } from '~/composables/useI18n'
import type { UserCategory } from '~/types/quiz'

const { t, loadLocale, locale } = useI18n()
const quizStore = useQuizStore()
const router = useRouter()

type Step = 'language' | 'category' | 'quiz'

const currentStep = ref<Step>('language')
const selectedCategory = ref<UserCategory | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

const handleLanguageSelected = () => {
	currentStep.value = 'category'
}

const handleCategorySelected = (category: UserCategory) => {
	selectedCategory.value = category
	currentStep.value = 'quiz'
}

const startQuiz = async (quizId: string) => {
	isLoading.value = true
	error.value = null

	try {
		// Load questions for the selected quiz and current language
		await quizStore.loadQuestions(quizId, locale.value)

		// Start the test
		const success = quizStore.startTest(quizId)
		if (success) {
			router.push('/test')
		} else {
			error.value = "Failed to start quiz"
		}
	} catch (err) {
		error.value = err instanceof Error ? err.message : "Failed to load quiz"
	} finally {
		isLoading.value = false
	}
}

// Load saved locale and determine initial step
const initializeApp = () => {
	// Check if language was already selected
	if (locale.value !== 'en' || localStorage.getItem('quiz-locale')) {
		currentStep.value = 'category'
	}

	// Load any existing quiz state
	quizStore.loadState()

	loadLocale()
}

// Initialize on mount
initializeApp()
</script>
