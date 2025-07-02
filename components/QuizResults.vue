<template>
	<div class="max-w-5xl mx-auto">
		<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
			<!-- Header -->
			<div class="text-center mb-8">
				<div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
					<Icon name="heroicons:trophy" class="w-10 h-10 text-white" />
				</div>

				<h2 class="text-4xl font-light mb-4 text-white">
					{{ t('results.title') }}
				</h2>
				<h3 class="text-xl text-white/80">{{ t(result.quizTitleKey) }}</h3>

				<!-- Score Display -->
				<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 my-6">
					<div class="text-2xl text-white/90 mb-2">
						{{ t('results.score', { score: result.score, total: result.totalQuestions }) }}
					</div>
					<div class="text-4xl font-light mb-4" :class="getScoreColorClass(result.percentage)">
						{{ result.percentage.toFixed(1) }}%
					</div>
					<div class="text-lg" :class="getScoreTextClass(result.percentage)">
						{{ getScoreText(result.percentage) }}
					</div>
				</div>

				<!-- Progress Bar -->
				<div class="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-8">
					<div
						class="h-full rounded-full transition-all duration-1000 ease-out"
						:class="getProgressBarClass(result.percentage)"
						:style="{ width: `${result.percentage}%` }"
					></div>
				</div>
			</div>

			<!-- Detailed Results -->
			<div class="mb-8">
				<h3 class="text-2xl font-light text-white mb-6 text-center">{{ t('results.details') }}</h3>

				<div class="max-h-96 overflow-y-auto space-y-4 custom-scrollbar">
					<div
						v-for="(answer, index) in result.userAnswers"
						:key="index"
						class="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300"
						:class="answer.isCorrect ? 'bg-green-500/10 border-green-400/30' : 'bg-red-500/10 border-red-400/30'"
					>
						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm"
							     :class="answer.isCorrect ? 'bg-green-400/20 text-green-300 border border-green-400/30' : 'bg-red-400/20 text-red-300 border border-red-400/30'">
								{{ index + 1 }}
							</div>

							<div class="flex-1 space-y-3">
								<p class="font-medium text-white">
									<span v-html="answer.question.replace(/\n/g, '<br>')"></span>
								</p>

								<div class="space-y-2">
									<p :class="answer.isCorrect ? 'text-green-300' : 'text-red-300'">
										<strong>{{ t('results.your_answer') }}</strong>
										<span v-html="answer.selected.replace(/\n/g, '<br>')"></span>
									</p>

									<p v-if="!answer.isCorrect" class="text-green-300">
										<strong>{{ t('results.correct_answer') }}</strong>
										<span v-html="answer.correct.replace(/\n/g, '<br>')"></span>
									</p>
								</div>
							</div>

							<div class="flex-shrink-0">
								<Icon
									:name="answer.isCorrect ? 'heroicons:check-circle' : 'heroicons:x-circle'"
									class="w-6 h-6"
									:class="answer.isCorrect ? 'text-green-400' : 'text-red-400'"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="text-center flex flex-col sm:flex-row gap-4 justify-center">
				<button
					@click="$emit('restart', result.quizId)"
					class="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center mx-auto"
				>
					<Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2" />
					{{ t('results.restart') }}
				</button>
				<NuxtLink to="/results">
					<button class="px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white font-medium text-lg rounded-2xl hover:bg-blue-500/30 transition-all duration-300 flex items-center mx-auto">
						<Icon name="heroicons:list-bullet" class="w-5 h-5 mr-2" />
						{{ t('results.all_results') }}
					</button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { QuizResult } from '~/types/quiz'
import { useI18n } from '~/composables/useI18n'

interface Props {
	result: QuizResult
}

const props = defineProps<Props>()
const { t } = useI18n()

const getScoreColorClass = (percentage: number) => {
	if (percentage >= 80) return 'text-green-400'
	if (percentage >= 60) return 'text-yellow-400'
	return 'text-red-400'
}

const getProgressBarClass = (percentage: number) => {
	if (percentage >= 80) return 'bg-green-400/60'
	if (percentage >= 60) return 'bg-yellow-400/60'
	return 'bg-red-400/60'
}

const getScoreTextClass = (percentage: number) => {
	if (percentage >= 80) return 'text-green-300'
	if (percentage >= 60) return 'text-yellow-300'
	return 'text-red-300'
}

const getScoreText = (percentage: number) => {
	if (percentage >= 90) return t('score.excellent')
	if (percentage >= 80) return t('score.very_good')
	if (percentage >= 70) return t('score.good')
	if (percentage >= 60) return t('score.average')
	return t('score.poor')
}

defineEmits<{
	restart: [quizId: string]
}>()
</script>
