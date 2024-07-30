<template>
	<div class="contents__item">
		<div class="contents__date">{{ date }}</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "ContentItem",
	props: {
		date: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.contents {
	&__item {
		width: 80rem;
		max-width: 100%;
		margin: 0 auto;
		padding: 2rem;
		border-radius: 0.8rem;
		border: 0.1rem solid #eee;
		box-shadow: 1px 1px 1px 1px #eee;
		background-color: #fff;
		color: #666;
		& + .contents__item {
			margin-top: 2.4rem;
		}
	}
	&__date {
		line-height: 1;
		margin-bottom: 2rem;
		border-bottom: 1px solid #eee;
		padding-bottom: 1.2rem;
	}
	img {
		max-width: 100%;
	}
}
</style>
