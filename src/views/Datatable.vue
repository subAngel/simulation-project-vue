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
				<button class="btn btn-info ml-9" @click="showModal">
					<i class="fa-solid fa-circle-info text-2xl"></i> Info
				</button>
				<dialog id="my_modal_2" ref="modal" class="modal">
					<form
						method="dialog"
						class="modal-box w-4/5 animate__animated"
						:class="modalClass"
					>
						<h3 class="font-bold text-lg">Información!</h3>
						<table class="table">
							<tbody>
								<!-- row 1 -->
								<tr>
									<th>PM2.5</th>
									<td>
										Material Particulado menor a 2.5 micrómetros
									</td>
								</tr>
								<tr>
									<th>TMCP</th>
									<td>Tasa de mortalidad por cáncer de pulmón</td>
								</tr>
								<tr>
									<th>RR (mínimo/máximo)</th>
									<td>Riesgo Relativo</td>
								</tr>
								<tr>
									<th>AF (mínimo/máximo)</th>
									<td>Fracción Atribuible</td>
								</tr>
								<tr>
									<th>TMCP 2.5 (mínimo/máximo)</th>
									<td>
										Estimación de muertes por cáncer de pulmón
										por TM2.5
									</td>
								</tr>
								<tr>
									<th>(mínimo/máximo)</th>
									<td>
										Concentración contrafactual mínima o máxima
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<form
						method="dialog"
						class="modal-backdrop"
						@click="closeModal"
					></form>
				</dialog>
			</div>
			<Table></Table>
		</div>
	</div>
</template>

<script setup>
import Table from "../components/Table.vue";
import { ref } from "vue";

const modalClass = ref("");

const showModal = () => {
	modalClass.value = "animate__bounceInUp";
	document.getElementById("my_modal_2").showModal();
};

const closeModal = () => {
	modalClass.value = "";
	document.getElementById("my_modal_2").close();
};
</script>
