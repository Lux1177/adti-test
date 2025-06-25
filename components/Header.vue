<template>
	<header class="backdrop-blur-md bg-white/5 border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<NuxtLink to="/" class="flex items-center space-x-3 group">
						<div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
							<Icon name="heroicons:academic-cap" class="w-5 h-5 text-white" />
						</div>
						<span class="text-xl font-medium text-white">
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
						Тест
					</NuxtLink>
				</nav>

				<!-- Mobile menu button -->
				<div class="md:hidden">
					<button
						@click="mobileMenuOpen = !mobileMenuOpen"
						class="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
					>
						<Icon
							:name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
							class="w-6 h-6"
						/>
					</button>
				</div>
			</div>

			<!-- Mobile menu -->
			<div v-show="mobileMenuOpen" class="md:hidden border-t border-white/10 py-4">
				<nav class="flex flex-col space-y-2">
					<NuxtLink
						to="/"
						@click="mobileMenuOpen = false"
						class="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
						active-class="bg-white/20 text-white"
					>
						Тест
					</NuxtLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from '#app'

const mobileMenuOpen = ref(false)
const route = useRoute()

// Close mobile menu when route changes
watch(() => route.path, () => {
	mobileMenuOpen.value = false
})
</script>
