<template>
	<div class="h-full">
		<div class="flex flex-col mx-auto items-center w-9/12 h-screen">
			<div>
				<router-link to="/" class="mx-auto btn btn-primary my-20">
					Home 1
				</router-link>
				<router-link to="/chart2" class="mx-auto btn btn-primary my-20 ml-4">
					Datos PM2.5
				</router-link>
			</div>

			<div class="w-11/12 h-3/4">
				<Bar :data="data" :options="options" />
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
import { reactive, ref } from "vue";
import { Bar, Line, Bubble } from "vue-chartjs";
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
			tooltip: {
				callback: {
					label: function (context) {
						let label = context.dataset.label || "";

						return "Muertes";
					},
				},
			},
			borderColor: "rgba(58, 191, 248,1)",
			backgroundColor: "rgba(58, 191, 248, 0.5)",
			borderWidth: 1,
			borderRadius: 3,
			borderSkipped: false,
		},
		{
			label: "Tasa de muertes por cáncer de pulmón (max)",
			data: tmp_max,
			tooltip: "Muertes",
			borderColor: "rgba(217, 38, 169,1)",
			backgroundColor: "rgba(217, 38, 169,0.5)",
			borderWidth: 1,
			borderRadius: 3,
			borderSkipped: false,
		},
	],
	// labels: ["Jan", "Feb", "Mar"],
	// datasets: [{ data: [50, 20, 30] }],
};

const options = reactive({
	responsive: true,

	plugins: {
		tooltip: {
			callbacks: {
				beforeLabel: function (context) {
					return "";
				},
				label: function (context) {
					const datasetIndex = context.datasetIndex;
					const dataIndex = context.dataIndex;
					const value = context.parsed.y;

					// Personaliza el texto del tooltip según tus necesidades
					return `(${
						datasetIndex == 0 ? "Minimo" : "Maximo"
					}) Muertes estimadas: ${value}`;
				},
			},
		},
	},
});
</script>

<style scoped></style>
