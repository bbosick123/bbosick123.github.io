<template>
	<div>
		<h4 class="contents__title">동기 / 비동기</h4>
		<ContentItem date="2024년 07월 31일">
			자바스크립트는 한번에 하나의 작업만 수행한다.<br />
			a, b 가 있으면 a를 다 수행한 후 b를 수행 한다는 것이다. 이것을 동기 라고 한다.<br /><br />
			비동기는 a,b를 동시에 수행한다. 자바스크립트에서 비동기 처리를 할 수 있고 API 문서를 읽고 호출하여 데이터를 읽을때 비동기로 처리 한다.<br /><br />

			비동기처리를 하면 여러 장점이 있고 문제점도 있는데 일단 문제점만 알아보겠다.<br />
			a, b 를 동시에 수행하는데 b를 수행할때 a에 있는 결과값이 필요한 경우가 있을것이다.<br /><br />
			<div
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
						<td style="padding: 6px; border-right: 2px solid #4f4f4f">
							<div
								style="
									margin: 0;
									padding: 0;
									word-break: normal;
									text-align: right;
									color: #aaa;
									font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
									line-height: 130%;
								"
							>
								<div style="line-height: 130%">1</div>
								<div style="line-height: 130%">2</div>
								<div style="line-height: 130%">3</div>
								<div style="line-height: 130%">4</div>
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">script</span>&nbsp;<span style="color: #a8ff58">async</span>&nbsp;<span
										style="color: #a8ff58"
										>src</span
									>=<span style="color: #ffd500">"https://code.jquery.com/jquery-3.7.1.min.js"</span><span style="color: #a8ff58"></span
									><span style="color: #f0f0f0">&gt;</span><span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span
									><span style="color: #ff3399">script</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">script</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;$('.hello').hide();</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">script</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
							</div>
							<div style="text-align: right; margin-top: -13px; margin-right: 5px; font-size: 9px; font-style: italic">
								<a href="http://colorscripter.com/info#e" target="_blank" style="color: #4f4f4f; text-decoration: none">Colored by Color Scripter</a>
							</div>
						</td>
						<td style="vertical-align: bottom; padding: 0 2px 4px 0">
							<a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration: none; color: white"
								><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px">cs</span></a
							>
						</td>
					</tr>
				</table>
			</div>
			<br />
			<strong>async</strong>는 비동기 처리를 하는 키워드이다. jquery를 불러오는 스크립트와 아래 .hello 를 hide() 시키는 스크립트가 비동기처리로 동시에
			수행된다고 생각해보자. jquery를 불러오지 못한 상태에서 아래 $('.hello').hide(); 가 먼저 수행된다면 에러가 날것이다. <br /><br />

			문제점만 알아본 이유는, 이런 문제를 해결하기위해 <strong>Callback</strong> 이라는 개념을 알아야 하기 때문이다.<br /><br />
			링크 - <router-link to="./callback">Callback</router-link>
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "JavascriptAsynchronous",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
