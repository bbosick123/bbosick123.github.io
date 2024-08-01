<template>
	<div>
		<h4 class="contents__title">Async / Await</h4>
		<ContentItem date="2024년 08월 1일">
			함수앞에 async를 붙이면 그 함수는 promise를 반환한다.<br />
			await는 async 함수 내에서 사용되고, promise가 수행된후 값을 반환하고, 만약 promise가 거부되면 거부된 이유를 내보낸다.<br /><br />

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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #999999">//&nbsp;비동기&nbsp;작업을&nbsp;수행하는&nbsp;함수</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #ff3399">function</span>&nbsp;fetchData()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span style="color: #4be6fa"
										>Promise</span
									>((resolve,&nbsp;reject)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(<span style="color: #ffd500">"데이터&nbsp;가져오기&nbsp;완료"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">2000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #999999">//&nbsp;async/await을&nbsp;사용한&nbsp;비동기&nbsp;함수</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									async&nbsp;<span style="color: #ff3399">function</span>&nbsp;getData()&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;<span style="color: #ff3399">try</span>&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;result&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;fetchData();
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(result);&nbsp;<span style="color: #999999"
										>//&nbsp;"데이터&nbsp;가져오기&nbsp;완료"&nbsp;출력</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">catch</span>&nbsp;(error)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(<span style="color: #ffd500">"에러&nbsp;발생:"</span>,&nbsp;error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">getData();</div>
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
			함수가 여러개일경우, promise에서 체이닝 하는것보다 더 가독성 좋게 정리 할 수 있다.<br /><br />
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
								<div style="line-height: 130%">29</div>
								<div style="line-height: 130%">30</div>
								<div style="line-height: 130%">31</div>
								<div style="line-height: 130%">32</div>
								<div style="line-height: 130%">33</div>
								<div style="line-height: 130%">34</div>
								<div style="line-height: 130%">35</div>
								<div style="line-height: 130%">36</div>
								<div style="line-height: 130%">37</div>
								<div style="line-height: 130%">38</div>
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #999999">//&nbsp;비동기&nbsp;작업&nbsp;함수들</span></div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%"><span style="color: #ff3399">function</span>&nbsp;doFirstTask()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(<span style="color: #ffd500">"첫&nbsp;번째&nbsp;작업&nbsp;완료"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">function</span>&nbsp;doSecondTask(result1)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(`${result1}&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">-</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;두&nbsp;번째&nbsp;작업&nbsp;완료`);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">function</span>&nbsp;doThirdTask(result2)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(`${result2}&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">-</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;세&nbsp;번째&nbsp;작업&nbsp;완료`);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #999999">//&nbsp;async/await을&nbsp;사용한&nbsp;함수</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									async&nbsp;<span style="color: #ff3399">function</span>&nbsp;performTasks()&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;<span style="color: #ff3399">try</span>&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;result1&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;doFirstTask();
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;result2&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;doSecondTask(result1);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;result3&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;doThirdTask(result2);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500"
										>"모든&nbsp;작업&nbsp;완료:"</span
									>,&nbsp;result3);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">catch</span>&nbsp;(error)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(<span style="color: #ffd500">"에러&nbsp;발생:"</span
									>,&nbsp;error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">performTasks();</div>
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
			</div> </ContentItem
		><br />
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
