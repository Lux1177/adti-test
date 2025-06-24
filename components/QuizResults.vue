<template>
	<div class="max-w-5xl mx-auto">
		<div class="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8">
			<!-- Header -->
			<div class="text-center mb-8">
				<div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
					<Icon name="heroicons:trophy" class="w-12 h-12 text-white" />
				</div>

				<h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
					Test Natijalari
				</h2>

				<!-- Score Display -->
				<div class="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 mb-6">
					<div class="text-2xl text-white/90 mb-2">
						Siz {{ totalQuestions }} tadan {{ score }} ball to'pladingiz
					</div>
					<div class="text-4xl font-bold mb-4" :class="getScoreColorClass()">
						{{ percentage.toFixed(1) }}%
					</div>
					<div class="text-lg" :class="getScoreTextClass()">
						{{ getScoreText() }}
					</div>
				</div>

				<!-- Progress Bar -->
				<div class="w-full bg-white/10 rounded-full h-4 overflow-hidden mb-8">
					<div
						class="h-full rounded-full transition-all duration-1000 ease-out"
						:class="getProgressBarClass()"
						:style="{ width: `${percentage}%` }"
					></div>
				</div>
			</div>

			<!-- Detailed Results -->
			<div class="mb-8">
				<h3 class="text-2xl font-bold text-white mb-6 text-center">Javoblar Tafsilotlari</h3>

				<div class="max-h-96 overflow-y-auto space-y-4 custom-scrollbar">
					<div
						v-for="(answer, index) in userAnswers"
						:key="index"
						class="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01]"
						:class="answer.isCorrect ? 'bg-green-500/10 border-green-400/30' : 'bg-red-500/10 border-red-400/30'"
					>
						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
							     :class="answer.isCorrect ? 'bg-green-400 text-white' : 'bg-red-400 text-white'">
								{{ index + 1 }}
							</div>

							<div class="flex-1 space-y-3">
								<p class="font-semibold text-white">
									<span v-html="answer.question.replace(/\n/g, '<br>')"></span>
								</p>

								<div class="space-y-2">
									<p :class="answer.isCorrect ? 'text-green-300' : 'text-red-300'">
										<strong>Sizning javobingiz:</strong>
										<span v-html="answer.selected.replace(/\n/g, '<br>')"></span>
									</p>

									<p v-if="!answer.isCorrect" class="text-blue-300">
										<strong>To'g'ri javob:</strong>
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

			<!-- Restart Button -->
			<div class="text-center">
				<button
					@click="$emit('restart')"
					class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto"
				>
					<Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2" />
					Testni Qayta Boshlash
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { UserAnswer } from '~/types/quiz'

interface Props {
	score: number
	totalQuestions: number
	percentage: number
	userAnswers: UserAnswer[]
}

const props = defineProps<Props>()
defineEmits<{
	restart: []
}>()

const getScoreColorClass = () => {
	if (props.percentage >= 80) return 'text-green-400'
	if (props.percentage >= 60) return 'text-yellow-400'
	return 'text-red-400'
}

const getScoreTextClass = () => {
	if (props.percentage >= 80) return 'text-green-300'
	if (props.percentage >= 60) return 'text-yellow-300'
	return 'text-red-300'
}

const getProgressBarClass = () => {
	if (props.percentage >= 80) return 'bg-gradient-to-r from-green-400 to-emerald-500'
	if (props.percentage >= 60) return 'bg-gradient-to-r from-yellow-400 to-orange-500'
	return 'bg-gradient-to-r from-red-400 to-pink-500'
}

const getScoreText = () => {
	if (props.percentage >= 90) return 'Ajoyib! Siz mukammal natija ko\'rsatdingiz!'
	if (props.percentage >= 80) return 'Juda yaxshi! Sizning natijangiz a\'lo!'
	if (props.percentage >= 70) return 'Yaxshi natija! Biroz ko\'proq mashq qiling.'
	if (props.percentage >= 60) return 'O\'rtacha natija. Ko\'proq o\'rganishga harakat qiling.'
	return 'Natija past. Ko\'proq mashq qilish kerak.'
}
</script>
