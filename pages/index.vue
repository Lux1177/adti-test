<template>
	<div>
		<!-- Loading State -->
		<div v-if="quizStore.isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-4">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
				<p class="text-lg text-gray-600">Саволлар юкланмоқда...</p>
			</div>
		</div>

		<!-- Error State -->
		<UAlert
			v-else-if="quizStore.error"
			color="red"
			variant="solid"
			title="Хатолик"
			:description="quizStore.error"
			class="max-w-2xl mx-auto mb-8"
		/>

		<!-- Start Screen -->
		<QuizStart
			v-else
			:has-active-quiz="quizStore.hasActiveQuiz"
			@start="startQuiz"
		/>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '#app'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/stores/quiz'

const quizStore = useQuizStore()
const router = useRouter()

// Load questions on mount
onMounted(async () => {
	await quizStore.loadQuestions()
})

const startQuiz = () => {
	const success = quizStore.startTest()
	if (success) {
		router.push('/test')
	}
}
</script>
