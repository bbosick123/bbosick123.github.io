<template>
	<div class="history">
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
	margin-top: 100px;
	.contents__item {
		font-size: 1.6rem;
	}
  }
  .write-form {
	margin-bottom: 2rem;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 8px;
  }
  .write-form input,
  .write-form textarea {
	display: block;
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
  }
  .write-form button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  .write-form button:hover {
	background-color: #0056b3;
  }
</style>
  