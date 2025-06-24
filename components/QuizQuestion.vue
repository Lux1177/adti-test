<template>
	<div class="max-w-4xl mx-auto">
		<div class="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8">
			<!-- Progress Section -->
			<div class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<div class="text-white/80 font-medium">
						Savol {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
					</div>
					<div class="text-white/80 font-medium">
						{{ Math.round(progress) }}% tugallandi
					</div>
				</div>

				<!-- Progress Bar -->
				<div class="w-full bg-white/10 rounded-full h-3 overflow-hidden">
					<div
						class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700 ease-out shadow-lg"
						:style="{ width: `${progress}%` }"
					>
						<div class="h-full bg-white/20 animate-pulse"></div>
					</div>
				</div>
			</div>

			<!-- Question -->
			<div class="mb-8">
				<div class="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
					<h2 class="text-2xl md:text-3xl font-bold text-white leading-relaxed" v-html="formattedQuestion"></h2>
				</div>
			</div>

			<!-- Options -->
			<div class="space-y-4 mb-8">
				<button
					v-for="(option, index) in question.options"
					:key="index"
					@click="selectOption(option)"
					:disabled="selectedAnswer !== null"
					class="w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed group"
					:class="getOptionClasses(option)"
				>
					<div class="flex items-center">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center font-bold transition-all duration-300"
						     :class="getOptionIconClasses(option)">
							{{ String.fromCharCode(65 + index) }}
						</div>
						<span class="text-lg font-medium" v-html="option.replace(/\n/g, '<br>')"></span>
					</div>
				</button>
			</div>

			<!-- Next Button -->
			<div class="flex justify-end">
				<button
					@click="$emit('next')"
					:disabled="selectedAnswer === null"
					class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center"
				>
					<span>{{ isLastQuestion ? 'Testni Yakunlash' : 'Keyingi Savol' }}</span>
					<Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Question } from '~/types/quiz'

interface Props {
	question: Question
	currentQuestionIndex: number
	totalQuestions: number
	progress: number
	isLastQuestion: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
	next: []
	answer: [answer: string]
}>()

const selectedAnswer = ref<string | null>(null)

const formattedQuestion = computed(() => {
	return props.question.questionText.replace(/\n/g, '<br>')
})

const selectOption = (option: string) => {
	if (selectedAnswer.value !== null) return

	selectedAnswer.value = option
	emit('answer', option)
}

const getOptionClasses = (option: string) => {
	if (selectedAnswer.value === null) {
		return 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white'
	}

	if (option === props.question.correctAnswer) {
		return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400 text-white shadow-lg shadow-green-500/20'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400 text-white shadow-lg shadow-red-500/20'
	}

	return 'bg-white/5 border-white/10 text-white/60'
}

const getOptionIconClasses = (option: string) => {
	if (selectedAnswer.value === null) {
		return 'border-white/40 text-white/80'
	}

	if (option === props.question.correctAnswer) {
		return 'border-green-400 bg-green-400 text-white'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'border-red-400 bg-red-400 text-white'
	}

	return 'border-white/20 text-white/40'
}

// Reset selected answer when question changes
watch(() => props.currentQuestionIndex, () => {
	selectedAnswer.value = null
})
</script>
