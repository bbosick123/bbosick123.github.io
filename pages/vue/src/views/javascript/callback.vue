<template>
	<div>
		<h4 class="contents__title">Callback 함수</h4>
		<ContentItem date="2024년 07월 31일">
			Callback -> 뒤에 부른다 -> 어떤 함수가 호출되고난 후에 호출한다.<br />
			Callback함수는 다른 함수에 인자로 들어간다. <br /><br />
			일반적인 콜백 함수 예시<br /><br />
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
								<div style="line-height: 130%">5</div>
								<div style="line-height: 130%">6</div>
								<div style="line-height: 130%">7</div>
								<div style="line-height: 130%">8</div>
								<div style="line-height: 130%">9</div>
								<div style="line-height: 130%">10</div>
								<div style="line-height: 130%">11</div>
								<div style="line-height: 130%">12</div>
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">script</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">function</span>&nbsp;greeting(<span style="color: #4be6fa">name</span>)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500">"Hello&nbsp;"</span>&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">+</span>&nbsp;<span style="color: #4be6fa">name</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">function</span>&nbsp;processUserInput(callback)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;<span style="color: #4be6fa">name</span>&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;prompt(<span style="color: #ffd500">"Please&nbsp;enter&nbsp;your&nbsp;name."</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;callback(<span style="color: #4be6fa">name</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;processUserInput(greeting);</div>
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
			위 코드를 보면 <br />
			1. greeting 이라는 함수 정의. <br />
			2. processUserInput 이라는 함수 정의, 인자로 callback(함수) 을 받음.<br />
			3. processUserInput함수를 호출(인자는 greeting 함수)<br />
			결과 - const name = prompt("Please enter your name."); 가 먼저 실행되고 이후에 greeting() 가 실행됨.<br /><br />

			참 쉽죠? 콜백 함수는 비동기 작업에 많이 쓰인다. 비동기 작업에서의 콜백함수를 알아보자.<br /><br />
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "javascriptCallback",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
