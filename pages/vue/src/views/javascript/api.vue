<template>
	<div>
		<h4 class="contents__title">Api 호출</h4>
		<ContentItem date="2024년 08월 01일">
			특정 서버에 데이터를 요청하고 받아보겠다.<br />
			더미데이터를 제공하는 https://jsonplaceholder.typicode.com에서 가져왔다.<br /><br />
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
							</div>
						</td>
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #999999">//&nbsp;호출할&nbsp;api를&nbsp;담을&nbsp;변수</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">let</span>&nbsp;user&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span>&nbsp;{};
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #999999"
										>//&nbsp;비동기&nbsp;함수(async&nbsp;function)&nbsp;정의:&nbsp;API에서&nbsp;데이터를&nbsp;가져오기&nbsp;위한&nbsp;함수</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									async&nbsp;<span style="color: #ff3399">function</span>&nbsp;fetchUserData()&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">try</span>&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;fetch()&nbsp;함수는&nbsp;네트워크&nbsp;요청을&nbsp;보내고&nbsp;응답을&nbsp;기다림</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;이&nbsp;예제에서는&nbsp;JSONPlaceholder&nbsp;API의&nbsp;사용자&nbsp;정보를&nbsp;가져옴</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;response&nbsp;<span
										style="color: #aaffaa"
									></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;fetch(<span style="color: #ffd500">"https://jsonplaceholder.typicode.com/users/1"</span
									>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;응답이&nbsp;성공적인지&nbsp;확인합니다.&nbsp;응답&nbsp;코드가&nbsp;200번대가&nbsp;아니면&nbsp;에러를&nbsp;발생</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">if</span>&nbsp;(<span style="color: #aaffaa"></span
									><span style="color: #ff3399">!</span>response.ok)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">throw</span>&nbsp;<span
										style="color: #ff3399"
										>new</span
									>&nbsp;Error(<span style="color: #ffd500">"네트워크&nbsp;응답에&nbsp;문제가&nbsp;있습니다."</span>);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999">//&nbsp;응답을&nbsp;JSON&nbsp;형식으로&nbsp;변환</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">const</span>&nbsp;data&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;await&nbsp;response.json();
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;처음&nbsp;지정했던&nbsp;변수에&nbsp;불러온&nbsp;데이터를&nbsp;넣음.</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user&nbsp;<span style="color: #aaffaa"></span><span style="color: #ff3399">=</span>&nbsp;data;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span style="color: #ff3399">catch</span>&nbsp;(error)&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999"
										>//&nbsp;API&nbsp;호출&nbsp;중에&nbsp;에러가&nbsp;발생하면&nbsp;콘솔에&nbsp;에러를&nbsp;출력</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">console</span>.error(<span style="color: #ffd500"
										>"API&nbsp;호출&nbsp;중&nbsp;에러&nbsp;발생:"</span
									>,&nbsp;error);
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">fetchUserData();</div>
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
			user 라는 변수를 지정. (불러온 api를 담을 그릇)<br />
			먼저, 함수앞에 async로 비동기 처리를 하고, try catch 로 api 호출,실패로 구분한다.<br />
			fetch() 함수는 지정된 URL로 네트워크 요청을 보낸다. 이 함수는 promise를 반환한다. <br />
			response.ok 에서 response는 fetch api 에서 반환되는 응답 객체이다. ok는 응답이 성공적인지 여부를 나타내는 boolean 속성이고 true, false 값을 가진다.<br />
			response.json() -> 응답 형식을 json 형태로 변환한다. <br />
			처음 지정한 user에 데이터를 넣음.<br /><br />

			<img src="/images/240801_api.png" /><br /><br />
			콘솔창에 user 를 찍으면 아까 불러온 데이터들이 나온다. user.phone 도 잘 나오는 모습.
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "Api",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
