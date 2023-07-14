<template>
	<div class="bg-base-100 h-full">
		<div class="flex flex-col mx-auto items-center w-9/12 h-screen">
			<div class="my-14 flex items-center content-around w-1/5">
				<router-link to="/chart1" class="mx-auto btn btn-primary">
					<i class="fa-solid fa-table"></i>Grafica
				</router-link>
			</div>
			<div>
				<div class="overflow-x-auto">
					<Table></Table>
				</div>
			</div>

			<div class="w-11/12 h-3/4"></div>
		</div>
	</div>
</template>

<script setup>
import Table from "../components/Table.vue";
</script>
