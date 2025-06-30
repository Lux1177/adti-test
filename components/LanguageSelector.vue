<template>
	<div class="flex items-center justify-center min-h-[80vh] relative overflow-hidden">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
			<div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style="animation-delay: -1s;"></div>
			<div class="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
		</div>

		<div class="w-full max-w-2xl animate-fade-in-scale gpu-accelerated relative z-10">
			<div class="glass-ultra p-8 md:p-12 text-center shadow-2xl rounded-3xl card-ultra-hover">
				<!-- Enhanced Icon with Floating Animation -->
				<div class="mb-8 animate-stagger-1">
					<div class="w-24 h-24 mx-auto glass-light-ultra rounded-full flex items-center justify-center animate-float micro-glow">
						<Icon name="heroicons:language" class="w-12 h-12 text-white icon-ultra-smooth" />
					</div>
				</div>

				<!-- Enhanced Title -->
				<h1 class="text-4xl md:text-6xl font-light mb-6 text-white animate-fade-in-up animate-stagger-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					{{ t('language.select') }}
				</h1>

				<!-- Language Options -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<button
						v-for="(lang, index) in languages"
						:key="lang.code"
						@click="selectLanguage(lang.code)"
						class="glass-light-ultra rounded-2xl p-8 card-ultra-hover animate-fade-in-up micro-lift transition-all duration-300 hover:brightness-110"
						:style="{ animationDelay: `${0.3 + index * 0.1}s` }"
					>
						<div class="text-4xl mb-4">{{ lang.flag }}</div>
						<h3 class="text-xl font-semibold text-white mb-2">{{ lang.name }}</h3>
						<p class="text-white/70 text-sm">{{ lang.nativeName }}</p>
					</button>
				</div>

				<!-- Continue Button -->
				<button
					v-if="selectedLanguage"
					@click="$emit('continue')"
					class="btn-ultra-smooth px-12 py-5 text-white font-semibold text-xl rounded-2xl animate-fade-in-up animate-stagger-5 micro-bounce group"
				>
          <span class="flex items-center justify-center">
            <Icon name="heroicons:arrow-right" class="w-6 h-6 mr-3 transition-transform group-hover:translate-x-1" />
            {{ t('language.continue') }}
          </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, type Locale } from '~/composables/useI18n'

const { t, setLocale } = useI18n()

const selectedLanguage = ref<Locale | null>(null)

const languages = [
	{
		code: 'en' as Locale,
		name: 'English',
		nativeName: 'English',
		flag: '🇺🇸'
	},
	{
		code: 'ru' as Locale,
		name: 'Russian',
		nativeName: 'Русский',
		flag: '🇷🇺'
	},
	{
		code: 'uz' as Locale,
		name: 'Uzbek',
		nativeName: 'Ўзбекча',
		flag: '🇺🇿'
	}
]

const selectLanguage = (locale: Locale) => {
	selectedLanguage.value = locale
	setLocale(locale)
}

defineEmits<{
	continue: []
}>()
</script>
