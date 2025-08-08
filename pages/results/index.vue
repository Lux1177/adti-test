<template>
	<div class="max-w-6xl mx-auto animate-fade-in-scale">
		<div class="glass-ultra p-6 md:p-8 shadow-2xl rounded-3xl card-ultra-hover">
			<!-- Header -->
			<div class="text-center mb-8 animate-fade-in-up">
				<div class="w-24 h-24 mx-auto mb-6 rounded-full glass-light-ultra flex items-center justify-center animate-float micro-glow">
					<Icon name="heroicons:clipboard-document-list" class="w-14 h-14 text-blue-400 icon-ultra-smooth" />
				</div>
				<h2 class="text-4xl md:text-5xl font-light mb-6 text-white bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					{{ t('results.history') }}
				</h2>
			</div>

			<!-- No Results -->
			<div v-if="results.length === 0" class="text-center py-12 animate-fade-in-up animate-stagger-2">
				<Icon name="heroicons:document-magnifying-glass" class="w-20 h-20 text-white/30 mx-auto mb-6" />
				<h3 class="text-2xl text-white/80 mb-2">{{ t('alert.no_results') }}</h3>
				<p class="text-white/60 mb-8">{{ t('alert.complete_test_first') }}</p>
				<NuxtLink to="/test">
					<button class="btn-ultra-smooth px-8 py-4 text-white font-semibold rounded-2xl flex items-center mx-auto micro-bounce">
						<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-3" />
						{{ t('main.start_button') }}
					</button>
				</NuxtLink>
			</div>

			<!-- Results List -->
			<div v-else>
				<TransitionGroup name="list-ultra" tag="div" class="space-y-6 grid grid-cols-2 gap-6">
					<!-- v-memo helps Vue skip re-rendering this component if the result object hasn't changed -->
					<div v-for="result in results" :key="result.id" v-memo="[result]" class="m-0">
						<NuxtLink
							:to="`/results/${result.id}`"
							class="block glass-light-ultra rounded-3xl p-6 card-ultra-hover transition-all duration-300 hover:border-white/30 min-h-full"
						>
							<div class="min-h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
								<div class="min-h-full flex flex-col justify-between items-start">
									<p class="text-sm text-white/60 mb-2">{{ formatDate(result.completedAt) }}</p>
									<h3 class="text-xl font-semibold text-white mb-2">{{ t(result.quizTitleKey) }}</h3>

								</div>
								<div class="flex items-center gap-4">
									<div class="text-2xl font-light" :class="getScoreColorClass(result.percentage)">
										{{ getGrade(result.percentage) }}
									</div>
									<Icon name="heroicons:chevron-right" class="w-6 h-6 text-white/50" />
								</div>
							</div>
						</NuxtLink>
					</div>
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuizStore } from '~/composables/useQuizStore'
import { useI18n } from '~/composables/useI18n'
import { useHead } from "#app";

const { t, locale } = useI18n()
const quizStore = useQuizStore()

useHead({
	title: "Натижалар",
	meta: [
		{
			name: 'description',
			content: "Тестлар натижалари"
		},
		{
			property: 'og:title',
			content: "Натижалар"
		},
		{
			property: 'og:description',
			content: "Тестлар натижалари"
		},
		{
			property: 'og:image',
			content: '/icon.png'
		}
	],
	link: [
		{
			rel: 'canonical',
			href: `https://adti-test.vercel.app/test/results`
		}
	]
})

const results = computed(() => quizStore.state.resultsHistory)

const formatDate = (timestamp: number) => {
	return new Intl.DateTimeFormat(locale.value, {
		dateStyle: 'long',
		timeStyle: 'short',
	}).format(new Date(timestamp))
}

const getScoreColorClass = (percentage: number) => {
	if (percentage >= 80) return 'text-green-400'
	if (percentage >= 60) return 'text-yellow-400'
	return 'text-red-400'
}

const getGrade = (percentage: number) => {
	if (percentage >= 86) return 5
	else if (percentage >= 71) return 4
	else if (percentage >= 55) return 3
	else return 0
}

</script>
