<template>
	<div>
		<!-- Enhanced Loading State -->
		<div v-if="quizStore.state.isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-6 animate-fade-in-scale">
				<div class="w-20 h-20 mx-auto glass-ultra rounded-full flex items-center justify-center animate-pulse-smooth">
					<div class="animate-spin-smooth rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
				</div>
				<p class="text-2xl text-white font-light">Натижалар юкланмоқда...</p>
			</div>
		</div>

		<!-- Enhanced Error State -->
		<UAlert
			v-else-if="quizStore.state.error"
			color="red"
			variant="solid"
			title="Хатолик"
			:description="quizStore.state.error"
			class="max-w-2xl mx-auto mb-8 animate-fade-in-up"
		/>

		<!-- Enhanced No Results Available -->
		<div v-else-if="!hasResults" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-8 animate-fade-in-scale">
				<div class="glass-ultra rounded-3xl p-12 shadow-2xl card-ultra-hover max-w-lg">
					<div class="w-24 h-24 mx-auto mb-6 glass-light-ultra rounded-full flex items-center justify-center animate-float">
						<Icon name="heroicons:document-text" class="w-12 h-12 text-blue-400 icon-ultra-smooth" />
					</div>
					<h2 class="text-3xl font-light text-white mb-4">Натижалар топилмади</h2>
					<p class="text-white/70 mb-8 text-lg leading-relaxed">Натижаларни кўриш учун аввал тестни тугатишингиз керак.</p>
					<NuxtLink to="/">
						<button class="btn-ultra-smooth px-10 py-4 text-white font-semibold text-lg rounded-2xl flex items-center mx-auto micro-bounce">
							<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-3" />
							Бош саҳифага қайтиш
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Enhanced Quiz Results -->
		<div v-else class="max-w-6xl mx-auto animate-fade-in-scale">
			<div class="glass-ultra p-8 md:p-12 shadow-2xl rounded-3xl card-ultra-hover">
				<!-- Enhanced Header -->
				<div class="text-center mb-12 animate-fade-in-up">
					<div class="w-28 h-28 mx-auto mb-8 rounded-full glass-light-ultra flex items-center justify-center animate-float micro-glow">
						<Icon name="heroicons:trophy" class="w-14 h-14 text-yellow-400 icon-ultra-smooth" />
					</div>

					<h2 class="text-5xl md:text-6xl font-light mb-6 text-white bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
						Тест Натижалари
					</h2>

					<!-- Enhanced Score Display -->
					<div class="glass-light-ultra rounded-3xl p-8 border border-white/10 mb-8 card-ultra-hover">
						<div class="text-2xl md:text-3xl text-white/90 mb-4 font-light">
							Сиз {{ totalQuestions }} тадан {{ score }} тасига тўғри жавоб бердингиз
						</div>
						<div class="text-6xl md:text-7xl font-light mb-6" :class="getScoreColorClass()">
							{{ percentage.toFixed(1) }}%
						</div>
						<div class="text-xl md:text-2xl font-medium" :class="getScoreTextClass()">
							{{ getScoreText() }}
						</div>
					</div>

					<!-- Enhanced Progress Bar -->
					<div class="progress-ultra h-4 rounded-full mb-8">
						<div
							class="progress-fill"
							:class="getProgressBarClass()"
							:style="{ width: `${percentage}%` }"
						></div>
					</div>
				</div>

				<!-- Enhanced Detailed Results -->
				<div class="mb-12 animate-fade-in-up animate-stagger-2">
					<h3 class="text-3xl font-light text-white mb-8 text-center">Жавоблар Тафсилоти</h3>

					<div class="max-h-96 overflow-y-auto space-y-6 custom-scrollbar">
						<TransitionGroup
							name="list-ultra"
							tag="div"
							class="space-y-6"
						>
							<div
								v-for="(answer, index) in userAnswers"
								:key="index"
								class="glass-light-ultra rounded-3xl p-8 border transition-all duration-500 card-ultra-hover"
								:class="answer.isCorrect ? 'border-green-400/40 bg-green-500/10' : 'border-red-400/40 bg-red-500/10'"
							>
								<div class="flex items-start space-x-6">
									<div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
									     :class="answer.isCorrect ? 'bg-green-400/30 text-green-300 border-2 border-green-400/50' : 'bg-red-400/30 text-red-300 border-2 border-red-400/50'">
										{{ index + 1 }}
									</div>

									<div class="flex-1 space-y-4">
										<p class="font-semibold text-white text-lg">
											<span v-html="answer.question.replace(/\n/g, '<br>')"></span>
										</p>

										<div class="space-y-3">
											<p :class="answer.isCorrect ? 'text-green-300' : 'text-red-300'" class="font-medium">
												<strong>Сизнинг жавобингиз:</strong>
												<span v-html="answer.selected.replace(/\n/g, '<br>')"></span>
											</p>

											<p v-if="!answer.isCorrect" class="text-green-300 font-medium">
												<strong>Тўғри жавоб:</strong>
												<span v-html="answer.correct.replace(/\n/g, '<br>')"></span>
											</p>
										</div>
									</div>

									<div class="flex-shrink-0">
										<Icon
											:name="answer.isCorrect ? 'heroicons:check-circle' : 'heroicons:x-circle'"
											class="w-8 h-8 icon-ultra-smooth"
											:class="answer.isCorrect ? 'text-green-400' : 'text-red-400'"
										/>
									</div>
								</div>
							</div>
						</TransitionGroup>
					</div>
				</div>

				<!-- Enhanced Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-stagger-3">
					<button
						@click="restartQuiz"
						class="btn-ultra-smooth px-12 py-5 text-white font-semibold text-xl rounded-3xl flex items-center justify-center micro-bounce"
					>
						<Icon name="heroicons:arrow-path" class="w-6 h-6 mr-3" />
						Тестни Қайта Бошлаш
					</button>

					<NuxtLink to="/">
						<button class="btn-ultra-smooth px-12 py-5 text-blue-300 font-semibold text-xl rounded-3xl flex items-center justify-center w-full sm:w-auto micro-bounce">
							<Icon name="heroicons:home" class="w-6 h-6 mr-3" />
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
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/composables/useQuizStore'
const quizStore = useQuizStore()
const router = useRouter()

useHead({
	title: 'Test natijasi',
	meta: [
		{ name: 'description', content: 'Test natijasi' }
	],
	bodyAttrs: {
		class: 'test'
	},
})

const hasResults = computed(() => {
	return quizStore.state.userAnswers.length > 0 && quizStore.state.currentQuestions.length > 0
})

const score = computed(() => quizStore.state.score)
const totalQuestions = computed(() => quizStore.state.currentQuestions.length)
const percentage = computed(() => quizStore.getPercentage.value)
const userAnswers = computed(() => quizStore.state.userAnswers)

const getScoreColorClass = () => {
	if (percentage.value >= 80) return 'text-green-400'
	if (percentage.value >= 60) return 'text-yellow-400'
	return 'text-red-400'
}

const getProgressBarClass = () => {
	if (percentage.value >= 80) return 'bg-gradient-to-r from-green-400 to-green-500'
	if (percentage.value >= 60) return 'bg-gradient-to-r from-yellow-400 to-yellow-500'
	return 'bg-gradient-to-r from-red-400 to-red-500'
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
	quizStore.resetTest()
	router.push('/')
}

onMounted(() => {
	quizStore.loadQuestions()
	quizStore.loadState()
})
</script>
