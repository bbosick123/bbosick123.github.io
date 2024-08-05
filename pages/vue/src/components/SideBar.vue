<template>
	<aside class="sidebar">
		<ul class="sidebar__title-depth1">
			<li v-for="(item, index) in items" :key="index" :class="{ 'sidebar__title-depth1--active': item.open }">
				<h3 @click="toggle(index)">{{ item.title }} <i v-if="item.subitems.length > 0" class="xi-angle-down"></i></h3>

				<transition name="slide" @enter="enter" @leave="leave">
					<ul v-if="item.open" class="sidebar__title-depth2">
						<li v-for="(subitem, subindex) in item.subitems" :key="subindex">
							<router-link :to="subitem.link" @click.stop="$emit('close-sidebar')">
								<h4>
									{{ subitem.label }}
								</h4>
							</router-link>
						</li>
					</ul>
				</transition>
			</li>
		</ul>
	</aside>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = ref([
	// {
	// 	title: "html",
	// 	open: open,
	// 	subitems: [{ label: "소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개", link: "/html/intro" }],
	// },
	// {
	// 	title: "css",
	// 	open: open,
	// 	subitems: [{ label: "소개", link: "/css/intro" }],
	// },

	{
		title: "History",
		open: open,
		subitems: [{ label: "History", link: "/history/history" }],
	},
	{
		title: "Javascript",
		open: open,
		subitems: [
			{ label: "동기 / 비동기", link: "/javascript/asynchronous" },
			{ label: "Callback", link: "/javascript/callback" },
			{ label: "Promise", link: "/javascript/promise" },
			{ label: "Async / Await", link: "/javascript/asyncawait" },
			{ label: "Api", link: "/javascript/api" },
		],
	},
	{
		title: "Javascript Sample",
		open: open,
		subitems: [
			{ label: "Board List", link: "/javascriptsample/board" },
			{ label: "Pagination", link: "/javascriptsample/pagination" },
		],
	},
	{
		title: "VUE",
		open: open,
		subitems: [
			{ label: "404error", link: "/vue/404" },
			{ label: "vite-plugin-page", link: "/vue/VitePluginPage" },
		],
	},
	{
		title: "SEO",
		open: open,
		subitems: [{ label: "Google Search Console", link: "/seo/search" }],
	},
	{
		title: "TOOLS",
		open: open,
		subitems: [
			{ label: "ScreenShot", link: "/tools/screenshot" },
			{ label: "Code Snippet", link: "/tools/codesnippet" },
		],
	},
	{
		title: "SAMPLE",
		open: false,
		subitems: [
			{ label: "Horizontal ScrollPage", link: "/sample/HorizontalScroll" },
			{ label: "Circle Progress", link: "/sample/CircleProgress" },
			{ label: "Board List", link: "/sample/SampleTable" },
			{ label: "Pagination", link: "/sample/Pagination" },
		],
	},
]);

const toggle = (index) => {
	if (items.value[index].subitems.length > 0) {
		items.value[index].open = !items.value[index].open;
	}
};

watch(route, (newRoute) => {
	items.value.forEach((item) => {
		if (item.subitems.some((subitem) => subitem.link === newRoute.path)) {
			item.open = true;
		}
	});
});

const enter = (el) => {
	el.style.marginTop = "1rem";
	el.style.height = el.scrollHeight + "px";
	el.style.opacity = "1";
};

const leave = (el) => {
	el.style.marginTop = "0";
	el.style.height = "0";
	el.style.opacity = "0";
};

onMounted(() => {
	items.value.forEach((item, index) => {
		if (item.open) {
			const ulElement = document.querySelector(`.sidebar__title-depth1 > li:nth-child(${index + 1}) ul`);
			if (ulElement) {
				enter(ulElement);
			}
		}
	});
});
</script>

<style lang="scss" scoped>
.sidebar {
	overflow-y: auto;
	position: fixed;
	width: 28rem;
	min-width: 28rem;
	height: calc(100% - 60px);
	padding: 2.4rem 0;
	padding-bottom: 8rem;
	border-right: 1px solid #eaeaea;
	background-color: #fff;
	z-index: 1;
	&__title-depth1 {
		> li {
			position: relative;
			overflow: hidden;
			h3 {
				position: relative;
				padding: 0 2rem;
				font-size: 2rem;
				cursor: pointer;
			}

			i {
				position: absolute;
				right: 2rem;
				top: 0.8rem;
				font-weight: 700;
				font-size: 1.6rem;
			}

			& + li {
				margin-top: 2.8rem;
			}

			a {
				position: relative;
				display: flex;
				h4 {
					word-break: break-all;
					font-weight: 400;
				}
			}

			.router-link-active {
				color: #5cd2b9;
			}

			ul {
				opacity: 0;
				height: 0;
				overflow: hidden;
				transition: all 0.5s ease;
				li {
					a {
						padding: 1rem 2rem 1rem 2.8rem;
						font-weight: 500;
						&:hover {
							color: #5cd2b9;
						}
					}
				}
			}

			&.sidebar__title-depth1--active {
				i {
					transform: rotate(180deg);
					color: #5cd2b9;
				}
				h3 {
					&::before {
						content: "";
						position: absolute;
						left: 0;
						width: 4px;
						height: 100%;
						background-color: #5cd2b9;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 784px) {
	.sidebar {
		width: 100%;
		left: -100%;
		transition: 0.4s left ease;
	}
	.sidebar--open {
		.sidebar {
			left: 0;
		}
	}
}
</style>
