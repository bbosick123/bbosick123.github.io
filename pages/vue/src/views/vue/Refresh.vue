<template>
	<div>
		<h4>새로고침 이슈</h4>
		VUE로 만든 페이지에서 사용자가 새로고침이나 url을 직접 입력해서 접속할때 페이지 연결이 안되는 현상이 있음. <br /><br />
		SPA 페이지들에 공통적으로 일어난다고 하고, 검색해보니 쉽게 해결방법을 찾을 수 있었음. <br /><br />
		보통 백엔드에서 index.html 로 강제로 보낸다고 함. 프론트에서도 할수있긴 한데 좀 애매하고, github로 만든 페이지 에서는 그것도 안됨.<br /><br />
		검색해보니 404 페이지로 연결시키고 404에서 index.html 으로 보내면 된다는데, 하다가 잘 안되가지구 일단 보류한 상태. (24-07-29)
	</div>
</template>

<script>
export default {
	name: "Refresh",
};
</script>

<style></style>
