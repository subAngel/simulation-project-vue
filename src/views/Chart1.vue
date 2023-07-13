<template>
	<div class="bg-slate-100 h-full">
		<div class="flex flex-col mx-auto items-center w-9/12 h-screen">
			<router-link to="/" class="mx-auto btn btn-primary my-20"
				>Home 1</router-link
			>

			<div class="w-3/4 h-3/4">
				<Bar :data="data" :options="options" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
	name: "App",
	components: {
		Bar,
	},
	data() {
		return {
			data: {
				labels: ["January", "February", "March"],
				datasets: [{ data: [40, 20, 12] }],
			},
			options: {
				responsive: true,
			},
		};
	},
};
</script>

<style scoped></style>
