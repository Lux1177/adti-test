<template>
	<div class="flex items-center justify-center min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
			<div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style="animation-delay: -1s;"></div>
			<div class="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
		</div>

		<div class="w-full max-w-6xl animate-fade-in-scale gpu-accelerated relative z-10">
			<div class="glass-ultra p-6 md:p-8 text-center shadow-2xl rounded-3xl card-ultra-hover">
				<!-- Enhanced Title -->
				<h1 class="text-4xl md:text-6xl font-light mb-8 text-white animate-fade-in-up bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					{{ t('category.test_collections') }}
				</h1>

				<!-- Category Options Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
					<button
						v-for="(category, index) in categories"
						:key="category.key"
						@click="selectCategory(category.key)"
						class="glass-light-ultra rounded-3xl p-6 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110 group"
						:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
					>
						<div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
							<img :src="category.image" :alt="t(category.titleKey)" class="w-full h-full object-cover rounded-full" />
						</div>
						<h3 class="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
							{{ t(category.titleKey) }}
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

const categories = [
	{ key: 'professor' as UserCategory, titleKey: 'category.professor', image: '/images/professor.png' },
	{ key: 'employee' as UserCategory, titleKey: 'category.employee', image: '/images/employee.png' },
	{ key: 'student' as UserCategory, titleKey: 'category.student', image: '/images/student.png' },
	{ key: 'medical' as UserCategory, titleKey: 'category.medical', image: '/images/medical.png' },
	{ key: 'applicant' as UserCategory, titleKey: 'category.applicant', image: '/images/applicant.png' },
	{ key: 'academic_lyceum' as UserCategory, titleKey: 'category.academic_lyceum', image: '/images/lyceum.png' },
]

const selectCategory = (category: UserCategory) => {
	emit('select', category)
}
</script>
