<template>
	<aside class="sidebar">
		<ul class="sidebar__title-depth1">
			<li v-for="(item, index) in items" :key="index" @click="toggle(index)" :class="{ 'sidebar__title-depth1--active': item.open }">
				<h3>{{ item.title }}</h3>
				<transition name="slide" @enter="enter" @leave="leave">
					<ul v-if="item.open" class="sidebar__title-depth2">
						<li v-for="(subitem, subindex) in item.subitems" :key="subindex">
							<router-link :to="subitem.link" @click.stop="$emit('close-sidebar')">
								<h4>{{ subitem.label }}</h4>
							</router-link>
						</li>
					</ul>
				</transition>
				<i v-if="item.subitems.length > 0" class="xi-angle-down"></i>
			</li>
		</ul>
	</aside>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = ref([
	{
		title: "html",
		open: open,
		subitems: [{ label: "소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개", link: "/html/intro" }],
	},
	{
		title: "css",
		open: open,
		subitems: [{ label: "소개", link: "/css/intro" }],
	},
	{
		title: "javascript",
		open: open,
		subitems: [{ label: "소개", link: "/javascript/intro" }],
	},
	{
		title: "vue",
		open: open,
		subitems: [
			{ label: "소개", link: "/vue/intro" },
			{ label: "새로고침 이슈", link: "/vue/Refresh" },
			{ label: "vite-plugin-page", link: "/vue/VitePluginPage" },
		],
	},
	{
		title: "sample",
		open: open,
		subitems: [
			{ label: "HorizontalScrollPage", link: "/sample/HorizontalScroll" },
			{ label: "CircleProgress", link: "/sample/CircleProgress" },
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
	el.style.marginTop = "2rem";
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
	border-right: 1px solid #eaeaea;
	background-color: #fff;
	&__title-depth1 {
		> li {
			position: relative;
			cursor: pointer;
			overflow: hidden;
			h3 {
				position: relative;
				padding: 0 2rem;
				font-size: 2rem;
			}

			i {
				position: absolute;
				right: 2rem;
				top: 0.8rem;
				font-weight: 700;
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
						padding: 0 2rem 0 2.8rem;
						font-weight: 500;
					}
					& + li {
						margin-top: 2rem;
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
