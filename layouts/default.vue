<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
		<!-- Header -->
		<Header />

		<!-- Main Content -->
		<main class="flex-1">
			<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
</script>
