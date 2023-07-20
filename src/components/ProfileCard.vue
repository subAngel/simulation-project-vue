<template>
	<!-- <div
		class="profile rounded-md flex flex-col items-center content-center justify-center"
	>
		<h1 class="text-3xl">{{ github_user.name }}</h1>
		<div class="avatar cursor-pointer" @click="redirect(github_user.html_url)">
			<div
				class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-2 mt-14"
			>

			</div>
		</div>
	</div> -->
	<!-- <div class="card">
		<div class="imgBx">
			<img :src="github_user.avatar_url" :alt="github_user.name" />
		</div>
	</div> -->
	<div class="card w-96 bg-base-100 shadow-xl ml-40">
		<figure class="px-10 pt-10">
			<div class="avatar p-3">
				<div
					class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer"
					@click="redirectProfile()"
					target="_blank"
				>
					<img
						src="https://img.freepik.com/free-icon/github_318-598326.jpg"
						:alt="github_user.name"
						class=""
					/>
				</div>
			</div>
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">{{ github_user.name }}</h2>
			<p>
				¿Quieres visitar el repositorio de este proyecto? Da click en el
				boton
			</p>
			<div class="card-actions mt-3">
				<a
					href="https://github.com/subAngel/simulation-project-vue"
					class="btn btn-info btn-outline btn-circle"
				>
					<i class="fa-solid fa-code"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Octokit, App } from "octokit";
import axios from "axios";

const github_user = ref({});
const redirect = (url) => {
	window.location.href = url;
};
onMounted(() => {
	axios.get("https://api.github.com/users/subAngel").then((response) => {
		console.log(response.data);
		github_user.value = response.data;
	});
});
const redirectProfile = () => {
	window.location.href = "https://github.com/subAngel";
};
</script>

<style scoped>
.our-team {
	padding: 30px 0 40px;
	margin-bottom: 30px;
	background-color: #f7f5ec;
	text-align: center;
	overflow: hidden;
	position: relative;
}

.our-team .picture {
	display: inline-block;
	height: 130px;
	width: 130px;
	margin-bottom: 50px;
	z-index: 1;
	position: relative;
}

.our-team .picture::before {
	content: "";
	width: 100%;
	height: 0;
	border-radius: 50%;
	background-color: #1369ce;
	position: absolute;
	bottom: 135%;
	right: 0;
	left: 0;
	opacity: 0.9;
	transform: scale(3);
	transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
	height: 100%;
}

.our-team .picture::after {
	content: "";
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: #1369ce;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}

.our-team .picture img {
	width: 100%;
	height: auto;
	border-radius: 50%;
	transform: scale(1);
	transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
	box-shadow: 0 0 0 14px #f7f5ec;
	transform: scale(0.7);
}

.our-team .title {
	display: block;
	font-size: 15px;
	color: #4e5052;
	text-transform: capitalize;
}

.our-team .social {
	width: 100%;
	padding: 0;
	margin: 0;
	background-color: #1369ce;
	position: absolute;
	bottom: -100px;
	left: 0;
	transition: all 0.5s ease 0s;
}

.our-team:hover .social {
	bottom: 0;
}

.our-team .social li {
	display: inline-block;
}

.our-team .social li a {
	display: block;
	padding: 10px;
	font-size: 17px;
	color: white;
	transition: all 0.3s ease 0s;
	text-decoration: none;
}

.our-team .social li a:hover {
	color: #1369ce;
	background-color: #f7f5ec;
}
</style>
