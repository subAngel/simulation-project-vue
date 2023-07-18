<template>
	<div
		class="hero min-h-screen"
		style="
			background-image: url(https://cnnespanol.cnn.com/wp-content/uploads/2019/05/190514122716-la-nata-de-smog-en-ciudad-de-mexico-captada-por-santiago-arau-vo-00000728-full-169.jpg?quality=100&strip=info);
		"
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Simulación</h1>
				<p class="mb-5">
					Software de simulación para estimar las muertes a causa de
					material particulado menor a 2.5 micrómetros en el aire de la
					Ciudad de México en el periodo de 2004 a 2020.
				</p>
				<router-link class="btn btn-primary" to="/chart1">
					Resultados
				</router-link>
			</div>
		</div>
		<Drawer />
	</div>
</template>

<script setup>
import Preview from "../components/PreviewModal.vue";
import Drawer from "../components/Drawer.vue";
</script>
