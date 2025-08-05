<template>
	<div>
		<!-- Loading State -->
		<div v-if="isLoading" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-4">
				<div class="animate-spin-smooth rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
				<p class="text-lg text-gray-600">{{ t('loading.questions') }}</p>
			</div>
		</div>

		<!-- Error State -->
		<UAlert
			v-else-if="quizStore.state.error"
			color="red"
			variant="solid"
			:title="t('error.title')"
			:description="quizStore.state.error"
			class="max-w-2xl mx-auto mb-8"
		/>

		<!-- No Active Quiz -->
		<div v-else-if="!quizStore.hasActiveQuiz.value" class="flex justify-center items-center min-h-screen">
			<div class="text-center space-y-6">
				<div class="glass-ultra rounded-3xl p-8 shadow-2xl">
					<Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-yellow-400 mx-auto mb-4" />
					<h2 class="text-2xl font-light text-white mb-4">{{ t('alert.no_active_test') }}</h2>
					<p class="text-white/70 mb-6">{{ t('alert.start_test_first') }}</p>
					<NuxtLink to="/test">
						<button class="btn-ultra-smooth px-8 py-4 text-white font-medium text-lg rounded-2xl flex items-center mx-auto">
							<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
							{{ t('nav.home') }}
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Quiz Question -->
		<QuizQuestion
			v-else
			:question="quizStore.getCurrentQuestion.value"
			:current-question-index="quizStore.state.activeQuiz.currentQuestionIndex"
			:total-questions="quizStore.state.activeQuiz.currentQuestions.length"
			:progress="quizStore.getProgress.value"
			:is-last-question="quizStore.isLastQuestion.value"
			@answer="handleAnswer"
			@next="handleNext"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {useHead, useRoute, useRouter} from '#app'
import { useQuizStore } from '~/composables/useQuizStore'
import { useI18n } from '~/composables/useI18n'
import { getQuizInfoById } from "~/data/quizzes.ts";

const quizStore = useQuizStore()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const isLoading = ref(true)
const quizId = route.params.quizId as string

onMounted(() => {
	isLoading.value = false;
	if (quizStore.state.activeQuiz.currentQuizId !== quizId) {
		// If the active quiz from the store doesn't match the URL,
		// the user shouldn't be here. Redirect them.
		router.push('/test');
	}
});

const quiz = getQuizInfoById(quizId);

useHead({
	title: t(quiz?.titleKey),
	meta: [
		{
			name: 'description',
			content: t(quiz?.descriptionKey)
		},
		{
			property: 'og:title',
			content: t(quiz?.titleKey)
		},
		{
			property: 'og:description',
			content: t(quiz?.descriptionKey)
		},
		{
			property: 'og:image',
			content: '/icon.png'
		}
	],
	link: [
		{
			rel: 'canonical',
			href: `https://adti-test.vercel.app/test/${quizId}`
		}
	]
})

const handleAnswer = (answer: string) => {
	quizStore.selectAnswer(answer)
}

const handleNext = () => {
	if (quizStore.isLastQuestion.value) {
		quizStore.finishTest()
		router.push('/results')
	} else {
		quizStore.nextQuestion()
	}
}
</script>
