<template>
	<div>
		<header class="header">
			<router-link to="/" @click.stop="$emit('close-sidebar')">처음으로</router-link>
			<div class="sidebar__button" @click="$emit('toggle-sidebar')">
				<i class="xi-align-justify"></i>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 6rem;
	padding: 2rem;
	background-color: #fff;
	border-bottom: 1px solid #eaeaea;
	font-size: 1.6rem;

	.sidebar__button {
		display: none;
		cursor: pointer;
	}
}

a {
	color: #5cd2b9;
	text-decoration: underline;
}

@media screen and (max-width: 784px) {
	.header {
		justify-content: space-between;
		.sidebar__button {
			display: block;
			font-size: 30px;
		}
	}
}
</style>
