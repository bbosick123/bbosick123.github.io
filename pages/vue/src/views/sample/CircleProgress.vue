<template>
	<div class="wrap">
		<div class="flex">
			<div class="progress-container" v-for="(percent, index) in percents" :key="index" :data-percent="percent">
				<svg class="progress-circle" width="200" height="200" viewBox="0 0 200 200">
					<!-- 배경 원 -->
					<circle class="bg" cx="100" cy="100" r="90"></circle>
					<!-- 진행 상태 원 -->
					<circle class="progress" cx="100" cy="100" r="90"></circle>
				</svg>
				<!-- 진행 상태를 표시하는 텍스트 -->
				<div class="progress-text">0%</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from "vue";

export default {
	name: "CircleProgress2",
	data() {
		return {
			percents: [70, 85, 50],
		};
	},
	methods: {
		setProgress(progressContainer) {
			const percent = progressContainer.getAttribute("data-percent"); // HTML 속성에서 목표 퍼센트 값 가져오기
			const progressCircle = progressContainer.querySelector(".progress"); // 진행 상태 원 선택
			const progressText = progressContainer.querySelector(".progress-text"); // 진행 상태 텍스트 선택
			const radius = progressCircle.r.baseVal.value; // 원의 반지름 값 가져오기
			const circumference = 2 * Math.PI * radius; // 원의 둘레 계산
			const offset = circumference - (percent / 100) * circumference; // 목표 퍼센트에 따른 원의 진행 상태를 계산하여 offset 설정

			// 애니메이션과 텍스트 업데이트
			setTimeout(() => {
				// 애니메이션 지연 후 진행 상태 원의 strokeDashoffset 값을 업데이트하여 진행 상태 시각화
				progressCircle.style.strokeDashoffset = offset;

				// 텍스트를 0부터 목표 퍼센트까지 점진적으로 증가시키는 애니메이션
				let currentProgress = 0; // 현재 진행 상태 초기화
				const interval = setInterval(() => {
					if (currentProgress <= percent) {
						// 목표 퍼센트까지 증가
						progressText.textContent = `${currentProgress}%`; // 텍스트 업데이트
						currentProgress++; // 현재 진행 상태 증가
					} else {
						clearInterval(interval); // 목표 퍼센트에 도달하면 interval 중지
					}
				}, 10); // 텍스트를 매 10ms마다 업데이트
			}, 100); // 애니메이션 효과를 위한 약간의 지연
		},
	},
	mounted() {
		this.$nextTick(() => {
			document.querySelectorAll(".progress-container").forEach(this.setProgress);
		});
	},
};
</script>

<style lang="scss" scoped>
.wrap {
	display: flex; /* 컨텐츠를 중앙에 배치 */
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	background-color: #f0f0f0; /* 배경색 설정 */
	height: 100vh;
	margin: 0; /* 기본 여백 제거 */
	flex-wrap: wrap; /* 화면에 여유 공간이 생기면 아이템을 줄 바꿈 */
	.flex {
		display: flex;
		flex-wrap: wrap;
	}
}

.progress-container {
	position: relative; /* 자식 요소의 위치를 기준으로 배치 */
	width: 200px; /* 진행 바의 너비 */
	height: 200px; /* 진행 바의 높이 */
	margin: 20px; /* 진행 바 사이에 간격 추가 */
}

.progress-circle {
	transform: rotate(-90deg); /* 원을 시계 반대 방향으로 90도 회전 */
}

.bg {
	fill: none; /* 원의 내부 색상 없음 */
	stroke: #e6e6e6; /* 배경 원의 색상 */
	stroke-width: 20; /* 원의 외곽선 두께 */
}

.progress {
	fill: none; /* 원의 내부 색상 없음 */
	stroke: #3498db; /* 진행 상태 원의 색상 */
	stroke-width: 20; /* 진행 상태 원의 외곽선 두께 */
	stroke-dasharray: 565.48; /* 원 둘레의 길이: 2 * Math.PI * 90 */
	stroke-dashoffset: 565.48; /* 처음에 원을 완전히 숨긴 상태로 시작 */
	transition: stroke-dashoffset 1s ease; /* 진행 상태 변경 시 애니메이션 효과 */
	stroke-linecap: round; /* 원의 외곽선 끝을 둥글게 설정 */
}

.progress-text {
	position: absolute; /* 부모 요소를 기준으로 절대 위치 */
	top: 50%; /* 수직 중앙 정렬 */
	left: 50%; /* 수평 중앙 정렬 */
	transform: translate(-50%, -50%); /* 중앙으로 이동 */
	font-size: 24px; /* 글꼴 크기 */
	font-weight: bold; /* 글꼴 두께 */
}

@media screen and (max-width: 784px) {
	.wrap {
		flex-direction: column;
		height: auto;
		.flex {
			padding-top: 10rem;
			flex-direction: column;
		}
	}
}
</style>
