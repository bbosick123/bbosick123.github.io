// src/store/index.js
import { createStore } from "vuex";

export default createStore({
	state: {
		text: "",
		savedTexts: [], // 추가: 저장된 텍스트 배열
	},
	mutations: {
		setText(state, text) {
			state.text = text;
		},
		addText(state, text) {
			// 추가: 새로운 텍스트를 리스트에 추가
			state.savedTexts.push(text);
		},
	},
	actions: {
		loadText({ commit }) {
			const savedText = localStorage.getItem("text");
			if (savedText) {
				commit("setText", savedText);
			}
		},
		saveText({ state, commit }) {
			localStorage.setItem("text", state.text);
			commit("addText", state.text); // 추가: 저장 시 리스트에 추가
		},
		updateText({ commit }, text) {
			// updateText 액션 추가
			commit("setText", text);
		},
	},
	getters: {
		getText: (state) => state.text,
		getSavedTexts: (state) => state.savedTexts, // 추가: 저장된 텍스트 리스트 가져오기
	},
});
