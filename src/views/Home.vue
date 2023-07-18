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
		<div class="absolute bottom-8 right-8">
			<div class="drawer">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<!-- Page content here -->
					<label for="my-drawer" class="btn btn-primary drawer-button"
						>Open drawer</label
					>
				</div>
				<div class="drawer-side">
					<label for="my-drawer" class="drawer-overlay"></label>
					<div class="menu">
						<div class="w-1/2 h-1/2 bg-terciary">
							<h1 class="title">Hola mundo</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Preview from "../components/PreviewModal.vue";
</script>
