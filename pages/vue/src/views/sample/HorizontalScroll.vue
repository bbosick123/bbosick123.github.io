<template>
	<div class="wrap">
		<div class="main">
			<div class="main-visual">mainvisual</div>
			<div class="horizontal-container">
				<div>horizontal1</div>
				<div>horizontal2</div>
				<div>horizontal3</div>
				<div>horizontal4</div>
			</div>
		</div>
		<div class="footer">footer</div>
	</div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
	name: "HorizontalScroll",
	setup() {
		onMounted(() => {
			const container = document.querySelector(".horizontal-container");
			const sections = gsap.utils.toArray(".horizontal-container div");

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: container,
					pin: true,
					scrub: 1,
					end: () => "+=" + container.offsetWidth,
				},
			});
		});
	},
};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 30px;
	overflow-x: hidden;
}
.header,
.main-visual,
.footer {
	display: flex;
	align-items: center;
	justify-content: center;
}
.header {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 6rem;
	padding: 2rem;
	background-color: #fff;
	border-bottom: 1px solid #eaeaea;
	font-size: 1.6rem;
	overflow: hidden;
}
.main-visual {
	height: 100vh;
	padding-top: 80px;
	background-color: aqua;
}
.footer {
	background-color: bisque;
	height: 400px;
}
.horizontal-container {
	display: flex;
	overflow: hidden;
	height: 100vh;
	background-color: lightgrey;
}
.horizontal-container div {
	min-width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 40px;
}
.horizontal-container div:nth-child(1) {
	background-color: lightsalmon;
}
.horizontal-container div:nth-child(2) {
	background-color: lightgreen;
}
.horizontal-container div:nth-child(3) {
	background-color: lightblue;
}
.horizontal-container div:nth-child(4) {
	background-color: lightcoral;
}

a {
	color: #5cd2b9;
	text-decoration: underline;
}
</style>
