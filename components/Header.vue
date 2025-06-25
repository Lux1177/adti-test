<template>
	<header class="backdrop-blur-md bg-white/5 border-b border-white/10 gpu-accelerated">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<NuxtLink to="/" class="flex items-center space-x-3 group">
						<div class="w-10 h-10 rounded-full glass-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out">
							<Icon name="heroicons:academic-cap" class="w-5 h-5 text-white icon-smooth" />
						</div>
						<span class="text-xl font-medium text-white transition-all duration-300 group-hover:text-white/90">
              АДТИ
            </span>
					</NuxtLink>
				</div>

				<nav class="hidden md:flex items-center space-x-1">
					<NuxtLink
						to="/"
						class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
						active-class="bg-white/20 text-white"
					>
						Бош саҳифа
					</NuxtLink>
					<NuxtLink
						to="/test"
						class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
						active-class="bg-white/20 text-white"
					>
						Тест
					</NuxtLink>
					<NuxtLink
						to="/results"
						class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
						active-class="bg-white/20 text-white"
					>
						Натижалар
					</NuxtLink>
				</nav>

				<!-- Mobile menu button -->
				<div class="md:hidden">
					<button
						@click="mobileMenuOpen = !mobileMenuOpen"
						class="p-2 rounded-full text-white/70 hover:text-white glass-light transition-all duration-300 hover:scale-105"
					>
						<Icon
							:name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
							class="w-6 h-6 transition-transform duration-300"
							:class="{ 'rotate-90': mobileMenuOpen }"
						/>
					</button>
				</div>
			</div>

			<!-- Mobile menu with smooth transitions -->
			<Transition
				enter-active-class="transition-all duration-300 ease-out"
				enter-from-class="opacity-0 max-h-0"
				enter-to-class="opacity-100 max-h-48"
				leave-active-class="transition-all duration-300 ease-in"
				leave-from-class="opacity-100 max-h-48"
				leave-to-class="opacity-0 max-h-0"
			>
				<div v-show="mobileMenuOpen" class="md:hidden border-t border-white/10 py-4 overflow-hidden">
					<nav class="flex flex-col space-y-2">
						<NuxtLink
							to="/"
							@click="mobileMenuOpen = false"
							class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up transition-all duration-300"
							active-class="bg-white/20 text-white"
						>
							Бош саҳифа
						</NuxtLink>
						<NuxtLink
							to="/test"
							@click="mobileMenuOpen = false"
							class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up transition-all duration-300"
							active-class="bg-white/20 text-white"
							style="animation-delay: 0.1s"
						>
							Тест
						</NuxtLink>
						<NuxtLink
							to="/results"
							@click="mobileMenuOpen = false"
							class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 animate-fade-in-up transition-all duration-300"
							active-class="bg-white/20 text-white"
							style="animation-delay: 0.2s"
						>
							Натижалар
						</NuxtLink>
					</nav>
				</div>
			</Transition>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from '#app'

const mobileMenuOpen = ref(false)
const route = useRoute()

// Close mobile menu when route changes with smooth transition
watch(() => route.path, () => {
	mobileMenuOpen.value = false
})
</script>
