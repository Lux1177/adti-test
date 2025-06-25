<template>
	<div class="max-w-4xl mx-auto">
		<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
			<!-- Progress Section -->
			<div class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<div class="text-white/80">
						{{ currentQuestionIndex + 1 }}-савол, жами {{ totalQuestions }} та
					</div>
					<div class="text-white/80">
						{{ Math.round(progress) }}% бажарилди
					</div>
				</div>

				<!-- Progress Bar -->
				<div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
					<div
						class="h-full bg-white/40 rounded-full transition-all duration-700 ease-out"
						:style="{ width: `${progress}%` }"
					></div>
				</div>
			</div>

			<!-- Question -->
			<div class="mb-8">
				<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
					<h2 class="text-2xl md:text-3xl font-light text-white leading-relaxed" v-html="formattedQuestion"></h2>
				</div>
			</div>

			<!-- Options -->
			<div class="space-y-4 mb-8">
				<button
					v-for="(option, index) in question.options"
					:key="index"
					@click="selectOption(option)"
					:disabled="selectedAnswer !== null"
					class="w-full text-left p-6 rounded-2xl border transition-all duration-300 hover:bg-white/5 disabled:cursor-not-allowed"
					:class="getOptionClasses(option)"
				>
					<div class="flex items-center">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border mr-4 flex items-center justify-center font-medium transition-all duration-300"
						     :class="getOptionIconClasses(option)">
							{{ String.fromCharCode(65 + index) }}
						</div>
						<span class="text-lg" v-html="option.replace(/\n/g, '<br>')"></span>
					</div>
				</button>
			</div>

			<!-- Next Button -->
			<div class="flex justify-end">
				<button
					@click="$emit('next')"
					:disabled="selectedAnswer === null"
					class="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center"
				>
					<span>{{ isLastQuestion ? 'Тестни Тугатиш' : 'Кейинги Савол' }}</span>
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
		return 'bg-white/5 border-white/20 text-white hover:border-white/30'
	}

	if (option === props.question.correctAnswer) {
		return 'bg-green-500/20 border-green-400/50 text-white'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'bg-red-500/20 border-red-400/50 text-white'
	}

	return 'bg-white/5 border-white/10 text-white/60'
}

const getOptionIconClasses = (option: string) => {
	if (selectedAnswer.value === null) {
		return 'border-white/40 text-white/80'
	}

	if (option === props.question.correctAnswer) {
		return 'border-green-400 bg-green-400/20 text-green-300'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'border-red-400 bg-red-400/20 text-red-300'
	}

	return 'border-white/20 text-white/40'
}

// Reset selected answer when question changes
watch(() => props.currentQuestionIndex, () => {
	selectedAnswer.value = null
})
</script>
