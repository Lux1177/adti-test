<template>
	<div class="flex items-center justify-center min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
			<div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style="animation-delay: -1s;"></div>
			<div class="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float micro-glow"></div>
		</div>

		<div class="w-full max-w-6xl animate-fade-in-scale gpu-accelerated relative z-10">
			<div class="glass-ultra p-6 md:p-8 text-center shadow-2xl rounded-3xl card-ultra-hover">
				<!-- Category Badge -->
				<div class="mb-8 animate-stagger-1">
					<div class="inline-flex items-center px-6 py-3 glass-light-ultra rounded-full">
						<div class="w-8 h-8 mr-3 rounded-full flex items-center justify-center">
							<NuxtImg
								:src="getCategoryImage(selectedCategory)"
								:alt="getCategoryTitle(selectedCategory)"
								class="w-full h-full object-cover rounded-full"
								preload
								format="webp"
								quality="80"
							/>
						</div>
						<span class="text-white font-medium">{{ getCategoryTitle(selectedCategory) }}</span>
					</div>
				</div>

				<!-- Enhanced Title -->
				<h1 class="text-4xl md:text-6xl font-light mb-4 text-white animate-fade-in-up animate-stagger-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					{{ t('quiz.select') }}
				</h1>

				<!-- Available Quizzes -->
				<div v-if="availableQuizzes.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div
						v-for="(quiz, index) in availableQuizzes"
						:key="quiz.id"
						@mouseenter="prefetchQuiz(quiz.id)"
						class="glass-light-ultra rounded-3xl p-6 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110"
						:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
					>
						<div class="text-left">
							<div class="flex items-center mb-4">
								<div
									class="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-2xl mr-4"
									:class="quiz.color"
								>
									{{ quiz.icon }}
								</div>
								<div class="flex-1">
									<h3 class="text-lg md:text-xl font-semibold text-white mb-2">
										{{ t(quiz.titleKey) }}
									</h3>
									<div class="flex items-center space-x-4 text-sm text-white/60">
                    <span class="flex items-center">
                      <Icon name="heroicons:document-text" class="w-4 h-4 mr-1" />
                      {{ quiz.questionCount }} {{ t('quiz.total') }}
                    </span>
										<span class="flex items-center capitalize">
                      <Icon name="heroicons:signal" class="w-4 h-4 mr-1" />
                      {{ quiz.difficulty }}
                    </span>
									</div>
								</div>
							</div>

							<p class="text-white/80 text-base leading-relaxed mb-4">
								{{ t(quiz.descriptionKey) }}
							</p>

							<!-- Features -->
							<div class="grid grid-cols-3 gap-3 mb-4">
								<div class="glass-light-ultra rounded-xl p-3 micro-lift text-center">
									<Icon name="heroicons:clock" class="w-6 h-6 text-white/80 mx-auto mb-1" />
									<p class="text-white/70 text-xs font-medium">{{ t('feature.unlimited') }}</p>
								</div>
								<div class="glass-light-ultra rounded-xl p-3 micro-lift text-center">
									<Icon name="heroicons:chart-bar" class="w-6 h-6 text-white/80 mx-auto mb-1" />
									<p class="text-white/70 text-xs font-medium">{{ t('feature.detailed') }}</p>
								</div>
								<div class="glass-light-ultra rounded-xl p-3 micro-lift text-center">
									<Icon name="heroicons:arrow-path" class="w-6 h-6 text-white/80 mx-auto mb-1" />
									<p class="text-white/70 text-xs font-medium">{{ t('feature.retake') }}</p>
								</div>
							</div>

							<!-- Resume Quiz Notice -->
							<Transition
								enter-active-class="modal-ultra-enter-active"
								leave-active-class="modal-ultra-leave-active"
								enter-from-class="modal-ultra-enter-from"
								leave-to-class="modal-ultra-leave-to"
							>
								<div v-if="hasActiveQuiz && currentQuizId === quiz.id" class="glass-light-ultra border border-yellow-400/30 rounded-2xl p-4 mb-6 animate-pulse-smooth">
									<div class="flex items-center justify-center space-x-2 mb-2">
										<Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-yellow-400" />
										<span class="text-yellow-300 font-semibold text-sm">{{ t('alert.attention') }}</span>
									</div>
									<p class="text-yellow-200 mb-4 text-sm leading-relaxed">
										{{ t('alert.incomplete_test') }}
									</p>
									<div class="flex flex-col sm:flex-row gap-3 justify-center">
										<NuxtLink :to="`/test/${quiz.id}`">
											<button class="btn-ultra-smooth px-6 py-3 text-green-300 font-semibold rounded-xl flex items-center micro-bounce text-sm">
												<Icon name="heroicons:play" class="w-4 h-4 mr-2" />
												{{ t('alert.continue_test') }}
											</button>
										</NuxtLink>
										<button
											@click="startQuiz(quiz.id)"
											class="btn-ultra-smooth px-6 py-3 text-red-300 font-semibold rounded-xl flex items-center micro-bounce text-sm"
										>
											<Icon name="heroicons:arrow-path" class="w-4 h-4 mr-2" />
											{{ t('alert.new_test') }}
										</button>
									</div>
								</div>
							</Transition>

							<!-- Start Button -->
							<button
								v-if="!hasActiveQuiz || currentQuizId !== quiz.id"
								@click="startQuiz(quiz.id)"
								:disabled="loading"
								class="btn-ultra-smooth px-6 py-3 text-white font-semibold text-base rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed micro-bounce group w-full"
							>
                <span v-if="!loading" class="flex items-center justify-center">
                  <Icon name="heroicons:play" class="w-5 h-5 mr-3 transition-transform group-hover:translate-x-1" />
                  {{ t('quiz.start') }}
                </span>
								<span v-else class="flex items-center justify-center">
                  <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin-smooth mr-3"></div>
                  {{ t('loading.general') }}
                </span>
							</button>
						</div>
					</div>
				</div>

				<!-- No Quizzes Available -->
				<div v-else class="glass-light-ultra rounded-3xl p-12 mb-12 animate-fade-in-up animate-stagger-3">
					<div class="text-center">
						<div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-4xl">
							📚
						</div>
						<h3 class="text-2xl font-semibold text-white mb-4">{{ t('quiz.coming_soon') }}</h3>
						<p class="text-white/70 text-lg">{{ t('quiz.no_quizzes') }}</p>
					</div>
				</div>

				<!-- Navigation Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						@click="$emit('back-to-categories')"
						class="text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center micro-lift"
					>
						<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
						{{ t('quiz.back_to_categories') }}
					</button>

					<button
						@click="$emit('change-language')"
						class="text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center micro-lift"
					>
						<Icon name="heroicons:language" class="w-5 h-5 mr-2" />
						{{ t('language.select') }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useQuizStore } from '~/composables/useQuizStore'
import { quizzes } from '~/data/quizzes'
import type { UserCategory } from '~/types/quiz'

const { t, locale } = useI18n()
const quizStore = useQuizStore()

interface Props {
	loading?: boolean
	hasActiveQuiz?: boolean
	selectedCategory: UserCategory
	currentQuizId?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
	start: [quizId: string]
	'back-to-categories': []
	'change-language': []
}>()

const availableQuizzes = computed(() => {
	return quizzes.filter(quiz =>
		quiz.available && quiz.category.includes(props.selectedCategory)
	)
})

const startQuiz = (quizId: string) => {
	emit('start', quizId)
}

const prefetchQuiz = (quizId: string) => {
	quizStore.prefetchQuestions(quizId, locale.value)
}

const getCategoryImage = (category: UserCategory) => {
	const images = {
		professor: '/images/professor.png',
		employee: '/images/employee.png',
		student: '/images/student.png',
		medical: '/images/medical.png',
		applicant: '/images/applicant.png',
		academic_lyceum: '/images/lyceum.png'
	}
	return images[category]
}

const getCategoryTitle = (category: UserCategory) => {
	const titles = {
		professor: 'Professor',
		employee: 'Employee',
		student: 'Student',
		medical: 'Medical',
		applicant: 'Applicant',
		academic_lyceum: 'Academic Lyceum'
	}
	return titles[category]
}
</script>
