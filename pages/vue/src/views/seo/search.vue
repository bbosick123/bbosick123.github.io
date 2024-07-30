<template>
	<div>
		<h4 class="contents__title">Google Search Console</h4>
		<ContentItem date="2004년 07월 30일">
			오늘은 구글 검색창에 내 포트폴리오와 블로그를 등록 해봤음. 첫 회사에 다닐때 많이 했던거라 익숙했다. 바로 구글에 웹마스터도구 라고 검색.<br /><br />
			<img src="/public/images/240730_search01.png" alt="" />
			<br /><br />
			옛날엔 웹마스터도구 였는데 지금은 서치콘솔로 바뀌어있었다. <br /><br />
			<img src="/public/images/240730_search02.png" alt="" />
			<br /><br />
			URL에 내 포트폴리오 주소 입력해주면, 소유권 확인해야한다고 나온다.<br /><br />
			<img src="/public/images/240730_search03.png" alt="" />
			<br /><br />
			여러가지 방법이 있는데 난 html 파일 다운받아서 ROOT 폴더에 넣는 방식을 선택했다.(제일 쉬움) <br /><br />
			<img src="/public/images/240730_search04.png" alt="" /><br /><br />
			루트에 파일 다운받아 넣고 완료 누르면 끝~. 바로 검색하면 나오는건 아니고 몇일 기다려야 됐던걸로 기억한다. <br /><br /><br /><br />
			그리고 내페이지 head 태그에 meta 태그를 넣어주면 된다.<br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #010101; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">name</span>=<span
										style="color: #df5000"
										>"title"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"이용식의&nbsp;포트폴리오"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">name</span>=<span
										style="color: #df5000"
										>"description"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"안녕하세요.&nbsp;퍼블리셔&nbsp;이용식의&nbsp;포트폴리오&nbsp;페이지&nbsp;입니다."</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">name</span>=<span
										style="color: #df5000"
										>"keywords"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"퍼블리셔,&nbsp;디자인,&nbsp;포트폴리오,&nbsp;뷰,&nbsp;리엑트,&nbsp;웹사이트,&nbsp;publisher,&nbsp;design,&nbsp;portfolio,&nbsp;vue,&nbsp;react,&nbsp;spa,&nbsp;website,&nbsp;블로그,&nbsp;blog"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">property</span>=<span
										style="color: #df5000"
										>"og:url"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"https://bbosick123.github.io/"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">property</span>=<span
										style="color: #df5000"
										>"og:type"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000">"website"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">property</span>=<span
										style="color: #df5000"
										>"og:title"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"이용식의&nbsp;포트폴리오"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #010101">&lt;</span><span style="color: #066de2">meta</span>&nbsp;<span style="color: #0a9989">property</span>=<span
										style="color: #df5000"
										>"og:description"</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">content</span>=<span style="color: #df5000"
										>"퍼블리셔&nbsp;이용식의&nbsp;포트폴리오&nbsp;페이지&nbsp;입니다."</span
									><span style="color: #0a9989"></span>&nbsp;<span style="color: #0a9989">/</span><span style="color: #010101">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
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
			<br /><br />
			name="title" - 페이지 타이틀 <br />
			name="description" - 페이지 설명 <br />
			name="keywords" - 페이지 키워드 인데 요즘엔 검색엔진들이 키워드는 무시한다고한다. 악용 사례 때문이라고 함. <br /><br />

			아래 property="og:~" 은 카톡에 내 url 입력했을때 나오는거라고 한다.<br /><br />
			<img src="/public/images/240730_search05.png" alt="" /><br /><br />
			그래서 카톡에 보내봄.
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "SeoSearch",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
