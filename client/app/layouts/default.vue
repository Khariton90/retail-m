<template>
	<UApp :locale="ru">
		<div class="app">
			<div class="container">
				<header class="header">
					<span class="header-logo">Розница-М BTC / USD</span>
				</header>
				<main class="content">
					<slot />
				</main>
				<footer class="footer">
					<a href="https://t.me/Jenya_Khariton/" target="_blank"
						>Евгений Харитонов</a
					>
				</footer>
			</div>
		</div>
	</UApp>
</template>

<script setup lang="ts">
import { ru } from '@nuxt/ui/locale'
const color = useColorMode()
color.preference = 'dark'
</script>

<style scoped>
.app {
	width: 100%;
	background: linear-gradient(135deg, #000, var(--color-black) 50%, #000);
}

.container {
	margin: 0 auto;
	width: 100%;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
}

.content {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 20px;
}

.header,
.footer {
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
}

.footer {
	justify-content: center;
}

.header-logo {
	color: var(--color-yellow);
	font-weight: 500;
	font-size: 2rem;
}
</style>
