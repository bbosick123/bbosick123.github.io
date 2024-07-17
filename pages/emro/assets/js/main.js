AOS.init();

var ulItems = document.getElementById("VisualList").querySelectorAll("li");
var olItems = document.getElementById("VisualPagination").querySelectorAll("li");
var mainVisual = document.getElementById("mainVisual");
var currentIndex = 0;
var isMainVisualActive = false; // mainVisual의 활성 상태를 나타내는 변수

// 4초마다 active 클래스를 번갈아가면서 추가하는 함수
function toggleActiveClass() {
	removeActiveClass(ulItems);
	removeActiveClass(olItems);

	ulItems[currentIndex].classList.add("active");
	olItems[currentIndex].classList.add("active");

	// mainVisual의 활성 상태를 토글
	isMainVisualActive = !isMainVisualActive;

	if (isMainVisualActive) {
		mainVisual.classList.add("active");
	} else {
		mainVisual.classList.remove("active");
	}

	currentIndex = (currentIndex + 1) % ulItems.length; // 다음 인덱스로 이동

	switch (
		currentIndex // bg 변경
	) {
		case 0:
			mainVisual.classList.add("bg01");
			mainVisual.classList.remove("bg02", "bg03");
			break;
		case 1:
			mainVisual.classList.add("bg02");
			mainVisual.classList.remove("bg01", "bg03");
			break;
		case 2:
			mainVisual.classList.add("bg03");
			mainVisual.classList.remove("bg01", "bg02");
			break;
		default:
			break;
	}
}

// 모든 li 요소에서 active 클래스 제거하는 함수
function removeActiveClass(items) {
	items.forEach(function (item) {
		item.classList.remove("active");
	});
}

// 초기 실행
toggleActiveClass();

// 4초마다 toggleActiveClass 함수 호출
setInterval(toggleActiveClass, 4000);

///////////////////////////////////////////////////////////////////////////////////////

// 대상 요소를 선택합니다.
const mainHeader = document.getElementById("mainHeader");

// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		// 스크롤 위치가 맨 위가 아니면 active 클래스를 추가합니다.
		mainHeader.classList.add("active");
	} else {
		// 스크롤 위치가 맨 위이면 active 클래스를 제거합니다.
		mainHeader.classList.remove("active");
	}
});

// main-header__gnb-button 요소를 선택합니다.
const gnbButton = document.querySelector(".main-header__gnb-button");

// 클릭 이벤트 리스너를 추가합니다.
gnbButton.addEventListener("click", () => {
	// 클릭할 때마다 active 클래스를 토글합니다.
	gnbButton.classList.toggle("active");
});
