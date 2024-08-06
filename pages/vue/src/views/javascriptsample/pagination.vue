<template>
	<div>
		<h4 class="contents__title">Pagination</h4>
		<ContentItem date="2024년 08월 06일">
			불러오는 데이터가 많을경우, 한번에 모든 데이터를 다 불러오면 스크롤이 너무 많이 생겨서 보기 불편하다.<br />
			그래서 오늘은 한 페이지에 보여주는 데이터의 양을 컨트롤 할 수 있는 pagination을 만들어보겠다.<br /><br />
			페이지네이션을 만들떄 고려한것<br />
			<ul>
				<li>- 한 페이지에 보여줄 데이터의 수 - 5개</li>
				<li>- 페이지네이션의 수 - 10개</li>
				<li>- 이전, 다음 버튼</li>
			</ul>
			<br />
			그럼 출발~<br /><br />

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
								<div style="line-height: 130%">23</div>
								<div style="line-height: 130%">24</div>
								<div style="line-height: 130%">25</div>
								<div style="line-height: 130%">26</div>
								<div style="line-height: 130%">27</div>
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">template</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">div</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">div</span>&nbsp;<span
										style="color: #a8ff58"
										>class</span
									>=<span style="color: #ffd500">"wrap"</span><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">table</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">thead</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">tr</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>ID<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>Title<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>Body<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">th</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">tr</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">thead</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">tbody</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">tr</span>&nbsp;<span style="color: #a8ff58">v-for</span>=<span style="color: #ffd500"
										>"item&nbsp;in&nbsp;paginatedData"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">:key</span>=<span style="color: #ffd500">"item.id"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">td</span>&nbsp;<span style="color: #a8ff58">class</span>=<span style="color: #ffd500">"text-center"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>{{&nbsp;item.id&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.title&nbsp;




























									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #ff3399">td</span><span style="color: #f0f0f0">&gt;</span
									>{{&nbsp;item.body&nbsp;





























									}}<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">td</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">tr</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">tbody</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">table</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">div</span>&nbsp;<span style="color: #a8ff58">class</span>=<span style="color: #ffd500">"pagination"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58">class</span>=<span style="color: #ffd500"
										>"pagination--prev"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">@click</span>=<span style="color: #ffd500">"prevPageGroup"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">:disabled</span>=<span style="color: #ffd500"
										>"currentPageGroup&nbsp;===&nbsp;1"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>&amp;lt;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58">v-for</span>=<span style="color: #ffd500"
										>"page&nbsp;in&nbsp;visiblePages"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">:key</span>=<span style="color: #ffd500">"page"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">@click</span>=<span style="color: #ffd500">"changePage(page)"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">:class</span>=<span style="color: #ffd500"
										>"{&nbsp;active:&nbsp;currentPage&nbsp;===&nbsp;page&nbsp;}"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>{{&nbsp;page&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58">class</span>=<span style="color: #ffd500"
										>"pagination--next"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">@click</span>=<span style="color: #ffd500">"nextPageGroup"</span
									><span style="color: #a8ff58"></span>&nbsp;<span style="color: #a8ff58">:disabled</span>=<span style="color: #ffd500"
										>"currentPageGroup&nbsp;===&nbsp;totalPageGroups"</span
									><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>&amp;gt;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">div</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span
									><span style="color: #ff3399">div</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">div</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">template</span
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
			html 코드다. table 을 불러오고, pagination은<br /><br />
			이전(@click="prevPageGroup") / 현재 페이지가 1일경우 버튼을 disabled 로 변경<br />
			페이지이동버튼(@click="changePage(page)") / 현재 페이지 = page 인 경우 active 클래스 추가<br />
			다음(@click="nextPageGroup") / 현재 페이지가 = 전체 페이지 일 경우 버튼을 disabled 로 변경<br /><br />
			이렇게 3가지로 구성 했다. <br /><br /><br />
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
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">data()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table:&nbsp;[],</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentPage:&nbsp;<span style="color: #c10aff">1</span>,
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemsPerPage:&nbsp;<span style="color: #c10aff">5</span>,
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pagesPerGroup:&nbsp;<span style="color: #c10aff">10</span>,
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;};</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">},</div>
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
			<strong>table</strong> - api 호출 데이터를 담음. 데이터 수는 100개임.<br /><br />
			<strong>currentPage</strong> - 현재 페이지<br /><br />
			<strong>itemsPerPage</strong> - 페이지에 불러올 데이터 수<br /><br />
			<strong>pagePerGroup</strong> - 페이지네이션 수<br /><br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">computed:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;totalPages()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;Math.ceil(<span style="color: #4be6fa"
										>this</span
									>.table.<span style="color: #4be6fa">length</span>&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">/</span>&nbsp;<span
										style="color: #4be6fa"
										>this</span
									>.itemsPerPage);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;totalPageGroups()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;Math.ceil(<span style="color: #4be6fa"
										>this</span
									>.totalPages&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">/</span>&nbsp;<span style="color: #4be6fa">this</span
									>.pagesPerGroup);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;currentPageGroup()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;Math.ceil(<span style="color: #4be6fa"
										>this</span
									>.currentPage&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">/</span>&nbsp;<span style="color: #4be6fa">this</span
									>.pagesPerGroup);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;paginatedData()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;start&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;(<span style="color: #4be6fa">this</span>.currentPage&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">-</span>&nbsp;<span style="color: #c10aff">1</span>)&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">*</span>&nbsp;<span style="color: #4be6fa">this</span>.itemsPerPage;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;end&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;start&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">+</span>&nbsp;<span
										style="color: #4be6fa"
										>this</span
									>.itemsPerPage;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;<span style="color: #4be6fa">this</span
									>.table.slice(start,&nbsp;end);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;visiblePages()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;start&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;(<span style="color: #4be6fa">this</span>.currentPageGroup&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">-</span>&nbsp;<span style="color: #c10aff">1</span>)&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">*</span>&nbsp;<span style="color: #4be6fa">this</span>.pagesPerGroup&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">+</span>&nbsp;<span style="color: #c10aff">1</span>;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;end&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;Math.min(start&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">+</span>&nbsp;<span style="color: #4be6fa">this</span>.pagesPerGroup&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">-</span>&nbsp;<span style="color: #c10aff">1</span>,&nbsp;<span style="color: #4be6fa">this</span>.totalPages);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;pages&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;[];
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">for</span>&nbsp;(<span style="color: #ff3399">let</span
									>&nbsp;i&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span>&nbsp;start;&nbsp;i&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">&lt;</span><span style="color: #aaffaa"></span><span style="color: #ff3399">=</span>&nbsp;end;&nbsp;i<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">+</span><span style="color: #aaffaa"></span><span style="color: #ff3399">+</span>)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pages.push(i);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;pages;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">},</div>
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
			<strong>totalPages()</strong> - 전체 페이지 수<br /><br />
			<p class="text-indent">
				전체 데이터 수 나누기 한페이지에 보여줄 데이터 수<br />
				100 나누기 5 -> 전체 페이지 수는 20개
			</p>
			<br /><br />
			<strong>totalPageGroups()</strong> - 전체 페이지의 그룹 수<br /><br />
			<p class="text-indent">
				전체 페이지 수 나누기 페이지네이션 수<br />
				20 나누기 10 -> 전체 페이지 그룹 2개. <br />
				그룹1 -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10<br />
				그룹2 -> 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20<br /><br />

				페이지네이션을 5개씩 보여준다면 -> 전체 페이지 그룹 4개<br />
				그룹1 -> 1, 2, 3, 4, 5<br />
				그룹2 -> 6, 7, 8, 9, 10<br />
				그룹3 -> 11, 12, 13, 14, 15<br />
				그룹4 -> 16, 17, 18, 19, 20
			</p>
			<br /><br />
			<strong>currentPageGroup()</strong> - 현재 페이지의 그룹 추적<br /><br />
			<p class="text-indent">
				현재 페이지 나누기 페이지네이션 수<br />
				17페이지로 계산해보면,<br />
				17 나누기 10 -> 1.7이고 올림 해서 그룹2<br />
			</p>
			<br /><br />
			<strong>paginatedData()</strong> - 현재 페이지에 표시할 api 호출<br /><br />
			<p class="text-indent">
				start = (현제페이지 - 1) x 페이지에 불러올 데이터 수<br />
				end = start + 페이지에 불러올 데이터 수<br /><br />
				반환값 = table 배열에서 start 부터 end 전까지의 항목.<br /><br />
				현제 페이지가 17이라면<br />
				start = (16 - 1) x 5 = 75 <br />
				end = 75 + 5 = 80 <br />
				호출한 api의 75번쨰부터 79번째 배열 값을 불러옴.
			</p>
			<br /><br />
			<strong>visiblePages()</strong> - 페이지에 표시할 페이지네이션 숫자<br /><br />
			<p class="text-indent">
				start = (현재 페이지 그룹 - 1) x (페이지네이션 수 + 1)<br />
				end = (start + 현재 페이지 그룹 - 1), (전체 페이지 수) 중 작은값 반환<br />
				pages 에 start end 까지 1씩 더한 값을 배열로 넣어서 내보냄.<br /><br />
				현재 페이지가 17이라면<br />
				start = (2 - 1) x (10 + 1) = 11<br />
				end = (11 + 10 - 1 = 20), (50) => 20이 더 작음, 20를 반환<br />
				11부터 20까지 1씩더해서 배열 만들고 pages 에 넣어서 반환.<br />
				pages = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
			</p>
			<br /><br /><br />
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
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">methods:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;fetchUserData()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">try</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;response&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;fetch(<span style="color: #ffd500">"https://jsonplaceholder.typicode.com/posts"</span
									>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span>&nbsp;(<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">!</span>response.ok)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">throw</span
									>&nbsp;<span style="color: #ff3399">new</span>&nbsp;Error(<span style="color: #ffd500">"네트워크&nbsp;응답에&nbsp;문제가&nbsp;있습니다."</span
									>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;data&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;response.json();
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">this</span>.table&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;data;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.log(<span
										style="color: #4be6fa"
										>this</span
									>.table);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">catch</span>&nbsp;(error)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(<span
										style="color: #ffd500"
										>"API&nbsp;호출&nbsp;중&nbsp;에러&nbsp;발생:"</span
									>,&nbsp;error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;nextPageGroup()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span>&nbsp;(<span style="color: #4be6fa">this</span
									>.currentPageGroup&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">&lt;</span>&nbsp;<span style="color: #4be6fa"
										>this</span
									>.totalPageGroups)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">this</span>.currentPage&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;<span style="color: #4be6fa">this</span>.currentPageGroup&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">*</span>&nbsp;<span style="color: #4be6fa">this</span>.pagesPerGroup&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">+</span>&nbsp;<span style="color: #c10aff">1</span>;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;prevPageGroup()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span>&nbsp;(<span style="color: #4be6fa">this</span
									>.currentPageGroup&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;<span style="color: #c10aff">1</span
									>)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">this</span>.currentPage&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;(<span style="color: #4be6fa">this</span>.currentPageGroup&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">-</span>&nbsp;<span style="color: #c10aff">1</span>)&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">*</span>&nbsp;<span style="color: #4be6fa">this</span>.pagesPerGroup;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;changePage(page)&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">this</span>.currentPage&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;page;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">},</div>
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
			<strong>async fetchUserData()</strong> - api 호출<br /><br />
			<strong>nextPageGroup()</strong> - 다음 페이지 그룹의 첫번째 페이지 이동<br /><br />
			<p class="text-indent">현재 페이지 그룹이 전체 페이지 그룹 수보다 작으면, 현재 페이지 = 현재페이지그룹 x (페이지네이션수 + 1)</p>
			<br /><br />
			<strong>prevPageGroup()</strong> - 이전 페이지 그룹의 마지막 페이지로 이동<br /><br />
			<p class="text-indent">현재 페이지 그룹 1보다 크면, 현재 페이지 = (현재페이지그룹 - 1) x 페이지네이션수 + 1</p>
			<br /><br />
			<strong>changePage()</strong> - 현재 페이지를 page 값으로 변경.<br /><br /><br />
			여기까지. 이 예시는 페이지네이션 수를 10개 보여준다. 모바일일경우 10개로하면 디자인에 따라 깨지거나 안어울릴 수 있기 때문에 보통 페이지네이션 수 를 변경
			하는 경우가 있다.<br /><br />resize로 넓이를 감지해서 선언한 pagePerGroup 값만 변경 하면 되서 아주 간단하다. 이건 다음에 해보도록 하겠다.<br /><br />
			링크 - <router-link to="../sample/Pagination">Pagination</router-link>
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "Pagination",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
