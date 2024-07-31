<template>
	<div>
		<h4 class="contents__title">Promise</h4>
		<ContentItem date="2024년 07월 31일">
			자바스크립트는 한번에 하나의 작업만 수행한다. a, b 가 있으면 a를 다 수행한 후 b를 수행 한다는 것이다. 이것을 동기 라고 한다.<br /><br />
			비동기는 a,b를 동시에 수행하는데, 자바스크립트에서 비동기 처리를 할 수 있고 API 문서를 읽고 호출하여 데이터를 읽을때 비동기로 처리 한다.<br /><br />
			일단 데이터를 다룰때, 비동기 처리를 해야한다고 알고있으면 된다.<br /><br />

			근데 이런 비동기 처리를 할때 문제가 있다.<br />
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

			비동기 처리를 하려면 <strong>"Promise"</strong> 객체와 <strong>"async", "await"</strong> 라는 키워드를 알아야 한다. 이것들은 따로 정리 하겠음.
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
