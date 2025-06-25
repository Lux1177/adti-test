<template>
	<div>
		<!-- Loading State -->
		<div v-if="quizStore.isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-4">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
				<p class="text-lg text-gray-600">Натижалар юкланмоқда...</p>
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

		<!-- No Results Available -->
		<div v-else-if="!hasResults" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-6">
				<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl animate-scale-in">
					<Icon name="heroicons:document-text" class="w-16 h-16 text-blue-400 mx-auto mb-4" />
					<h2 class="text-2xl font-light text-white mb-4">Натижалар топилмади</h2>
					<p class="text-white/70 mb-6">Натижаларни кўриш учун аввал тестни тугатишингиз керак.</p>
					<NuxtLink to="/">
						<button class="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center mx-auto">
							<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
							Бош саҳифага қайтиш
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Quiz Results -->
		<div v-else class="max-w-5xl mx-auto animate-scale-in">
			<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
				<!-- Header -->
				<div class="text-center mb-8">
					<div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
						<Icon name="heroicons:trophy" class="w-10 h-10 text-white" />
					</div>

					<h2 class="text-4xl font-light mb-4 text-white">
						Тест Натижалари
					</h2>

					<!-- Score Display -->
					<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
						<div class="text-2xl text-white/90 mb-2">
							Сиз {{ totalQuestions }} тадан {{ score }} тасига тўғри жавоб бердингиз
						</div>
						<div class="text-4xl font-light mb-4" :class="getScoreColorClass()">
							{{ percentage.toFixed(1) }}%
						</div>
						<div class="text-lg" :class="getScoreTextClass()">
							{{ getScoreText() }}
						</div>
					</div>

					<!-- Progress Bar -->
					<div class="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-8">
						<div
							class="h-full rounded-full transition-all duration-1000 ease-out progress-bar"
							:class="getProgressBarClass()"
							:style="{ width: `${percentage}%` }"
						></div>
					</div>
				</div>

				<!-- Detailed Results -->
				<div class="mb-8">
					<h3 class="text-2xl font-light text-white mb-6 text-center">Жавоблар Тафсилоти</h3>

					<div class="max-h-96 overflow-y-auto space-y-4 custom-scrollbar">
						<div
							v-for="(answer, index) in userAnswers"
							:key="index"
							class="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 animate-fade-in-up"
							:class="answer.isCorrect ? 'bg-green-500/10 border-green-400/30' : 'bg-red-500/10 border-red-400/30'"
							:style="{ animationDelay: `${index * 0.1}s` }"
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
											<strong>Сизнинг жавобингиз:</strong>
											<span v-html="answer.selected.replace(/\n/g, '<br>')"></span>
										</p>

										<p v-if="!answer.isCorrect" class="text-green-300">
											<strong>Тўғри жавоб:</strong>
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
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						@click="restartQuiz"
						class="btn-smooth px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
					>
						<Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2" />
						Тестни Қайта Бошлаш
					</button>

					<NuxtLink to="/">
						<button class="btn-smooth px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 font-medium text-lg rounded-2xl hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
							<Icon name="heroicons:home" class="w-5 h-5 mr-2" />
							Бош саҳифага қайтиш
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useHead } from '#app'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/stores/quiz'

const quizStore = useQuizStore()
const router = useRouter()

// Set page meta
useHead({
	title: 'Тест Натижалари - Инглиз Тили Бўйича Тест',
	meta: [
		{ name: 'description', content: 'Инглиз тили тести натижалари' }
	]
})

// Computed properties for results
const hasResults = computed(() => {
	return quizStore.userAnswers.length > 0 && quizStore.currentQuestions.length > 0
})

const score = computed(() => quizStore.score)
const totalQuestions = computed(() => quizStore.currentQuestions.length)
const percentage = computed(() => quizStore.getPercentage)
const userAnswers = computed(() => quizStore.userAnswers)

const getScoreColorClass = () => {
	if (percentage.value >= 80) return 'text-green-400'
	if (percentage.value >= 60) return 'text-yellow-400'
	return 'text-red-400'
}

const getProgressBarClass = () => {
	if (percentage.value >= 80) return 'bg-green-400/60'
	if (percentage.value >= 60) return 'bg-yellow-400/60'
	return 'bg-red-400/60'
}

const getScoreTextClass = () => {
	if (percentage.value >= 80) return 'text-green-300'
	if (percentage.value >= 60) return 'text-yellow-300'
	return 'text-red-300'
}

const getScoreText = () => {
	if (percentage.value >= 90) return 'Зўр! Ажойиб натижа!'
	if (percentage.value >= 80) return 'Жуда яхши! Табриклаймиз!'
	if (percentage.value >= 70) return 'Яхши иш! Давом этинг.'
	if (percentage.value >= 60) return 'Ўртача натижа. Кўпроқ машқ қилинг.'
	return 'Ўқишни давом этинг ва қайта уриниб кўринг.'
}

const restartQuiz = () => {
	quizStore.resetTest() // Clear saved state
	router.push('/') // Redirect to home page
}

// Load state on mount to get results
onMounted(() => {
	// Load questions if not already loaded
	if (quizStore.allQuestions.length === 0) {
		quizStore.loadQuestions()
	}

	// Load saved state to get results
	quizStore.loadState()
})
</script>
