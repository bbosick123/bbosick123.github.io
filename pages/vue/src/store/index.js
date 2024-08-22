import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
	state: {
		currentRoute: "/",
	},
	mutations: {
		setCurrentRoute(state, route) {
			state.currentRoute = route;
		},
	},
	plugins: [createPersistedState()],
});
