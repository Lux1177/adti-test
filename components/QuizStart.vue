<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-2xl">
			<div class="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 text-center shadow-2xl">
				<!-- Icon -->
				<div class="mb-8">
					<div class="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
						<Icon name="heroicons:language" class="w-10 h-10 text-white" />
					</div>
				</div>

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl font-light mb-6 text-white">
					Инглиз Тили Тести
				</h1>

				<!-- Description -->
				<p class="text-xl text-white/80 mb-8 leading-relaxed">
					20 та танланган савол билан инглиз тили билимингизни синаб кўринг.
				</p>

				<!-- Features -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
					<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
						<Icon name="heroicons:clock" class="w-8 h-8 text-white/80 mx-auto mb-2" />
						<p class="text-white/70 text-sm">Вақт чекланмаган</p>
					</div>
					<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
						<Icon name="heroicons:chart-bar" class="w-8 h-8 text-white/80 mx-auto mb-2" />
						<p class="text-white/70 text-sm">Батафсил натижалар</p>
					</div>
					<div class="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
						<Icon name="heroicons:arrow-path" class="w-8 h-8 text-white/80 mx-auto mb-2" />
						<p class="text-white/70 text-sm">Қайта топшириш мумкин</p>
					</div>
				</div>

				<!-- Resume Quiz Notice -->
				<div v-if="hasActiveQuiz" class="backdrop-blur-sm bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-4 mb-6">
					<div class="flex items-center justify-center space-x-2 mb-2">
						<Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-yellow-400" />
						<span class="text-yellow-300 font-medium">Диққат</span>
					</div>
					<p class="text-yellow-200 text-sm mb-4">
						Сизда тугалланмаган тест мавжуд. Янги тест бошлаш эскисини ўчириб ташлайди.
					</p>
					<div class="flex flex-col sm:flex-row gap-3 justify-center">
						<NuxtLink to="/test">
							<button class="px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 font-medium rounded-2xl hover:bg-green-500/30 transition-all duration-300 flex items-center">
								<Icon name="heroicons:play" class="w-4 h-4 mr-2" />
								Тестни Давом Этиш
							</button>
						</NuxtLink>
						<button
							@click="$emit('start')"
							class="px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 font-medium rounded-2xl hover:bg-red-500/30 transition-all duration-300 flex items-center"
						>
							<Icon name="heroicons:arrow-path" class="w-4 h-4 mr-2" />
							Янги Тест Бошлаш
						</button>
					</div>
				</div>

				<!-- Start Button -->
				<button
					v-else
					@click="$emit('start')"
					:disabled="loading"
					class="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
				>
          <span v-if="!loading" class="flex items-center justify-center">
            <Icon name="heroicons:play" class="w-5 h-5 mr-2" />
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
