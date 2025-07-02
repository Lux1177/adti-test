<template>
	<div class="max-w-4xl mx-auto animate-fade-in-scale gpu-accelerated">
		<div class="glass-ultra p-4 md:p-6 shadow-2xl rounded-3xl card-ultra-hover">
			<!-- Enhanced Progress Section -->
			<div class="mb-6 animate-fade-in-up">
				<div class="flex justify-between items-center mb-6">
					<div class="text-white/90 font-medium text-lg transition-all duration-300">
						{{ t('quiz.question') }} {{ currentQuestionIndex + 1 }}, {{ t('quiz.total') }} {{ totalQuestions }}
					</div>
					<div class="text-white/90 font-medium text-lg transition-all duration-300">
						{{ Math.round(progress) }}% {{ t('quiz.completed') }}
					</div>
				</div>

				<!-- Ultra Smooth Progress Bar -->
				<div class="progress-ultra h-3 rounded-full">
					<div
						class="progress-fill"
						:style="{ width: `${progress}%` }"
					></div>
				</div>
			</div>

			<!-- Enhanced Question -->
			<div class="mb-6 animate-fade-in-up animate-stagger-2">
				<div class="glass-light-ultra rounded-3xl p-6 border border-white/10 card-ultra-hover">
					<h2 class="text-2xl md:text-4xl font-light text-white leading-relaxed transition-all duration-300" v-html="formattedQuestion"></h2>
				</div>
			</div>

			<!-- Enhanced Options with Ultra Smooth Animations -->
			<div class="space-y-3 mb-6">
				<button
					v-for="(option, index) in question.options"
					:key="index"
					@click="selectOption(option)"
					:disabled="selectedAnswer !== null"
					class="w-full text-left p-4 md:p-5 rounded-3xl border transition-all duration-500 disabled:cursor-not-allowed card-ultra-hover animate-fade-in-up micro-bounce gpu-accelerated"
					:class="getOptionClasses(option)"
					:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
				>
					<div class="flex items-center">
						<div class="flex-shrink-0 w-10 h-10 rounded-full border-2 mr-6 flex items-center justify-center font-semibold text-lg transition-all duration-500"
						     :class="getOptionIconClasses(option)">
							{{ String.fromCharCode(65 + index) }}
						</div>
						<span class="text-base md:text-lg font-medium transition-all duration-300" v-html="option.replace(/\n/g, '<br>')"></span>
					</div>
				</button>
			</div>

			<!-- Enhanced Next Button -->
			<div class="flex justify-end">
				<button
					@click="$emit('next')"
					:disabled="selectedAnswer === null"
					class="btn-ultra-smooth px-8 py-4 text-white font-semibold text-lg rounded-3xl transition-all duration-300 flex items-center group micro-bounce"
					:class="selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'"
				>
					<span class="mr-3">{{ isLastQuestion ? t('quiz.finish') : t('quiz.next') }}</span>
					<Icon name="heroicons:arrow-right" class="w-6 h-6 transition-transform duration-300"
					      :class="selectedAnswer !== null ? 'group-hover:translate-x-2' : ''" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Question } from '~/types/quiz'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()

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
		return 'bg-white/5 border-white/20 text-white hover:border-white/40 hover:bg-white/10 hover:brightness-110'
	}

	if (option === props.question.correctAnswer) {
		return 'bg-green-500/20 border-green-400/60 text-white shadow-2xl shadow-green-500/20 brightness-110'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'bg-red-500/20 border-red-400/60 text-white shadow-2xl shadow-red-500/20 brightness-110'
	}

	return 'bg-white/5 border-white/10 text-white/60 brightness-75'
}

const getOptionIconClasses = (option: string) => {
	if (selectedAnswer.value === null) {
		return 'border-white/50 text-white/90 bg-white/10'
	}

	if (option === props.question.correctAnswer) {
		return 'border-green-400 bg-green-400/30 text-green-300 shadow-lg shadow-green-500/30'
	} else if (option === selectedAnswer.value && option !== props.question.correctAnswer) {
		return 'border-red-400 bg-red-400/30 text-red-300 shadow-lg shadow-red-500/30'
	}

	return 'border-white/20 text-white/40 bg-white/5'
}

// Reset with smooth transition when question changes
watch(() => props.currentQuestionIndex, () => {
	selectedAnswer.value = null
})
</script>
