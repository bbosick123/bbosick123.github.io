import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/defaultLayout.vue";
import SampleLayout from "@/layouts/sampleLayout.vue";

import DefaultView from "@/views/intro.vue";
import HtmlIntro from "@/views/html/intro.vue";

import CssIntro from "@/views/css/intro.vue";

import JavascriptAsynchronous from "@/views/javascript/asynchronous.vue";
import JavascriptCallback from "@/views/javascript/callback.vue";
import JavascriptPromise from "@/views/javascript/promise.vue";
import JavascriptAsyncAwait from "@/views/javascript/asyncawait.vue";

import Vue404 from "@/views/vue/404.vue";
import VueVitePluginPage from "@/views/vue/VitePluginPage.vue";

import SeoSearch from "@/views/seo/search.vue";

import ToolsScreenShot from "@/views/tools/screenshot.vue";
import ToolsCodeSnippet from "@/views/tools/codesnippet.vue";

import HorizontalScroll from "@/views/sample/HorizontalScroll.vue";
import CircleProgress from "@/views/sample/CircleProgress.vue";

import Diary from "@/views/diary/diary.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: DefaultLayout,
			children: [
				{
					path: "diary/diary",
					component: Diary,
					meta: { title: "용식s 일기장" },
				},
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
					path: "javascript/asynchronous",
					component: JavascriptAsynchronous,
					meta: { title: "javascript - 동기 / 비동기" },
				},
				{
					path: "javascript/callback",
					component: JavascriptCallback,
					meta: { title: "javascript - Callback" },
				},
				{
					path: "javascript/promise",
					component: JavascriptPromise,
					meta: { title: "javascript - promise" },
				},
				{
					path: "javascript/asyncawait",
					component: JavascriptAsyncAwait,
					meta: { title: "javascript - async/await" },
				},
				{
					path: "vue/404",
					component: Vue404,
					meta: { title: "vue - 404" },
				},
				{
					path: "vue/VitePluginPage",
					component: VueVitePluginPage,
					meta: { title: "vue - vite-plugin-page" },
				},
				{
					path: "seo/search",
					component: SeoSearch,
					meta: { title: "seo - search" },
				},
				{
					path: "tools/screenshot",
					component: ToolsScreenShot,
					meta: { title: "tools - screenshot" },
				},
				{
					path: "tools/codesnippet",
					component: ToolsCodeSnippet,
					meta: { title: "tools - codesnippet" },
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
