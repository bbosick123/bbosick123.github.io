<template>
	<div>
		<div class="wrap">
			<table>
				<thead>
					<tr>
						<th>번호</th>
						<th>id</th>
						<th>이름</th>
						<th>이메일</th>
						<th>주소</th>
						<th>전화번호</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in BoardList" :key="item.id">
						<td class="text-center">{{ item.id }}</td>
						<td>{{ item.username }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.email }}</td>
						<td>{{ item.address.street }}, {{ item.address.city }}</td>
						<td>{{ item.phone }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "BoardList",
	data() {
		return {
			BoardList: [],
		};
	},
	async mounted() {
		await this.fetchUserData();
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/users");

				if (!response.ok) {
					throw new Error("네트워크 응답에 문제가 있습니다.");
				}

				const data = await response.json();
				this.BoardList = data;
			} catch (error) {
				console.error("API 호출 중 에러 발생:", error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.wrap {
	margin-top: 60px;
	padding: 40px;
	font-size: 1.6rem;
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
	text-align: center;
	background-color: #f1f1f1;
}
</style>
