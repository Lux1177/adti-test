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

				<!-- Enhanced Title with Staggered Animation -->
				<h1 class="text-4xl md:text-6xl font-light mb-6 text-white animate-fade-in-up animate-stagger-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
					Инглиз Тили Тести
				</h1>

				<!-- Enhanced Description -->
				<p class="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed animate-fade-in-up animate-stagger-3 max-w-lg mx-auto">
					20 та танланган савол билан инглиз тили билимингизни синаб кўринг.
				</p>

				<!-- Enhanced Features Grid -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div class="glass-light-ultra rounded-2xl p-6 card-ultra-hover animate-fade-in-up animate-stagger-4 micro-lift">
						<Icon name="heroicons:clock" class="w-10 h-10 text-white/80 mx-auto mb-3 icon-ultra-smooth" />
						<p class="text-white/70 text-sm font-medium">Вақт чекланмаган</p>
					</div>
					<div class="glass-light-ultra rounded-2xl p-6 card-ultra-hover animate-fade-in-up animate-stagger-5 micro-lift">
						<Icon name="heroicons:chart-bar" class="w-10 h-10 text-white/80 mx-auto mb-3 icon-ultra-smooth" />
						<p class="text-white/70 text-sm font-medium">Батафсил натижалар</p>
					</div>
					<div class="glass-light-ultra rounded-2xl p-6 card-ultra-hover animate-fade-in-up animate-stagger-5 micro-lift">
						<Icon name="heroicons:arrow-path" class="w-10 h-10 text-white/80 mx-auto mb-3 icon-ultra-smooth" />
						<p class="text-white/70 text-sm font-medium">Қайта топшириш мумкин</p>
					</div>
				</div>

				<!-- Enhanced Resume Quiz Notice -->
				<Transition
					enter-active-class="modal-ultra-enter-active"
					leave-active-class="modal-ultra-leave-active"
					enter-from-class="modal-ultra-enter-from"
					leave-to-class="modal-ultra-leave-to"
				>
					<div v-if="hasActiveQuiz" class="glass-light-ultra border border-yellow-400/30 rounded-2xl p-6 mb-8 animate-pulse-smooth">
						<div class="flex items-center justify-center space-x-3 mb-3">
							<Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-yellow-400 animate-pulse-smooth" />
							<span class="text-yellow-300 font-semibold text-lg">Диққат</span>
						</div>
						<p class="text-yellow-200 mb-6 leading-relaxed">
							Сизда тугалланмаган тест мавжуд. Янги тест бошлаш эскисини ўчириб ташлайди.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<NuxtLink to="/test">
								<button class="btn-ultra-smooth px-8 py-4 text-green-300 font-semibold rounded-2xl flex items-center micro-bounce">
									<Icon name="heroicons:play" class="w-5 h-5 mr-2" />
									Тестни Давом Этиш
								</button>
							</NuxtLink>
							<button
								@click="$emit('start')"
								class="btn-ultra-smooth px-8 py-4 text-red-300 font-semibold rounded-2xl flex items-center micro-bounce"
							>
								<Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2" />
								Янги Тест Бошлаш
							</button>
						</div>
					</div>
				</Transition>

				<!-- Enhanced Start Button -->
				<button
					v-if="!hasActiveQuiz"
					@click="$emit('start')"
					:disabled="loading"
					class="btn-ultra-smooth px-12 py-5 text-white font-semibold text-xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up animate-stagger-5 micro-bounce group"
				>
          <span v-if="!loading" class="flex items-center justify-center">
            <Icon name="heroicons:play" class="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
            Тестни Бошлаш
          </span>
					<span v-else class="flex items-center justify-center">
            <div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin-smooth mr-3"></div>
            Юкланмоқда...
          </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	loading?: boolean
	hasActiveQuiz?: boolean
}

defineProps<Props>()
defineEmits<{
	start: []
}>()
</script>
