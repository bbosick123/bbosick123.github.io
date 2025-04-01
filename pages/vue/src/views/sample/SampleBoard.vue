<template>
	<div class="history">
	<div class="history-write">
		<h4 class="contents__title">글쓰기 테스트</h4>
		<input v-model="newPostDate" placeholder="날짜 입력 (예: 2025.03.31)" />
		<textarea v-model="newPostContent" placeholder="내용 입력"></textarea>
		<button @click="addPost">글쓰기</button>
	</div>
	<!-- 글 목록 출력 -->
	<ContentItem
		v-for="(post, idx) in posts"
		:key="idx"
		:date="post.date"
	>
		<div class="contents__item" v-html="post.content" />
	</ContentItem>
	</div>
</template>

<script>
	import ContentItem from "@/components/ContentItem.vue";
	import historyData from "@/data/historyData.json";

	export default {
		name: "HistoryPage",
		components: { ContentItem },
		data() {
			return {
				posts: [...historyData],
				newPostDate: "",
				newPostContent: "",
			};
		},
		methods: {
			addPost() {
			if (!this.newPostDate || !this.newPostContent) return;

			this.posts.unshift({
				date: this.newPostDate,
				content: this.newPostContent.replace(/\n/g, "<br />"),
			});

			this.newPostDate = "";
			this.newPostContent = "";
			},
		},
	};
</script>
  
<style lang="scss" scoped>
  .history {
	margin-top: 10rem;
	margin-left: 2rem;
	.contents__item {
		font-size: 1.6rem;
	}
  }
  .contents__item {
	margin: 0;
  }


  .history-write {
	width: 80rem;
	max-width: 100%;
	margin-bottom: 5rem;
	padding: 2rem;
	border-radius: 0.8rem;
	border: 0.1rem solid #eee;
	box-shadow: 1px 1px 1px 1px #eee;
	background-color: #fff;
	color: #666;
	word-break: break-all;
	.contents__title {
		margin-bottom: 1.6rem;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.6rem;
		color: #333;
	}
	input {
		width: 100%;
		height: 4rem;
		margin-bottom: 1.6rem;
		padding: 0 0.8rem;
		border: 0.1rem solid #eee;;
		border-radius: 0.4rem;
		font-family: "Noto Sans KR", sans-serif;
		font-size: 1.4rem;
	}
	textarea {
		width: 100%;
		height: 12rem;
		padding: 0.8rem;
		border: 0.1rem solid #eee;;
		border-radius: 0.4rem;
		font-family: "Noto Sans KR", sans-serif;
		font-size: 1.4rem;
	}
	button {
		margin-top: 2rem;
		width: 16rem;
		height: 3.6rem;
		border-radius: 0.4rem;
		background-color: #5cd2b9;
		color: #fff;
		font-size: 1.6rem;
		font-weight: 600;
	}
}
</style>
  