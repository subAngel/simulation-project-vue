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
				<div class="menu">
					<!-- <div class="w-1/2 h-1/2 bg-terciary">
						<h1 class="title">Hola mundo</h1>
					</div> -->
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img
								src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
