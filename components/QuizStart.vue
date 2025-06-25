<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-2xl animate-scale-in">
			<div class="glass p-8 md:p-12 text-center shadow-2xl rounded-3xl card-hover">
				<!-- Icon with smooth animation -->
				<div class="mb-8">
					<div class="w-20 h-20 mx-auto glass-light rounded-full flex items-center justify-center animate-fade-in">
						<Icon name="heroicons:language" class="w-10 h-10 text-white icon-smooth" />
					</div>
				</div>

				<!-- Title with staggered animation -->
				<h1 class="text-4xl md:text-5xl font-light mb-6 text-white animate-fade-in-up">
					Инглиз Тили Тести
				</h1>

				<!-- Description -->
				<p class="text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style="animation-delay: 0.1s">
					20 та танланган савол билан инглиз тили билимингизни синаб кўринг.
				</p>

				<!-- Features with staggered animation -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
					<div class="glass-light rounded-2xl p-4 card-hover animate-fade-in-up" style="animation-delay: 0.2s">
						<Icon name="heroicons:clock" class="w-8 h-8 text-white/80 mx-auto mb-2 icon-smooth" />
						<p class="text-white/70 text-sm">Вақт чекланмаган</p>
					</div>
					<div class="glass-light rounded-2xl p-4 card-hover animate-fade-in-up" style="animation-delay: 0.3s">
						<Icon name="heroicons:chart-bar" class="w-8 h-8 text-white/80 mx-auto mb-2 icon-smooth" />
						<p class="text-white/70 text-sm">Батафсил натижалар</p>
					</div>
					<div class="glass-light rounded-2xl p-4 card-hover animate-fade-in-up" style="animation-delay: 0.4s">
						<Icon name="heroicons:arrow-path" class="w-8 h-8 text-white/80 mx-auto mb-2 icon-smooth" />
						<p class="text-white/70 text-sm">Қайта топшириш мумкин</p>
					</div>
				</div>

				<!-- Resume Quiz Notice with smooth transition -->
				<Transition
					enter-active-class="transition-all duration-500 ease-out"
					enter-from-class="opacity-0 scale-95 translate-y-4"
					leave-active-class="transition-all duration-300 ease-in"
					leave-to-class="opacity-0 scale-95 translate-y-4"
				>
					<div v-if="hasActiveQuiz" class="glass-light border border-yellow-400/30 rounded-2xl p-4 mb-6">
						<div class="flex items-center justify-center space-x-2 mb-2">
							<Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-yellow-400 animate-pulse" />
							<span class="text-yellow-300 font-medium">Диққат</span>
						</div>
						<p class="text-yellow-200 text-sm mb-4">
							Сизда тугалланмаган тест мавжуд. Янги тест бошлаш эскисини ўчириб ташлайди.
						</p>
						<div class="flex flex-col sm:flex-row gap-3 justify-center">
							<NuxtLink to="/test">
								<button class="btn-smooth px-6 py-3 glass-light border border-green-400/30 text-green-300 font-medium rounded-2xl hover:bg-green-500/20 flex items-center">
									<Icon name="heroicons:play" class="w-4 h-4 mr-2" />
									Тестни Давом Этиш
								</button>
							</NuxtLink>
							<button
								@click="$emit('start')"
								class="btn-smooth px-6 py-3 glass-light border border-red-400/30 text-red-300 font-medium rounded-2xl hover:bg-red-500/20 flex items-center"
							>
								<Icon name="heroicons:arrow-path" class="w-4 h-4 mr-2" />
								Янги Тест Бошлаш
							</button>
						</div>
					</div>
				</Transition>

				<!-- Start Button with enhanced animation -->
				<button
					v-if="!hasActiveQuiz"
					@click="$emit('start')"
					:disabled="loading"
					class="btn-smooth px-8 py-4 glass border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up"
					style="animation-delay: 0.5s"
				>
          <span v-if="!loading" class="flex items-center justify-center">
            <Icon name="heroicons:play" class="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Тестни Бошлаш
          </span>
					<span v-else class="flex items-center justify-center">
            <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
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
