<template>
	<div class="bg-base-100 h-full">
		<div
			class="flex flex-col mx-auto justify-center items-center w-9/12 h-screen"
		>
			<div class="mt-14 flex items-center content-around">
				<router-link to="/chart1" class="btn btn-primary">
					<i class="fa-solid fa-chart-simple"></i>
					Grafica
				</router-link>
			</div>
			<Table></Table>
		</div>
	</div>
</template>

<script setup>
import Table from "../components/Table.vue";
</script>
