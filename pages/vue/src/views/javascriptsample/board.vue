<template>
	<div>
		<h4 class="contents__title">Board List</h4>
		<ContentItem date="2024년 08월 05일">
			8월1일에 작성했던 api 불러오기를 이용해서 관리자페이지에 회원정보를 보여주는 리스트를 만들어보겠다.<br /><br />
			<a href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</a>
			에서 더미 데이터를 가져와서 BoardList 라는 변수에 배열로 넣는다.<br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #0086b3"></span><span style="color: #ff3399">&lt;</span>script<span style="color: #0086b3"></span
									><span style="color: #ff3399">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">export&nbsp;<span style="color: #ff3399">default</span>&nbsp;{&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">name</span>:&nbsp;<span style="color: #ffd500">"BoardList"</span>,&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;data()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BoardList:&nbsp;[],&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;mounted()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await&nbsp;this.fetchUserData();&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;methods:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;fetchUserData()&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">try</span>&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span
									>&nbsp;response&nbsp;<span style="color: #0086b3"></span><span style="color: #ff3399">=</span>&nbsp;await&nbsp;fetch(<span
										style="color: #ffd500"
										>"https://jsonplaceholder.typicode.com/users"</span
									>);&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span
									>&nbsp;(<span style="color: #0086b3"></span><span style="color: #ff3399">!</span>response.ok)&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;<span
										style="color: #ff3399"
										>new</span
									>&nbsp;<span style="color: #4be6fa">Error</span>(<span style="color: #ffd500">"네트워크&nbsp;응답에&nbsp;문제가&nbsp;있습니다."</span>);&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span
									>&nbsp;data&nbsp;<span style="color: #0086b3"></span><span style="color: #ff3399">=</span>&nbsp;await&nbsp;response.json();&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.BoardList&nbsp;<span
										style="color: #0086b3"
									></span
									><span style="color: #ff3399">=</span>&nbsp;data;&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">catch</span
									>&nbsp;(error)&nbsp;{&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(<span
										style="color: #ffd500"
										>"API&nbsp;호출&nbsp;중&nbsp;에러&nbsp;발생:"</span
									>,&nbsp;error);&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">};</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #0086b3"></span><span style="color: #ff3399">&lt;</span><span style="color: #0086b3"></span
									><span style="color: #ff3399">/</span>script<span style="color: #0086b3"></span><span style="color: #ff3399">&gt;</span>
								</div>
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
			<br />
			<br />
			tr을 v-for로 반복 해주고, BoardList에 있는 각 객체를 item 으로 가져온다. 이후에 가져온 데이터에 item.속성값 으로 td 안에 넣어주기만 하면 끝.
			<div
				class="colorscripter-code"
				style="color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto"
				v-pre
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">table</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">thead</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">tr</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>번호<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>id<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>이름<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>이메일<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>주소<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>전화번호<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span
									><span style="color: #ff3399">tr</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">thead</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">tbody</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">tr</span>&nbsp;<span
										style="color: #a8ff58"
										>v-for</span
									>=<span style="color: #ffd500">"item&nbsp;in&nbsp;BoardList"</span><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58"
										>:key</span
									>=<span style="color: #ffd500">"item.id"</span><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span>&nbsp;<span style="color: #a8ff58">class</span>=<span style="color: #ffd500">"text-center"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>{{&nbsp;item.id&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.username&nbsp;









									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.name&nbsp;









									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.email&nbsp;









									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.address.street&nbsp;}},&nbsp;{{&nbsp;item.address.city&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.phone&nbsp;









									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span
									><span style="color: #ff3399">tr</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">tbody</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">table</span
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
			샘플 페이지 링크 - <router-link to="../sample/SampleTable">Board List</router-link><br /><br />
			링크 넣어서 상세페이지로 이동하는건 다음에 해보겠다.
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "BoardList",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
