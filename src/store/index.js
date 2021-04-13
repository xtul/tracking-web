import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.module';
import devices from './devices.module';
import positionsSocket from './plugins/websocket.plugin';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		devices
	},
	plugins: [
		positionsSocket()
	]
});
