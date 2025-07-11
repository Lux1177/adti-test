<template>
	<header class="glass-ultra gpu-accelerated sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				<div class="flex items-center">
					<NuxtLink to="/" class="flex items-center space-x-4 group nav-link-ultra">
						<div class="w-12 h-12 rounded-full glass-light-ultra flex items-center justify-center group-hover:brightness-110 transition-all duration-500 micro-glow">
							<Icon name="heroicons:academic-cap" class="w-6 h-6 text-white icon-ultra-smooth" />
						</div>
						<span class="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-white/90">
              {{ t('nav.title') }}
            </span>
					</NuxtLink>
				</div>

				<nav class="hidden md:flex items-center space-x-2">
					<NuxtLink
						to="/"
						class="nav-link-ultra px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
						active-class="bg-white/20 text-white shadow-lg"
					>
						{{ t('nav.home') }}
					</NuxtLink>
					<NuxtLink
						to="/test"
						class="nav-link-ultra px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
						active-class="bg-white/20 text-white shadow-lg"
					>
						{{ t('nav.test') }}
					</NuxtLink>
					<NuxtLink
						to="/results"
						class="nav-link-ultra px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
						active-class="bg-white/20 text-white shadow-lg"
					>
						{{ t('nav.results') }}
					</NuxtLink>
				</nav>

				<!-- Language Selector -->
				<div class="hidden md:flex items-center space-x-4">
					<button
						@click="$emit('change-language')"
						class="w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:text-white glass-light-ultra transition-all duration-300 hover:brightness-110 micro-bounce text-2xl"
						:title="t('language.select')"
					>
						<span>{{ currentFlag }}</span>
					</button>
				</div>

				<!-- Enhanced Mobile menu button -->
				<div class="md:hidden">
					<button
						@click="mobileMenuOpen = !mobileMenuOpen"
						class="p-3 rounded-full text-white/70 hover:text-white glass-light-ultra transition-all duration-300 hover:brightness-110 micro-bounce"
					>
						<Icon
							:name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
							class="w-7 h-7 transition-all duration-500"
						/>
					</button>
				</div>
			</div>

			<!-- Enhanced Mobile menu -->
			<Transition
				enter-active-class="modal-ultra-enter-active"
				leave-active-class="modal-ultra-leave-active"
				enter-from-class="modal-ultra-enter-from"
				leave-to-class="modal-ultra-leave-to"
			>
				<div v-show="mobileMenuOpen" class="md:hidden border-t border-white/10 py-6 overflow-hidden">
					<nav class="flex flex-col space-y-3">
						<NuxtLink
							to="/"
							@click="mobileMenuOpen = false"
							class="nav-link-ultra px-6 py-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up transition-all duration-300 font-medium"
							active-class="bg-white/20 text-white shadow-lg"
						>
							{{ t('nav.home') }}
						</NuxtLink>
						<NuxtLink
							to="/test"
							@click="mobileMenuOpen = false"
							class="nav-link-ultra px-6 py-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up animate-stagger-2 transition-all duration-300 font-medium"
							active-class="bg-white/20 text-white shadow-lg"
						>
							{{ t('nav.test') }}
						</NuxtLink>
						<NuxtLink
							to="/results"
							@click="mobileMenuOpen = false"
							class="nav-link-ultra px-6 py-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up animate-stagger-3 transition-all duration-300 font-medium"
							active-class="bg-white/20 text-white shadow-lg"
						>
							{{ t('nav.results') }}
						</NuxtLink>
						<button
							@click="$emit('change-language'); mobileMenuOpen = false"
							class="nav-link-ultra px-6 py-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up animate-stagger-4 transition-all duration-300 font-medium text-left flex items-center"
						>
							<span class="text-2xl mr-3">{{ currentFlag }}</span>
							{{ t('language.select') }}
						</button>
					</nav>
				</div>
			</Transition>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from '#app'
import { useI18n, type Locale } from '~/composables/useI18n'

const route = useRoute()
const { t, locale } = useI18n()

const mobileMenuOpen = ref(false)

const languages = [
	{ code: 'uz' as Locale, flag: '🇺🇿' },
	{ code: 'ru' as Locale, flag: '🇷🇺' },
	{ code: 'en' as Locale, flag: '🇺🇸' }
]

const currentFlag = computed(() => {
	return languages.find(lang => lang.code === locale.value)?.flag || '🌐'
})

defineEmits<{
	'change-language': []
}>()

// Close mobile menu when route changes with smooth transition
watch(() => route.path, () => {
	mobileMenuOpen.value = false
})
</script>
