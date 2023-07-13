<template>
	<div class="bg-slate-100 h-full">
		<div class="flex flex-col mx-auto items-center w-9/12 h-screen">
			<div>
				<router-link to="/" class="mx-auto btn btn-primary my-20">
					Home
				</router-link>
				<router-link to="/chart1" class="mx-auto btn btn-primary my-20 ml-4">
					Chart 1
				</router-link>
			</div>

			<div>
				<Line :data="data" :options="options" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";
import { reactive } from "vue";
import { Bar, Line } from "vue-chartjs";
import datos from "../datos/datos.json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const years = datos.tabladatos.map((item) => item["Año"]);
const tmp_min = datos.tabladatos.map((item) => item["TMCP PM2.5 min"]);
const tmp_max = datos.tabladatos.map((item) => item["TMCP PM2.5 max"]);

const data = {
	labels: years,
	datasets: [
		{
			label: "Tasa de muertes por cáncer de pulmón (min)",
			data: tmp_min,
			borderColor: "'rgba(58, 191, 248,1)'",
			backgroundColor: "rgba(58, 191, 248, 0.3)",
			borderWidth: 2,
			borderRadius: 3,
			borderSkipped: false,
		},
		{
			label: "Tasa de muertes por cáncer de pulmón (min)",
			data: tmp_max,
			borderColor: "'rgba(217, 38, 169,1)'",
			backgroundColor: "rgba(217, 38, 169,0.3)",
			borderWidth: 2,
			borderRadius: 3,
			borderSkipped: false,
		},
	],
};

const options = reactive({
	responsive: true,
	maintainAspectRatio: false,
});
</script>
