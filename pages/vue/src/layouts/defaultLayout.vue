<script setup>
import { ref, watch } from "vue";
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";

const isSidebarOpen = ref(false);

function toggleSidebar() {
	isSidebarOpen.value = !isSidebarOpen.value;
}

function closeSidebar() {
	isSidebarOpen.value = false;
}

watch(isSidebarOpen, (newValue) => {
	if (newValue) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
});
</script>

<template>
	<div class="study" :class="{ 'sidebar--open': isSidebarOpen }">
		<Header @toggle-sidebar="toggleSidebar" />
		<div class="main">
			<SideBar @close-sidebar="closeSidebar" />
			<div class="contents">
				<router-view />
			</div>
		</div>
	</div>
</template>
