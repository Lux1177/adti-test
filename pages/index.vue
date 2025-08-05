<template>
	<div>
		<!-- Language Selection -->
		<LanguageSelector
			v-if="!languageSelected"
			@continue="handleLanguageSelected"
		/>

		<!-- Main Welcome Screen -->
		<div v-else class="flex items-center justify-center min-h-[calc(100vh-5rem)]">
			<div class="w-full max-w-2xl animate-fade-in-scale gpu-accelerated relative z-10">
				<div class="glass-ultra p-8 md:p-12 text-center shadow-2xl rounded-3xl card-ultra-hover">
					<div class="mb-8 animate-stagger-1">
						<div class="w-24 h-24 mx-auto glass-light-ultra rounded-full flex items-center justify-center animate-float micro-glow">
							<Icon name="heroicons:academic-cap" class="w-12 h-12 text-white icon-ultra-smooth" />
						</div>
					</div>
					<h1 class="text-4xl md:text-6xl font-light mb-6 text-white animate-fade-in-up animate-stagger-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
						{{ t('main.welcome_title') }}
					</h1>
					<p class="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed animate-fade-in-up animate-stagger-3 max-w-lg mx-auto">
						{{ t('main.welcome_subtitle') }}
					</p>
					<NuxtLink to="/test">
						<button class="btn-ultra-smooth px-12 py-5 text-white font-semibold text-xl rounded-2xl animate-fade-in-up animate-stagger-5 micro-bounce group">
              <span class="flex items-center justify-center">
                <Icon name="heroicons:play" class="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
                {{ t('main.start_button') }}
              </span>
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'
import {useHead} from "#app";

const { t, loadLocale } = useI18n()
const languageSelected = ref(false)

const handleLanguageSelected = () => {
	languageSelected.value = true
}

onMounted(() => {
	if (localStorage.getItem('quiz-locale')) {
		languageSelected.value = true
	}
	loadLocale()
})

useHead({
	title: `АДТИ — Тест`,
	meta: [
		{
			name: 'description',
			content: "Андижон Давлат Тиббиёт Институти - Тест синовлари"
		},
		{
			property: 'og:title',
			content: "АДТИ — Тест"
		},
		{
			property: 'og:description',
			content: "Андижон Давлат Тиббиёт Институти - Тест синовлари"
		},
		{
			property: 'og:image',
			content: '/icon.png'
		}
	],
	link: [
		{
			rel: 'canonical',
			href: "https://adti-test.vercel.app/"
		}
	]
})

</script>
