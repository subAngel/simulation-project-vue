<template>
	<div class="bg-base-100 h-full">
		<div class="flex flex-col mx-auto items-center w-9/12 h-screen">
			<div class="my-14 flex items-center content-around w-1/5">
				<router-link to="/" class="mx-auto btn btn-primary">
					<i class="fa-solid fa-house"></i>
				</router-link>
				<router-link to="/datatable1" class="mx-auto btn btn-primary">
					Datos
				</router-link>
			</div>
			<div>
				<h2 class="text-2xl text-center text-base-content font-bold">
					Estimación de muertes por cáncer de pulmón por la contaminación
					ambiental en la ciudad de México
				</h2>
				<h3 class="text-xl text-center text-info font-bold mb-5">
					(2004-2020)
				</h3>
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
			borderColor: "rgba(139, 233, 253,1)",
			backgroundColor: "rgba(139, 233, 253,0.5)",
			borderWidth: 1,
			borderRadius: 3,
			borderSkipped: false,
		},
		{
			label: "Tasa de muertes por cáncer de pulmón (max)",
			data: tmp_max,
			tooltip: "Muertes",
			borderColor: "rgb(255, 121, 198,1)",
			backgroundColor: "rgb(255, 121, 198,0.5)",
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
	scales: {
		x: {
			ticks: {
				color: "#f8f8f2",
				font: {
					weight: "semi-bold",
				},
			},
		},
		y: {
			ticks: {
				color: "#f8f8f2",
				font: {
					weight: "semi-bold",
				},
			},
		},
	},
	plugins: {
		legend: {
			labels: {
				color: "#f8f8f2",
				font: {
					size: 15,
				},
			},
		},
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
