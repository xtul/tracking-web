import Vue from 'vue';
import Vuex from 'vuex';
import DataService from '../services/dataService';
import auth from './auth.module';

Vue.use(Vuex);


export default new Vuex.Store({
	state: {
		devices: {},
	},
	mutations: {
		AddDevices(state, devices) {
			state.devices = devices;
		}
	},
	actions: {
		RequestDevices({ commit }) {
			return DataService.makeRequest('devices/all').then(
				success => {
					commit('AddDevices', success);
					return Promise.resolve(success);
				},
				error => {
					return Promise.reject(error);
				}
			);
		}
	},
	getters: {
		GetDevices: state => {
			this.dispatch('RequestDevices');
			return state.devices;
		}
	},
	modules: {
		auth
	}
});
