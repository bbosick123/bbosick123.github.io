<template>
	<div>
		<h4 class="contents__title">Vuex</h4>
		<ContentItem date="2024년 08월 12일">
			Vuex는 vue.js에서 상태관리(<router-link to="./state">링크</router-link>)를 편하게 할 수 있게 도와주는 라이브러리이다. <br />
			여러 컴포넌트 간의 데이터 전달과 이벤트 통신을 단일 저장소에서 관리하여 체계적으로 관리 할 수 있게 해준다.<br /><br />

			설치부터 해보자.<br />
			vue2일경우 npm install vuex --save <br />
			vue3일 경우 npm install vuex@next --save<br />
			로 설치 하라고 한다. 본인의 vue 버전을 잘 확인해서 설치 하도록 하자. 여기선 vue3으로 사용 해보겠다.<br /><br />

			설치후 store 폴더를 만들어주고 index.js 파일을 생성한다.<br />
			<img src="/images/240809_vue.png" alt="" /><br /><br /><br />

			아래 store/index.js 에 작성한 기본적인 vuex 사용 예시를 보면서 속성이 어떤 기능을 하는지 알아보자.<br />
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
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">import</span>&nbsp;{&nbsp;createStore&nbsp;}&nbsp;<span style="color: #ff3399">from</span>&nbsp;<span
										style="color: #ffd500"
										>'vuex'</span
									>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">const</span>&nbsp;store&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span>&nbsp;createStore({
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;state()&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count:&nbsp;<span style="color: #c10aff">0</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;getters:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;doubleCount(state)&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399">return</span>&nbsp;state.count&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">*</span>&nbsp;<span style="color: #c10aff">2</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;mutations:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;increment(state)&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count<span style="color: #aaffaa"></span><span style="color: #ff3399">+</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">+</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;decrement(state)&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.count<span style="color: #aaffaa"></span><span style="color: #ff3399">-</span
									><span style="color: #aaffaa"></span><span style="color: #ff3399">-</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;actions:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;incrementAsync({&nbsp;commit&nbsp;})&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(<span style="color: #ffd500">'increment'</span>)
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>)
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;decrementAsync({&nbsp;commit&nbsp;})&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa">setTimeout</span>(()&nbsp;<span style="color: #aaffaa"></span
									><span style="color: #ff3399">=</span><span style="color: #aaffaa"></span><span style="color: #ff3399">&gt;</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(<span style="color: #ffd500">'decrement'</span>)
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span style="color: #c10aff">1000</span>)
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">})</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">export</span>&nbsp;<span style="color: #ff3399">default</span>&nbsp;store
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
			<strong>State</strong> : 상태 데이터<br /><br />
			<strong>Getters</strong> : <strong>State</strong>를 기반으로 계산된 값을 반환<br /><br />
			<strong>Mutations</strong> : <strong>state</strong>를 변경함. <strong>동기적</strong>으로 실행되고, <strong>commit</strong> 메서드를 통해 호출됨.<br /><br />
			<strong>Actions</strong> : 내부에서 수행되는 비동기 작업이 완료된 후, <strong>Mutations</strong>를 <strong>commit</strong> 하여 state를 변경함.<br /><br /><br />

			스토어에 있는 상태를 사용해보자.
			<div
				v-pre
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
						<td style="padding: 6px 0; text-align: left">
							<div
								style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%"
							>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">template</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">div</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">p</span
									><span style="color: #f0f0f0">&gt;</span>Count:&nbsp;{{&nbsp;count&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">p</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">p</span
									><span style="color: #f0f0f0">&gt;</span>Double&nbsp;Count:&nbsp;{{&nbsp;doubleCount&nbsp;}}<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">p</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58"
										>@click</span
									>=<span style="color: #ffd500">"increment"</span><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>Increment<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58"
										>@click</span
									>=<span style="color: #ffd500">"decrement"</span><span style="color: #a8ff58"></span><span style="color: #f0f0f0">&gt;</span>Decrement<span
										style="color: #f0f0f0"
										>&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58"
										>@click</span
									>=<span style="color: #ffd500">"incrementAsync"</span><span style="color: #a8ff58"></span
									><span style="color: #f0f0f0">&gt;</span>Increment&nbsp;After&nbsp;1&nbsp;Second<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">button</span>&nbsp;<span style="color: #a8ff58"
										>@click</span
									>=<span style="color: #ffd500">"decrementAsync"</span><span style="color: #a8ff58"></span
									><span style="color: #f0f0f0">&gt;</span>Decrement&nbsp;After&nbsp;1&nbsp;Second<span style="color: #f0f0f0">&lt;</span
									><span style="color: #f0f0f0">/</span><span style="color: #ff3399">button</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">div</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #f0f0f0">/</span><span style="color: #ff3399">template</span
									><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #f0f0f0">&lt;</span><span style="color: #ff3399">script</span><span style="color: #f0f0f0">&gt;</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">import</span>&nbsp;{&nbsp;mapState,&nbsp;mapGetters,&nbsp;mapMutations,&nbsp;mapActions&nbsp;}&nbsp;<span
										style="color: #ff3399"
										>from</span
									>&nbsp;<span style="color: #ffd500">'vuex'</span>
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									<span style="color: #ff3399">export</span>&nbsp;<span style="color: #ff3399">default</span>&nbsp;{
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;computed:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;...mapState([<span style="color: #ffd500">'count'</span
									>]),&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;...mapGetters([<span style="color: #ffd500">'doubleCount'</span>])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;},</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;methods:&nbsp;{</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;...mapMutations([<span style="color: #ffd500">'increment'</span>,&nbsp;<span style="color: #ffd500">'decrement'</span
									>]),&nbsp;&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">
									&nbsp;&nbsp;&nbsp;&nbsp;...mapActions([<span style="color: #ffd500">'incrementAsync'</span>,&nbsp;<span style="color: #ffd500"
										>'decrementAsync'</span
									>])&nbsp;
								</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">&nbsp;&nbsp;}</div>
								<div style="padding: 0 6px; white-space: pre; line-height: 130%">}</div>
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
			부모페이지에서 가져올땐 앞에 map을 붙여서 import 하고, 스프레드연산자(...)로 불러오면 된다. <br />
			mapState, mapGetters 는 computed에, mapMutations, mapActions는 methods에 불러와서 사용하면 끝.<br />
			이게 기본적인 사용법이고, <strong>Modudules라는 속성이 있는데, 이건 다음에 포스팅 하겠다.</strong>
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "vuex",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
