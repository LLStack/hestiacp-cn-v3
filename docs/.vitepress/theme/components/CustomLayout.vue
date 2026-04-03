<script setup>
import DefaultTheme from 'vitepress/theme';
import BadgeFooter from './BadgeFooter.vue';

const { Layout } = DefaultTheme;
</script>

<template>
	<Layout>
		<template #layout-bottom>
			<BadgeFooter />
		</template>
	</Layout>
</template>
