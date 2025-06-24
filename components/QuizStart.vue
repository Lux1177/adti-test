<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-2xl">
			<!-- Main Card -->
			<div class="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-500">
				<!-- Icon -->
				<div class="mb-8">
					<div class="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
						<Icon name="heroicons:language" class="w-12 h-12 text-white" />
					</div>
				</div>

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
					Ingliz Tili Bo'yicha Test
				</h1>

				<!-- Description -->
				<p class="text-xl text-white/80 mb-8 leading-relaxed">
					Ingliz tili bo'yicha bilimlaringizni sinab ko'ring!
					<br class="hidden md:block">
					Sizga <span class="text-cyan-300 font-semibold">20 ta savol</span> beriladi.
				</p>

				<!-- Features -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
					<div class="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
						<Icon name="heroicons:clock" class="w-8 h-8 text-cyan-400 mx-auto mb-2" />
						<p class="text-white/80 text-sm">Vaqt cheklovsiz</p>
					</div>
					<div class="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
						<Icon name="heroicons:chart-bar" class="w-8 h-8 text-purple-400 mx-auto mb-2" />
						<p class="text-white/80 text-sm">Batafsil natijalar</p>
					</div>
					<div class="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
						<Icon name="heroicons:arrow-path" class="w-8 h-8 text-pink-400 mx-auto mb-2" />
						<p class="text-white/80 text-sm">Qayta urinish</p>
					</div>
				</div>

				<!-- Start Button -->
				<button
					@click="$emit('start')"
					:disabled="loading"
					class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
				>
          <span v-if="!loading" class="flex items-center justify-center">
            <Icon name="heroicons:play" class="w-6 h-6 mr-2 group-hover:animate-pulse" />
            Testni Boshlash
          </span>
					<span v-else class="flex items-center justify-center">
            <div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            Yuklanmoqda...
          </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	loading?: boolean
}

defineProps<Props>()
defineEmits<{
	start: []
}>()
</script>
