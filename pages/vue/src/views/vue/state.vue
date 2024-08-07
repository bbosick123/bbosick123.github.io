<template>
	<div>
		<h4 class="contents__title">상태관리</h4>
		<ContentItem date="2024년 08월 07일">
			Vue 코드는 상태(State), 기능(Action), 뷰(View) 로 나뉜다. 아래 코드는 Vue 공식사이트에 있는 예제이다.<br /><br />
			<div
				v-pre
				class="colorscripter-code"
				style="color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto"
			>
				<table
					class="colorscripter-code-table"
					style="margin: 0; padding: 0; border: none; background-color: #272727; border-radius: 4px"
					cellspacing="0"
					cellpadding="0"
				>
					<tr>
						<td style="padding: 12px 6px; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">script</span>&nbsp;<span style="color: #ff3399">setup</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">import</span>&nbsp;{&nbsp;ref&nbsp;}&nbsp;<span style="color: #ff3399">from</span>&nbsp;<span
										style="color: #ffd500"
										>'vue'</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #999999">//&nbsp;상태(State)</span></div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;count&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;ref(<span style="color: #c10aff">0</span>)
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #999999">//&nbsp;기능(Actions)</span></div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #ff3399">function</span>&nbsp;increment()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;count.value<span style="color: #aaffaa"></span><span style="color: #ff3399">+</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">+</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">script</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #999999">&lt;!--&nbsp;뷰(view)&nbsp;--&gt;</span></div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">template</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;count&nbsp;}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">template</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<br />
			상태관리는 데이터를 관리하는 기법정도로 이해 하면 되겠다.<br /><br />
			상태관리는 왜 필요할까?<br /><br />
			<img src="/images/240807_vue.png" alt="" /><br />
			<p class="text-source">이미지 출처 - https://ko.vuejs.org/guide/scaling-up/state-management</p>
			<br />
			위 이미지는 <strong>단방향 데이터 흐름</strong> 개념을 보여주는 이미지이다. 그런데 <strong>여러 컴포넌트가 상태를 공유</strong> 할 경우, 데이터 관리가
			복잡해지고 충돌 할 수 있다.<br /><br />
			<ul>
				<li>1. 여러 <strong>View</strong>가 동일한 <strong>State</strong>에 따라 달라지는경우 <br /></li>
				<li>2. 서로 다른 <strong>View</strong>의 <strong>Action</strong>이 동일한 <strong>State</strong>를 변경 시키는경우</li>
			</ul>
			<br />
			위 2가지 경우처럼 여러 페이지에서 공유해야하는 State가 있는경우, store.js를 따로 만들고 <strong>reactive()</strong>를 사용하여 반응형 객체를 만들어
			해결하거나, <strong>vuex</strong>와 같은 상태관리 라이브러리를 사용하는 방법이 있다.<br /><br />
			링크 - <router-link to="./vuex">vuex</router-link>
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "state",
	components: {
		ContentItem,
	},
};
</script>

<style lang="scss" scoped>
img {
	display: block;
	margin: 0 auto;
	width: 28rem;
}
</style>
