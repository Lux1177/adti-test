<template>
	<div class="flex items-center justify-center min-h-screen relative overflow-hidden">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
			<div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style="animation-delay: -1s;"></div>
			<div class="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
		</div>

		<div class="w-full max-w-6xl animate-fade-in-scale gpu-accelerated relative z-10">
			<div class="glass-ultra p-8 md:p-12 text-center shadow-2xl rounded-3xl card-ultra-hover">
				<!-- Enhanced Title -->
				<h1 class="text-4xl md:text-6xl font-light mb-12 text-white animate-fade-in-up bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					{{ t('category.test_collections') }}
				</h1>

				<!-- Category Options Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					<!-- Professor/Teacher -->
					<button
						@click="selectCategory('professor')"
						class="glass-light-ultra rounded-3xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						style="animation-delay: 0.1s"
					>
						<div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
							👨‍🏫
						</div>
						<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t('category.professor') }}
						</h3>
					</button>

					<!-- Employee -->
					<button
						@click="selectCategory('employee')"
						class="glass-light-ultra rounded-3xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						style="animation-delay: 0.2s"
					>
						<div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
							👩‍💼
						</div>
						<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t('category.employee') }}
						</h3>
					</button>

					<!-- Student -->
					<button
						@click="selectCategory('student')"
						class="glass-light-ultra rounded-3xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						style="animation-delay: 0.3s"
					>
						<div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
							👨‍🎓
						</div>
						<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t('category.student') }}
						</h3>
					</button>

					<!-- Medical Worker -->
					<button
						@click="selectCategory('medical')"
						class="glass-light-ultra rounded-3xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						style="animation-delay: 0.4s"
					>
						<div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
							👨‍⚕️
						</div>
						<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t('category.medical') }}
						</h3>
					</button>

					<!-- Applicant -->
					<button
						@click="selectCategory('applicant')"
						class="glass-light-ultra rounded-3xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						style="animation-delay: 0.5s"
					>
						<div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
							🎓
						</div>
						<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t('category.applicant') }}
						</h3>
					</button>
				</div>

				<!-- Back Button -->
				<button
					@click="$emit('back')"
					class="text-white/60 hover:text-white transition-all duration-300 flex items-center mx-auto micro-lift"
				>
					<Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
					{{ t('language.select') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from '~/composables/useI18n'
import type { UserCategory } from '~/types/user'

const emit = defineEmits<{
	select: [category: UserCategory]
	back: []
}>()

const { t } = useI18n()

const selectCategory = (category: UserCategory) => {
	emit('select', category)
}
</script>
