<template>
	<div>
		<h4 class="contents__title">404error</h4>
		<ContentItem date="2004년 07월 29일">
			VUE로 만든 페이지에서 사용자가 새로고침이나 url을 직접 입력해서 접속할때 페이지 연결이 안되는 현상이 있음. <br /><br />
			SPA 페이지들에 공통적으로 일어난다고 하고, 검색해보니 쉽게 해결방법을 찾을 수 있었음. <br /><br />
			보통 백엔드에서 index.html 로 강제로 보낸다고 함. 프론트에서도 할수있긴 한데 좀 애매하다고 하는데 왜인진 모르겠음.<br /><br />
			검색해보니 404페이지를 만들고, 404페이지에서 index.html 으로 보내면 된다는데, 하다가 잘 안되가지구 일단 보류한 상태.
		</ContentItem>
		<ContentItem date="2004년 07월 30일">
			404.html 파일 넣은 위치가 잘못된거였음.<br />
			<img src="/images/240730_404.png" alt="" /><br />
			내 폴더 구조가 저렇게 되있고 ROOT 에 있는 index.html 은 내 포트폴리오 홈페이지이고, 이 블로그는 vue 폴더에서 작업해서 build 후 blog 폴더로 옴겨서 깃에
			푸시하는 방식임. <br /><br />

			근데 내가 404.html 파일을 vue 폴더에 집어넣어서 깃이 제공하는 404페이지만 나왔던것. 404.html 을 ROOT로 옴겨서 내가 만든 404.html 페이지로 이동함.<br /><br />
			새로고침이나 url 직접 입력했을때 index.html 페이지로 리다이렉트 하는걸로 변경 완료. 아래는 404.html 코드<br /><br />
			<div
				class="colorscripter-code"
				style="color: #010101; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto"
			>
				<table
					class="colorscripter-code-table"
					style="margin: 0; padding: 0; border: none; background-color: #fafafa; border-radius: 4px"
					cellspacing="0"
					cellpadding="0"
				>
					<tr>
						<td style="padding: 6px; border-right: 2px solid #e5e5e5">
							<div
								style="
									margin: 0;
									padding: 0;
									word-break: normal;
									text-align: right;
									color: #666;
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #010101; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">!DOCTYPE</span>&nbsp;<span style="color: #0a9989">html</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">html</span>&nbsp;<span style="color: #0a9989">lang</span>=<span
										style="color: #df5000"
										>"ko"</span
									><span style="color: #0a9989"></span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">head</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span
										style="color: #0a9989"
										>charset</span
									>=<span style="color: #df5000">"UTF-8"</span><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span
										style="color: #0a9989"
										>name</span
									>=<span style="color: #df5000">"viewport"</span><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span
										style="color: #df5000"
										>"width=device-width,&nbsp;initial-scale=1.0"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">title</span
									><span style="color: #010101">&gt;</span>Page&nbsp;not&nbsp;found<span style="color: #010101">&lt;</span><span style="color: #010101">/</span
									><span style="color: #066de2">title</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">script</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;GitHub&nbsp;Pages에서&nbsp;SPA&nbsp;라우팅&nbsp;문제를&nbsp;해결하기&nbsp;위한&nbsp;스크립트</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a71d5d">const</span>&nbsp;redirectPath&nbsp;<span
										style="color: #ff3399"
									></span
									><span style="color: #a71d5d">=</span>&nbsp;<span style="color: #066de2">window</span>.<span style="color: #066de2">location</span
									>.origin&nbsp;<span style="color: #ff3399"></span><span style="color: #a71d5d">+</span>&nbsp;<span style="color: #63a35c">"/pages/blog/"</span
									>;&nbsp;<span style="color: #999999">//&nbsp;루트&nbsp;경로로&nbsp;리디렉션</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #066de2">window</span>.<span
										style="color: #066de2"
										>location</span
									>.replace(redirectPath);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #010101">/</span
									><span style="color: #066de2">script</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #010101">/</span><span style="color: #066de2">head</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">body</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">h1</span
									><span style="color: #010101">&gt;</span>Page&nbsp;not&nbsp;found<span style="color: #010101">&lt;</span><span style="color: #010101">/</span
									><span style="color: #066de2">h1</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #066de2">p</span
									><span style="color: #010101">&gt;</span>Redirecting&nbsp;to&nbsp;the&nbsp;app...<span style="color: #010101">&lt;</span
									><span style="color: #010101">/</span><span style="color: #066de2">p</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #010101">&lt;</span><span style="color: #010101">/</span><span style="color: #066de2">body</span
									><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #010101">/</span><span style="color: #066de2">html</span
									><span style="color: #010101">&gt;</span>
								</div>
							</div>
							<div style="text-align: right; margin-top: -13px; margin-right: 5px; font-size: 9px; font-style: italic">
								<a href="http://colorscripter.com/info#e" target="_blank" style="color: #e5e5e5; text-decoration: none">Colored by Color Scripter</a>
							</div>
						</td>
						<td style="vertical-align: bottom; padding: 0 2px 4px 0">
							<a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration: none; color: white"
								><span style="font-size: 9px; word-break: normal; background-color: #e5e5e5; color: white; border-radius: 10px; padding: 1px">cs</span></a
							>
						</td>
					</tr>
				</table>
			</div>
		</ContentItem>
		<!-- <div class="contents__item">
			<div class="contents__date">2004년 07월 29일</div>
			VUE로 만든 페이지에서 사용자가 새로고침이나 url을 직접 입력해서 접속할때 페이지 연결이 안되는 현상이 있음. <br /><br />
			SPA 페이지들에 공통적으로 일어난다고 하고, 검색해보니 쉽게 해결방법을 찾을 수 있었음. <br /><br />
			보통 백엔드에서 index.html 로 강제로 보낸다고 함. 프론트에서도 할수있긴 한데 좀 애매하다고 하는데 왜인진 모르겠음.<br /><br />
			검색해보니 404페이지를 만들고, 404페이지에서 index.html 으로 보내면 된다는데, 하다가 잘 안되가지구 일단 보류한 상태.
		</div>
		<div class="contents__item">
			<div class="contents__date">2004년 07월 30일</div>
			
		</div> -->
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "404",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
