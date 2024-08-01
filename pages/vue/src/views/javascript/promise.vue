<template>
	<div>
		<h4 class="contents__title">Promise</h4>
		<ContentItem date="2024년 08월 01일">
			Promise는 Callback과 관련이 있다. Callback 개념부터 알고 봐야함.<br /><br />
			링크 - <router-link to="./callback">Callback</router-link><br /><br />

			Promise는 작업의 결과를 나타내는 자바스크립트 객체이다. 작업이 성공했는지, 실패했는지에 따라 다른 처리를 할 수 있고, 비동기 처리에 사용되기위해
			만들어졌다. 아래 예제를 보면서 알아보자.<br /><br />

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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;promise&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span style="color: #4be6fa">Promise</span
									>((resolve,&nbsp;reject)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{&nbsp;&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">let</span>&nbsp;success&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;<span style="color: #ff3399">true</span>;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span>&nbsp;(success)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(<span style="color: #ffd500">"작업&nbsp;성공!"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">else</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reject(<span style="color: #ffd500">"작업&nbsp;실패!"</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
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
			Promise 생성자를 사용하고, resolve 와 reject를 인자로 가진다. 작업이 성공하면 resolve를 호출하고, 작업이 실패하면 reject를 호출한다. 예제는 success 가
			true 이기 때문에 resolve를 호출 할 것이다.<br /><br /><br /><br />
			Promise 로 성공인지 실패인지 판단 했고, 이제 이걸 써먹어보자. Promise 객체의 메서드인 then()과 catch() 예제이다.<br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									promise.then((result)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(result);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									}).<span style="color: #ff3399">catch</span>((error)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">});</div>
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
			then()은 resolve(작업 성공) 후 호출될 콜백 함수를 등록한다.<br />
			catch()는 reject(작업 실패) 후 호출될 콜백 함수를 등록한다.<br />
			인자인 result 와 error 로 가져오는것은 resolve와 reject 함수가 호출될때 전달되는 값이다.<br />
			위 예시에는 작업이 성공했으니까 마지막에 console.log("작업 성공!") 을 실행한다. <br /><br />

			위에 then(), catch() 코드를 보면 체이닝이 되어있는걸 볼 수 있다.<br />
			콜백 함수를 호출하는데 체이닝이 가능하다. 이걸로 우리는 콜백지옥 에서 탈출 할 수 있다.<br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									doFirstTask(<span style="color: #ff3399">function</span>&nbsp;(result1)&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;doSecondTask(result1,&nbsp;<span style="color: #ff3399">function</span>&nbsp;(result2)&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;doThirdTask(result2,&nbsp;<span style="color: #ff3399">function</span
									>&nbsp;(result3)&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span
										style="color: #ffd500"
										>"All&nbsp;tasks&nbsp;complete&nbsp;with&nbsp;final&nbsp;result:"</span
									>,&nbsp;result3);&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">});</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
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
			위 코드를 promise를 이용해 아래처럼 가독성 있게 바꿀 수 있다.<br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">doFirstTask()</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;.then((result1)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;doSecondTask(result1);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;})</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;.then((result2)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;doThirdTask(result2);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;})</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;.then((result3)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span style="color: #ffd500"
										>"All&nbsp;tasks&nbsp;complete&nbsp;with&nbsp;final&nbsp;result:"</span
									>,&nbsp;result3);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
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
			이런 promise를 더 간편하고 직관적으로 사용할수 있는 문법이 있다. <strong>async</strong>와 <strong>await</strong>라는 문법이다.<br /><br />
			링크 - <router-link to="./asyncawait">async / await</router-link><br /><br />
			promise를 더 간단하고 직관적으로 사용할수 있으면 promise는 필요없을까? promise의 개념에 대해 이해하는것이 중요하고, <strong>병렬 실행</strong> 하는 경우
			promise를 유용하게 사용 할 수 있다. promise의 매서드 <strong>all()</strong>, <strong>race()</strong>, <strong>allSettled()</strong>를 간단하게
			알아보자.<br /><br />

			먼저 비동기 함수 3개를 선언 해준다.<br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;task1&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;()&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span
										style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;resolve(<span
										style="color: #ffd500"
										>"Task&nbsp;1&nbsp;완료"</span
									>),&nbsp;<span style="color: #c10aff">1000</span>));
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;task2&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;()&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span
										style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;resolve(<span
										style="color: #ffd500"
										>"Task&nbsp;2&nbsp;완료"</span
									>),&nbsp;<span style="color: #c10aff">2000</span>));
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;task3&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;()&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #ff3399">new</span>&nbsp;<span
										style="color: #4be6fa"
										>Promise</span
									>((resolve)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;resolve(<span
										style="color: #ffd500"
										>"Task&nbsp;3&nbsp;완료"</span
									>),&nbsp;<span style="color: #c10aff">3000</span>));
								</div>
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
			<br /><br />
			<strong>promise.all()</strong> - 비동기작업을 실행하고 모두 실행되면 결과를 배열로 반환한다.<br />
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
									async&nbsp;<span style="color: #ff3399">function</span>&nbsp;runTasksInParallel()&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;results&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;<span style="color: #4be6fa">Promise</span>.all([task1(),&nbsp;task2(),&nbsp;task3()]);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(results); &nbsp;<span style="color: #999999"
										>//&nbsp;// ["Task 1 완료", "Task 2 완료", "Task 3 완료"]</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
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
			<strong>promise.allSettled()</strong> - 비동기작업을 실행하고 모두 실행되면 결과를 객체의 형태로 반환한다.<br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #4be6fa">Promise</span>.allSettled([task1(),&nbsp;task2(),&nbsp;task3()]).then((results)&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(results);</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;<span style="color: #999999">//&nbsp;[</span></div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;&nbsp;&nbsp;{&nbsp;status:&nbsp;"fulfilled",&nbsp;value:&nbsp;"Task&nbsp;1&nbsp;완료"&nbsp;},</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;&nbsp;&nbsp;{&nbsp;status:&nbsp;"fulfilled",&nbsp;value:&nbsp;"Task&nbsp;2&nbsp;완료"&nbsp;},</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;&nbsp;&nbsp;{&nbsp;status:&nbsp;"rejected",&nbsp;reason:&nbsp;"Task&nbsp;3&nbsp;실패"&nbsp;}</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;<span style="color: #999999">//&nbsp;]</span></div>
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
			<strong>promise.race()</strong> - 가장 먼저 완료된 작업의 결과를 반환한다.<br />

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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #4be6fa">Promise</span>.race([task1(),&nbsp;task2(),&nbsp;task3()])
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;.then((result)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span
									><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(result);&nbsp;<span style="color: #999999"
										>//&nbsp;"Task&nbsp;1&nbsp;완료"</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;})</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;.<span style="color: #ff3399">catch</span>((error)&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;});</div>
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
