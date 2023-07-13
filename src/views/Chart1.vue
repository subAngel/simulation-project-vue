<template>
	<div class="bg-slate-100 h-full">
		<div class="mx-auto w-9/12 h-screen">
			<Bar :data="data" :options="options" />
			<router-link to="/" class="btn btn-primary">Chart 1</router-link>
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
