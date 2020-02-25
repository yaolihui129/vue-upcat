import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo:""
	},
	mutations: {
		login(state,v){
			state.userInfo = v
		}
	},
	actions: {
	},
	modules: {
	}
})
