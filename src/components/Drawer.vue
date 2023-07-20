<template>
	<div class="absolute bottom-8 right-8">
		<div class="drawer">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label
					for="my-drawer"
					class="btn btn-circle btn-outline btn-primary drawer-button"
					><i class="fa-solid fa-user"></i
				></label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer" class="drawer-overlay"></label>
				<div class="menu my-auto pl-0">
					<!-- <div class="w-1/2 h-1/2 bg-terciary">
						<h1 class="title">Hola mundo</h1>
					</div> -->
					<ProfileCard />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import ProfileCard from "./ProfileCard.vue";
</script>
