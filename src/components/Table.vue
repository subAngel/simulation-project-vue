<template>
	<div class="overflow-x-auto mt-20">
		<table class="table table-xs">
			<!-- head -->
			<thead>
				<tr>
					<th class="text-sm">Año</th>
					<th class="text-sm">PM2.5</th>
					<th class="text-sm">TMCP</th>
					<th class="text-sm">RR (mínimo)</th>
					<th class="text-sm">RR (máximo)</th>
					<th class="text-sm">AF (mínimo)</th>
					<th class="text-sm">AF (máximo)</th>
					<th class="text-sm">TMCP 2.5 (mínimo)</th>
					<th class="text-sm">TMCP 2.5 (máximo)</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(d, i) in table" :key="i" class="hover">
					<th>{{ d.year }}</th>
					<td>{{ d.pm25 }}</td>
					<td>{{ d.tmcp }}</td>
					<td>{{ d.rrmin }}</td>
					<td>{{ d.rrmax }}</td>
					<td>{{ d.afmin }}</td>
					<td>{{ d.afmax }}</td>
					<td>{{ d.tmcp25min }}</td>
					<td>{{ d.tmcp25max }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import * as datos from "../datos/datos.json";
const year = datos.tabladatos.map((item) => item["Año"]);
const pm25 = datos.tabladatos.map((item) => item["PM2.5(X)"]);
const tmcp = datos.tabladatos.map((item) => item["TM CP"]);
const rrmin = datos.tabladatos.map((item) => item["RR minimo"]);
const rrmax = datos.tabladatos.map((item) => item["RR maximo"]);
const afmin = datos.tabladatos.map((item) => item["AF minimo"]);
const afmax = datos.tabladatos.map((item) => item["AF maximo"]);
const tmcp25min = datos.tabladatos.map((item) => item["TMCP PM2.5 min"]);
const tmcp25max = datos.tabladatos.map((item) => item["TMCP PM2.5 max"]);

const table = reactive(
	year.map((year, index) => ({
		year,
		pm25: pm25[index],
		tmcp: tmcp[index],
		rrmin: rrmin[index],
		rrmax: rrmax[index],
		afmin: afmin[index],
		afmax: afmax[index],
		tmcp25min: tmcp25min[index],
		tmcp25max: tmcp25max[index],
	}))
);
const campos = [
	"Año",
	"PM2.5",
	"TMCP",
	"RR (mínimo)",
	"RR (máximo)",
	"AF (mínimo)",
	"AF (máximo)",
	"TMCP 2.5 (mínimo)",
	"TMCP 2.5 (mínimo)",
];
</script>

<style scoped>
.zoomed-row {
	transform: scale(
		1.2
	); /* Ajusta el valor de escala según el efecto de zoom deseado */
	transition: transform 0.2s ease-in-out;
}
.absolute {
	position: absolute;
	z-index: 1000;
}
</style>
