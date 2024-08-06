<template>
	<div>
		<div class="wrap">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in paginatedData" :key="item.id">
						<td class="text-center">{{ item.id }}</td>
						<td>{{ item.title }}</td>
						<td>{{ item.body }}</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination">
				<button class="pagination--prev" @click="prevPageGroup" :disabled="currentPageGroup === 1">&lt;</button>
				<button v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
				<button class="pagination--next" @click="nextPageGroup" :disabled="currentPageGroup === totalPageGroups">&gt;</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SamplePagination",
	data() {
		return {
			table: [],
			currentPage: 1,
			itemsPerPage: 5,
			pagesPerGroup: 10,
		};
	},
	computed: {
		totalPages() {
			return Math.ceil(this.table.length / this.itemsPerPage);
		},
		totalPageGroups() {
			return Math.ceil(this.totalPages / this.pagesPerGroup);
		},
		currentPageGroup() {
			return Math.ceil(this.currentPage / this.pagesPerGroup);
		},
		paginatedData() {
			const start = (this.currentPage - 1) * this.itemsPerPage;
			const end = start + this.itemsPerPage;
			return this.table.slice(start, end);
		},
		visiblePages() {
			const start = (this.currentPageGroup - 1) * this.pagesPerGroup + 1;
			const end = Math.min(start + this.pagesPerGroup - 1, this.totalPages);
			const pages = [];
			for (let i = start; i <= end; i++) {
				pages.push(i);
			}
			return pages;
		},
	},
	async mounted() {
		await this.fetchUserData();
		this.updatePagesPerGroup();
		window.addEventListener("resize", this.updatePagesPerGroup);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.updatePagesPerGroup);
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts");

				if (!response.ok) {
					throw new Error("네트워크 응답에 문제가 있습니다.");
				}

				const data = await response.json();
				this.table = data;
				console.log(this.table);
			} catch (error) {
				console.error("API 호출 중 에러 발생:", error);
			}
		},
		nextPageGroup() {
			if (this.currentPageGroup < this.totalPageGroups) {
				this.currentPage = this.currentPageGroup * this.pagesPerGroup + 1;
			}
		},
		prevPageGroup() {
			if (this.currentPageGroup > 1) {
				this.currentPage = (this.currentPageGroup - 1) * this.pagesPerGroup;
			}
		},
		changePage(page) {
			this.currentPage = page;
		},
		updatePagesPerGroup() {
			if (window.innerWidth <= 784) {
				this.pagesPerGroup = 5;
			} else {
				this.pagesPerGroup = 10;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.wrap {
	margin: 60px auto 0;
	padding: 40px;
	font-size: 1.6rem;
	overflow-x: auto;
	max-width: 100%;
}
.text-left {
	text-align: left;
}
.text-center {
	text-align: center;
}
th,
td {
	border: 1px solid #ddd;
	padding: 12px 20px;
}
th {
	background-color: #f1f1f1;
}
.pagination {
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	font-size: 20px;
}
.pagination button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	cursor: pointer;
	line-height: 1;
	&:hover:not(:disabled) {
		color: #5cd2b9;
		text-decoration: underline;
		font-weight: 500;
	}
}
.pagination button.active {
	color: #5cd2b9;
	text-decoration: underline;
	font-weight: 500;
}
.pagination button:disabled {
	opacity: 0.2;
	cursor: auto;
}
</style>
