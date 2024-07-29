<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";

const isSidebarOpen = ref(false);

function toggleSidebar() {
	isSidebarOpen.value = !isSidebarOpen.value;
}

function closeSidebar() {
	isSidebarOpen.value = false;
}
</script>

<template>
	<div class="study" :class="{ 'sidebar--open': isSidebarOpen }">
		<Header @toggle-sidebar="toggleSidebar"></Header>
		<div class="main">
			<SideBar @close-sidebar="closeSidebar"></SideBar>
			<div class="contents">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script></script>
