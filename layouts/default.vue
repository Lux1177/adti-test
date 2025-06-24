<template>
	<div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
			<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
			<div class="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
		</div>

		<!-- Header -->
		<header class="relative z-10 backdrop-blur-sm bg-white/10 border-b border-white/20">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-16">
					<div class="flex items-center">
						<NuxtLink to="/" class="flex items-center space-x-3 group">
							<div class="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
								<Icon name="heroicons:academic-cap" class="w-6 h-6 text-white" />
							</div>
							<span class="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                ADTI
              </span>
						</NuxtLink>
					</div>

					<nav class="hidden md:flex items-center space-x-1">
						<NuxtLink
							to="/"
							class="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
							active-class="bg-white/20 text-white"
						>
							Bosh sahifa
						</NuxtLink>
					</nav>

					<!-- Mobile menu button -->
					<div class="md:hidden">
						<UButton
							@click="mobileMenuOpen = !mobileMenuOpen"
							variant="ghost"
							size="sm"
							class="text-white hover:bg-white/10"
						>
							<Icon
								:name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
								class="w-6 h-6"
							/>
						</UButton>
					</div>
				</div>

				<!-- Mobile menu -->
				<div v-show="mobileMenuOpen" class="md:hidden border-t border-white/20 py-4">
					<nav class="flex flex-col space-y-2">
						<NuxtLink
							to="/"
							@click="mobileMenuOpen = false"
							class="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
							active-class="bg-white/20 text-white"
						>
							Bosh sahifa
						</NuxtLink>
						<NuxtLink
							to="/about"
							@click="mobileMenuOpen = false"
							class="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
							active-class="bg-white/20 text-white"
						>
							Haqida
						</NuxtLink>
					</nav>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="relative z-10 flex-1">
			<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
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
