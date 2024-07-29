import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/defaultLayout.vue";
import SampleLayout from "@/layouts/sampleLayout.vue";

import DefaultView from "@/views/intro.vue";
import HtmlIntro from "@/views/html/intro.vue";

import CssIntro from "@/views/css/intro.vue";

import JavascriptIntro from "@/views/javascript/intro.vue";

import VueIntro from "@/views/vue/intro.vue";
import VueRefresh from "@/views/vue/Refresh.vue";

import HorizontalScroll from "@/views/sample/HorizontalScroll.vue";
import CircleProgress from "@/views/sample/CircleProgress.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: DefaultLayout,
			children: [
				{
					path: "",
					component: DefaultView,
					meta: { title: "환영합니다 ^_^" },
				},
				{
					path: "html/intro",
					component: HtmlIntro,
					meta: { title: "html - intro" },
				},
				{
					path: "css/intro",
					component: CssIntro,
					meta: { title: "css - intro" },
				},
				{
					path: "javascript/intro",
					component: JavascriptIntro,
					meta: { title: "javascript - intro" },
				},
				{
					path: "vue/intro",
					component: VueIntro,
					meta: { title: "vue - intro" },
				},
				{
					path: "vue/Refresh",
					component: VueRefresh,
					meta: { title: "vue - Refresh" },
				},
			],
		},
		{
			path: "/sample",
			component: SampleLayout,
			children: [
				{
					path: "HorizontalScroll",
					component: HorizontalScroll,
					meta: { title: "sample - HorizontalScroll" },
				},
				{
					path: "CircleProgress",
					component: CircleProgress,
					meta: { title: "sample - CircleProgress" },
				},
			],
		},
	],
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title || "Default Title";
	next();
});

export default router;
