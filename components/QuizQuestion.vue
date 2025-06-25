<template>
	<div class="max-w-4xl mx-auto animate-scale-in">
		<div class="glass p-6 md:p-8 shadow-2xl rounded-3xl">
			<!-- Progress Section with smooth animations -->
			<div class="mb-8 animate-fade-in">
				<div class="flex justify-between items-center mb-4">
					<div class="text-white/80 transition-all duration-300">
						{{ currentQuestionIndex + 1 }}-савол, жами {{ totalQuestions }} та
					</div>
					<div class="text-white/80 transition-all duration-300">
						{{ Math.round(progress) }}% бажарилди
					</div>
				</div>

				<!-- Enhanced Progress Bar -->
				<div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
					<div
						class="h-full bg-white/40 rounded-full progress-bar"
						:style="{ width: `${progress}%` }"
					></div>
				</div>
			</div>

			<!-- Question with smooth entrance -->
			<div class="mb-8 animate-fade-in-up">
				<div class="glass-light rounded-2xl p-6 border border-white/10 card-hover">
					<h2 class="text-2xl md:text-3xl font-light text-white leading-relaxed transition-all duration-300" v-html="formattedQuestion"></h2>
				</div>
			</div>

			<!-- Options with staggered animation -->
			<div class="space-y-4 mb-8">
				<button
					v-for="(option, index) in question.options"
					:key="index"
					@click="selectOption(option)"
					:disabled="selectedAnswer !== null"
					class="w-full text-left p-6 rounded-2xl border transition-all duration-300 hover:bg-white/5 disabled:cursor-not-allowed card-hover animate-fade-in-up"
					:class="getOptionClasses(option)"
					:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
				>
					<div class="flex items-center">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border mr-4 flex items-center justify-center font-medium transition-all duration-300"
						     :class="getOptionIconClasses(option)">
							{{ String.fromCharCode(65 + index) }}
						</div>
						<span class="text-lg transition-all duration-300" v-html="option.replace(/\n/g, '<br>')"></span>
					</div>
				</button>
			</div>

			<!-- Next Button with smooth transition -->
			<div class="flex justify-end">
				<Transition
					enter-active-class="transition-all duration-300 ease-out"
					enter-from-class="opacity-0 scale-95 translate-y-2"
					leave-active-class="transition-all duration-200 ease-in"
					leave-to-class="opacity-0 scale-95 translate-y-2"
				>
					<button
						v-if="selectedAnswer !== null"
						@click="$emit('next')"
						class="btn-smooth px-8 py-4 glass border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/20 flex items-center"
					>
						<span>{{ isLastQuestion ? 'Тестни Тугатиш' : 'Кейинги Савол' }}</span>
						<Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
					</button>
				</Transition>
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
		return 'bg-white/5 border-white/20 text-white hover:border-white/30 hover:bg-white/8'
	}

	if (option === props.question.correctAnswer) {
		return 'bg-green-500/20 border-green-400/50 text-white shadow-lg shadow-green-500/10'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'bg-red-500/20 border-red-400/50 text-white shadow-lg shadow-red-500/10'
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

// Reset selected answer when question changes with smooth transition
watch(() => props.currentQuestionIndex, () => {
	selectedAnswer.value = null
})
</script>
