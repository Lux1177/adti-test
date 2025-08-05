<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

// Global head configuration
useHead({
	htmlAttrs: {
		lang: 'uz'
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'format-detection', content: 'telephone=no' }
	]
})


</script>

<style>
/* Global page transitions */
.page-enter-active,
.page-leave-active {
	transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

/* Layout transition for smooth content changes */
.layout-enter-active,
.layout-leave-active {
	transition: all 0.3s ease-out;
}

.layout-enter-from,
.layout-leave-to {
	opacity: 0;
}
</style>
