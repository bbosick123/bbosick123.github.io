<template>
	<div>
		<header class="header">
			<router-link to="/">처음으로</router-link>
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
}

a {
	color: #5cd2b9;
	text-decoration: underline;
}
</style>
