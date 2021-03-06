import DataService from '../services/dataService';

export default {
	namespaced: true,
	state: {
		connected: false,
		error: null,
		devices: []
	},
	mutations: {
		ADD_POSITION(state, payload) {
			let device = state.devices.filter(x => x.imei == payload.imei)[0];
			if (device == null) {
				return;
			}
			const position = JSON.parse(payload.position);
			device.position = position;
		},
		SET_CONNECTION(state, message) {
			state.connected = message;
		},
		SET_ERROR(state, error) {
			state.error = error;
		},
		ADD_DEVICES(state, devices) {
			devices.forEach(x => {
				x.hidden = false;
			});

			state.devices = devices;
		},
		UPDATE_DEVICE(state, payload) {
			let device = state.devices.filter(x => x.imei == payload.imei)[0];
			if (device == null) {
				return;
			}

			device.name = payload.device.name;
			device.imei = payload.device.imei;
			device.enabled = payload.device.enabled;
		}
	},
	actions: {
		requestDevices({ commit }) {
			return DataService.makeRequest('devices').then(
				success => {
					commit('ADD_DEVICES', success);
					return Promise.resolve(success);
				},
				error => {
					return Promise.reject(error);
				}
			);
		},
		updateDevice({ commit }, payload) {
			return DataService.makeRequest('devices/' + payload.imei, payload.device, 'PUT').then(
				success => {
					commit('UPDATE_DEVICE', payload);
					return Promise.resolve(success);
				},
				error => {
					return Promise.reject(error);
				}
			);
		},
		addPosition({ commit }, payload) {
			commit('ADD_POSITION', payload);
		},
		deleteMessage({ commit }, message) {
			commit('DELETE_MESSAGE', message);
		},
		connectionOpened({ commit }) {
			commit('SET_CONNECTION', true);
		},
		connectionClosed({ commit }) {
			commit('SET_CONNECTION', false);
		},
		connectionError({ commit }, error) {
			commit('SET_ERROR', error);
		}
	},
	getters: {
		getDeviceByImei: (state) => (imei) => {
			return state.devices.find(x => x.imei === imei);
		},
		getDeviceById: (state) => (id) => {
			return state.devices.find(x => x.id === id);
		},
		getDevices: (state) => {
			return state.devices;
		}
	}
};
