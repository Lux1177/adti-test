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

		<!-- Start Screen -->
		<QuizStart
			v-else
			:has-active-quiz="quizStore.hasActiveQuiz.value"
			@start="startQuiz"
		/>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/composables/useQuizStore'

const quizStore = useQuizStore()
const router = useRouter()

const startQuiz = () => {
	const success = quizStore.startTest()
	if (success) {
		router.push('/test')
	}
}

onMounted(async () => {
	await quizStore.loadQuestions()
})
</script>
