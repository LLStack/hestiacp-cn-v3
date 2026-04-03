<template>
	<div class="badge-footer">
		<div class="badge-container">
			<a href="https://hicyou.com/" target="_blank" rel="noopener">
				<img src="https://hicyou.com/badge/featured-light.svg" alt="Featured on Hicyou" />
			</a>
			<a href="https://www.aat.ee/" target="_blank" rel="noopener">
				<img src="https://www.aat.ee/images/badges/top1-light.svg" alt="Featured on AAT" />
			</a>
			<a href="https://www.mf8.biz" target="_blank" rel="noopener">
				<img src="https://www.mf8.biz/badge/badge_light.svg" alt="已收录于 米饭粑" />
			</a>
			<a href="https://bigkr.com" target="_blank" rel="noopener">
				<img src="https://bigkr.com/badge/badge_light.svg" alt="Featured on BigKr" />
			</a>
		</div>
	</div>
</template>

<style scoped>
.badge-footer {
	border-top: 1px solid var(--vp-c-divider);
	padding: 24px 0;
	text-align: center;
}

.badge-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	max-width: 1152px;
	margin: 0 auto;
	padding: 0 24px;
}

.badge-container a {
	display: inline-flex;
}

.badge-container img {
	height: 32px;
}
</style>
