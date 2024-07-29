<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
	<div class="study">
		<Header></Header>
		<div class="main">
			<SideBar></SideBar>
			<div class="contents">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script></script>
