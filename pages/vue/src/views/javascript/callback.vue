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
									&nbsp;&nbsp;<span style="color: #ff3399">function</span>&nbsp;fetchData(callback)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;data&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;{&nbsp;<span style="color: #4be6fa">name</span>:&nbsp;<span style="color: #ffd500">"John"</span
									>,&nbsp;age:&nbsp;<span style="color: #c10aff">30</span>&nbsp;};
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(data);</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">2000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">function</span>&nbsp;processData(data)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500">"User&nbsp;data:"</span
									>,&nbsp;data);&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;fetchData(processData);</div>
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
			비동기처리 느낌을 주기위해서 setTimeout 을 넣었다. fetchData는 그냥 비동기에서 쓰는 function 이라고만 알아두기로 했다. 뭐 다른건 없다. 문제는 이런
			콜백함수가 중첩이 되는 경우다. 아래 예시를 보자.<br /><br />
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
								<div style="line-height: 130%">13</div>
								<div style="line-height: 130%">14</div>
								<div style="line-height: 130%">15</div>
								<div style="line-height: 130%">16</div>
								<div style="line-height: 130%">17</div>
								<div style="line-height: 130%">18</div>
								<div style="line-height: 130%">19</div>
								<div style="line-height: 130%">20</div>
								<div style="line-height: 130%">21</div>
								<div style="line-height: 130%">22</div>
								<div style="line-height: 130%">23</div>
								<div style="line-height: 130%">24</div>
								<div style="line-height: 130%">25</div>
								<div style="line-height: 130%">26</div>
								<div style="line-height: 130%">27</div>
								<div style="line-height: 130%">28</div>
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">function</span>&nbsp;doFirstTask(callback)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500"
										>"First&nbsp;task&nbsp;complete"</span
									>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(<span style="color: #ffd500">"result1"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">function</span>&nbsp;doSecondTask(result,&nbsp;callback)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500"
										>"Second&nbsp;task&nbsp;complete&nbsp;with:"</span
									>,&nbsp;result);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(<span style="color: #ffd500">"result2"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">function</span>&nbsp;doThirdTask(result,&nbsp;callback)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500"
										>"Third&nbsp;task&nbsp;complete&nbsp;with:"</span
									>,&nbsp;result);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(<span style="color: #ffd500">"result3"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									doFirstTask(<span style="color: #ff3399">function</span>&nbsp;(result1)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;doSecondTask(result1,&nbsp;<span style="color: #ff3399">function</span>&nbsp;(result2)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;doThirdTask(result2,&nbsp;<span style="color: #ff3399">function</span>&nbsp;(result3)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span
										style="color: #ffd500"
										>"All&nbsp;tasks&nbsp;complete&nbsp;with&nbsp;final&nbsp;result:"</span
									>,&nbsp;result3);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">});</div>
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
			예시로 3중첩밖에 안되지만 이게 계속 중첩되는경우 가독성이 떨어지고 유지보수가 어려워진다. 우리는 이것을 <strong>콜백지옥</strong> 이라고 부른다.<br /><br />
			이런 콜백지옥을 해결할 수 있는것이 바로 <strong>Promise</strong>객체 이다.<br /><br />
			링크 - <router-link to="./promise">Promise</router-link>
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
