<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
		<!-- Header -->
		<Header @change-language="showLanguageSelector = true" />

		<!-- Language Selector Modal -->
		<Transition
			enter-active-class="modal-ultra-enter-active"
			leave-active-class="modal-ultra-leave-active"
			enter-from-class="modal-ultra-enter-from"
			leave-to-class="modal-ultra-leave-to"
		>
			<div v-if="showLanguageSelector" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
				<div class="glass-ultra rounded-3xl p-8 max-w-2xl w-full">
					<div class="flex justify-between items-center mb-6">
						<h2 class="text-2xl font-semibold text-white">{{ t('language.select') }}</h2>
						<button
							@click="showLanguageSelector = false"
							class="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
						>
							<Icon name="heroicons:x-mark" class="w-6 h-6" />
						</button>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
						<button
							v-for="lang in languages"
							:key="lang.code"
							@click="changeLanguage(lang.code)"
							class="glass-light-ultra rounded-2xl p-6 card-ultra-hover transition-all duration-300 hover:brightness-110 flex flex-col items-center justify-center"
							:class="{ 'ring-2 ring-white/50': locale === lang.code }"
						>
							<div class="text-5xl mb-3">{{ lang.flag }}</div>
							<h3 class="text-lg font-semibold text-white">{{ lang.name }}</h3>
							<p class="text-white/70 text-sm">{{ lang.nativeName }}</p>
						</button>
					</div>
				</div>
			</div>
		</Transition>

		<!-- Main Content -->
		<main class="flex-1">
			<div class="max-w-7xl mx-auto py-4 md:py-6 px-4 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n, type Locale } from '~/composables/useI18n'

const { t, setLocale, loadLocale, locale } = useI18n()

const showLanguageSelector = ref(false)

const languages = [
	{
		code: 'uz' as Locale,
		name: 'Uzbek',
		nativeName: 'Ўзбекча',
		flag: '🇺🇿'
	},
	{
		code: 'ru' as Locale,
		name: 'Russian',
		nativeName: 'Русский',
		flag: '🇷🇺'
	},
	{
		code: 'en' as Locale,
		name: 'English',
		nativeName: 'English',
		flag: '🇺🇸'
	}
]

const changeLanguage = (newLocale: Locale) => {
	setLocale(newLocale)
	showLanguageSelector.value = false
}

onMounted(() => {
	loadLocale()
})
</script>
