import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

import DefaultLayout from "@/layouts/defaultLayout.vue";
import SampleLayout from "@/layouts/sampleLayout.vue";

import DefaultView from "@/views/intro.vue";
import HtmlIntro from "@/views/html/intro.vue";

import CssIntro from "@/views/css/intro.vue";

import JavascriptAsynchronous from "@/views/javascript/asynchronous.vue";
import JavascriptCallback from "@/views/javascript/callback.vue";
import JavascriptPromise from "@/views/javascript/promise.vue";
import JavascriptAsyncAwait from "@/views/javascript/asyncawait.vue";
import JavascriptApi from "@/views/javascript/api.vue";
import JavascriptSampleBoard from "@/views/javascriptsample/board.vue";
import JavascriptSamplePagination from "@/views/javascriptsample/pagination.vue";

import Vue404 from "@/views/vue/404.vue";
import VueVitePluginPage from "@/views/vue/VitePluginPage.vue";
import VueState from "@/views/vue/state.vue";
import VueVuex from "@/views/vue/vuex.vue";

import SeoSearch from "@/views/seo/search.vue";

import ToolsScreenShot from "@/views/tools/screenshot.vue";
import ToolsCodeSnippet from "@/views/tools/codesnippet.vue";

import EtcDiet from "@/views/etc/diet.vue";

import HorizontalScroll from "@/views/sample/HorizontalScroll.vue";
import CircleProgress from "@/views/sample/CircleProgress.vue";
import SampleTable from "@/views/sample/SampleTable.vue";
import SamplePagination from "@/views/sample/Pagination.vue";

import History from "@/views/history/history.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: DefaultLayout,
			children: [
				{
					path: "history/history",
					component: History,
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
					path: "javascript/api",
					component: JavascriptApi,
					meta: { title: "javascript - Api" },
				},
				{
					path: "javascriptsample/board",
					component: JavascriptSampleBoard,
					meta: { title: "javascript sample - board" },
				},
				{
					path: "javascriptsample/pagination",
					component: JavascriptSamplePagination,
					meta: { title: "javascript sample - pagination" },
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
					path: "vue/state",
					component: VueState,
					meta: { title: "vue - 상태관리" },
				},
				{
					path: "vue/vuex",
					component: VueVuex,
					meta: { title: "vue - vuex" },
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
				{
					path: "etc/diet",
					component: EtcDiet,
					meta: { title: "etc - diet" },
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
				{
					path: "SampleTable",
					component: SampleTable,
					meta: { title: "sample - Board List" },
				},
				{
					path: "Pagination",
					component: SamplePagination,
					meta: { title: "sample - pagination" },
				},
			],
		},
	],

	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

router.beforeEach((to, from, next) => {
	store.commit("setCurrentRoute", to.path); // 현재 경로를 store에 저장
	document.title = to.meta.title || "Default Title";
	next();
});

// 새로고침 시 저장된 경로로 이동
const savedRoute = store.state.currentRoute;
if (savedRoute && savedRoute !== "/") {
	router.replace(savedRoute);
}
export default router;
