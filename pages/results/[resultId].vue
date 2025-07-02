<template>
	<div>
		<!-- Error State -->
		<div v-if="!result" class="flex justify-center items-center min-h-[calc(100vh-5rem)]">
			<div class="text-center space-y-8 animate-fade-in-scale">
				<div class="glass-ultra rounded-3xl p-12 shadow-2xl card-ultra-hover max-w-lg">
					<div class="w-24 h-24 mx-auto mb-6 glass-light-ultra rounded-full flex items-center justify-center animate-float">
						<Icon name="heroicons:exclamation-triangle" class="w-12 h-12 text-red-400 icon-ultra-smooth" />
					</div>
					<h2 class="text-3xl font-light text-white mb-4">{{ t('alert.no_results') }}</h2>
					<p class="text-white/70 mb-8 text-lg leading-relaxed">{{ t('alert.result_not_found') }}</p>
					<NuxtLink to="/results">
						<button class="btn-ultra-smooth px-10 py-4 text-white font-semibold text-lg rounded-2xl flex items-center mx-auto micro-bounce">
							<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-3" />
							{{ t('results.all_results') }}
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Quiz Results Component -->
		<QuizResults v-else :result="result" @restart="handleRestart" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from '#app'
import { useQuizStore } from '~/composables/useQuizStore'
import { useI18n } from '~/composables/useI18n'
import type { QuizResult } from '~/types/quiz'

const route = useRoute()
const router = useRouter()
const quizStore = useQuizStore()
const { t, locale } = useI18n()

const resultId = route.params.resultId as string
const result = ref<QuizResult | undefined>(undefined)

onMounted(() => {
	result.value = quizStore.getResultById(resultId)
})

const handleRestart = async (quizId: string) => {
	const success = await quizStore.startTest(quizId, locale.value)
	if (success) {
		router.push(`/test/${quizId}`)
	}
}
</script>
