<script setup></script>

<template>
	<div class="content">
		<!-- <router-link to="/">Home</router-link>
		<router-link to="/chart/chart1">Chart 1</router-link> -->
		<router-view v-slot="{ Component, route }">
			<transition
				:enter-active-class="route.meta.enterClass"
				:leave-active-class="route.meta.leaveClass"
				mode="out-in"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style></style>
