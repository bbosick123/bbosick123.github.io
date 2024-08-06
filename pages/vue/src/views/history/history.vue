<template>
	<div>
		<h4 class="contents__title">History</h4>
		<ContentItem date="2024년 08월 06일"> javascript - pagination, javascriptsample - pagination 업로드 </ContentItem>
		<ContentItem date="2024년 08월 06일">
			오늘은 페이지네이션을 한번 분석 해봤다. 내가 만든건 아니니 분석 이라고 하겠다. 챗GPT가 만들었고 나는 코드를 보며 아 이렇구나~~ 하며 해석을 한번 해봤다.
			어떤 원리인지는 알아야할 것 같아서 다 적어봤지만 실전에서는 원리 생각하며 쓰진 않을것 같다. 바로 컨트롤 + C,V 만 누를듯. <br /><br />근데 포스팅
			하다보니까 좀.. 거슬리는게 있다. 테이블이랑 페이지네이션 API를 불러오는데 약간의 시간이 걸린다. 그래서 딱 페이지에 들어가면 데이터를 불러오지 않는
			pagination안에 이전, 다음 버튼, 테이블에 thead 부분만 보이고, 로딩후 테이블 전체와 페이지네이션 숫자들이 나오는거다. <br /><br />
			그래서 다음 포스팅은 api 호출중에는 loading 화면을 불러오고, 호출이 완료된 후 실 화면을 보여주는걸 포스팅 하겠다. 검색해보니 엄청 간단했다. 이것도 콜백
			개념인것 같은데.. 일단 오늘은 여기까지 할까 한다. 지금 회사에 에어컨이 나오는건지 안나오는건지 너무 너무너무 너어어어무 너무 너무 덥다. 정신이
			나가버릴것만 같다.
		</ContentItem>
		<ContentItem date="2024년 08월 05일"> javascript sample - Board List 업로드, 사이드바 호버 -> 색 변경 css 수정 </ContentItem>
		<ContentItem date="2024년 08월 01일"> javascript - Promise, Async / Await, Api 업로드</ContentItem>
		<ContentItem date="2024년 08월 01일">
			오늘은 promise, async / await, api 를 공부 해봤다. 오늘만 한건 아니고 어제부터 promise랑 async쪽은 살짝 봤고, 오늘 다시 봤지만 완전히 이해는 못한 상태다.
			왜 비동기를 써서 비동기 에서 동기 처럼 작동하게 하는지 모르겠지만 일단 api 호출할땐 비동기 처리를 하고 promise 개념을 알아야하고 async랑 await를
			쓴다는거.<br />
			일단 여기서 내 지능으로 이론적으로 더 공부를 해봤자 효과가 미미할것 같은 기분이다. <br />그래서 일단 여기까지만 하고 샘플 만들어보거나 다른걸
			해야봐야겠다.</ContentItem
		>
		<ContentItem date="2024년 07월 31일"> javascript - 동기 / 비동기, Callback 업로드</ContentItem>
		<ContentItem date="2024년 07월 31일">
			7월29일에 블로그 페이지 뼈대 만들고 30일에 너무 허전해보여서 tools랑 뭐 몇가지 추가 했다. 그리고 이건 그냥.. 잡담? <br /><br />
			한달정도 구직활동을 해봤는데 html, css, javascript만 다룰줄 아는 퍼블리셔는 별로 메리트가 없었다. 지인분한테 물어봤을때도 본인 회사에는 퍼블리셔가
			그만두면 그자리는 퍼블리셔로 채우지않고 프론트앤드로 채운다는 얘기도 들었다. <br /><br />

			잡코리아 공고 올라온걸 봐도 "퍼블 + 디자인 / 퍼블 + 프론트앤드 / 퍼블 + 3d css" 이런식으로 퍼블능력은 기본이고 거기에 + @ 를 원하는 회사가 많았다.
			<br /><br />
			퍼블 하나만 원하는곳은 연봉도 적은 편 이었다. 한달정도 이력서도 넣고 면접보고 하면서 느꼈다. <br /><br />

			음.. 나는 일단 직업학교에서 6개월동안 디자인, 퍼블, 개발, 기획 다 찍먹 해보고, 첫직장에서 디자인 + 퍼블로 시작했다. 디자인 학원도 다녀보고 했지만 나는
			디자인에 소질이 없고 잘 맞지 않는것 같아서 일단 디자인은 하고싶지 않다. 그러면 이제 퍼블 + @ 할게 프론트앤드, 3d css 가 남는데 프론트엔드쪽으로 가고싶어서
			이 블로그를 만들었고 앞으로 공부를 더 할 계획이다. <br /><br />

			영어를 잘 못해서 구글번역기 돌려보고 검색해보는데 어려움이 있었는데 챗GPT가 나온 이후로 모르는게 있을때 대처하기가 엄청 쉬워졌다. 사실 이 블로그도 챗GPT가
			거의 다 만들어준거나 다름 없다. 이친구를 알기전엔 javascript 인터넷 강의에서 변수, 조건문, 반복문, 함수 까지 듣고 배열 객체 나올때부터 이해가 되지않아
			포기를 여러번 했다. 마치 학생들이 수학책 지수로그 부분만 까맣게 되있는 그런 느낌이다. <br /><br />

			챗GPT와 함께라면.. 혼자서도 뭐든 기본정도는 배울 수 있을 것 같아서 기부니가 좋다. 아무튼 검색해보니 프론트앤드 필수 스킬이
			<strong>"API 호출과 자바스크립트 비동기 처리 능력"</strong> 이라고 한다. 그래서 오늘부터는 이것에대해 공부해서 업로드 할 계획이다. <br /><br />

			지금까지 올려놓은 페이지들은 놀랍게도 블로그 형식이지만 게시판에서 글쓰기로 업로드하는게 아니라 한땀한땀 코딩 한거다. 그리고 index 페이지가 너무 심심한데
			다른 블로그들은 보통 게시글 썸네일이나 뭐 그런게 있더라. 게시판도 한번 만들어볼거다.
		</ContentItem>
		<ContentItem date="2024년 07월 30일"> vue - 404error / seo - google search console / tools - screenshot, code snippet 업로드 </ContentItem>
		<ContentItem date="2024년 07월 29일">
			블로그 오픈.
			<br /><br />
			vue - 404error , vite-plugin-page 업로드
		</ContentItem>
	</div>
</template>

<script>
import ContentItem from "@/components/ContentItem.vue";
export default {
	name: "History",
	components: {
		ContentItem,
	},
};
</script>

<style></style>
