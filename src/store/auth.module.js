import AuthService from '../services/authService';

const user = JSON.parse(localStorage.getItem('user'));
// if user is not null, make loggedIn: true and add user object
const initialState = user
	? { status: { loggedIn: true }, user }
	: { status: { loggedIn: false }, user: null };

export default {
	namespaced: true,
	state: initialState,
	actions: {
		login({ commit }, user) {
			return AuthService.login(user).then(
				user => {
					localStorage.setItem('user', JSON.stringify(user));
					commit('loginSuccess', user);
					return Promise.resolve(user);
				},
				error => {
					commit('loginFailure');
					return Promise.reject(error);
				}
			);
		},
		logout({ commit }) {
			AuthService.logout();
			commit('logout');
			return Promise.resolve();
		},
		register({ commit }, user) {
			return AuthService.register(user).then(
				response => {
					commit('registerSuccess');
					return Promise.resolve(response.data);
				},
				error => {
					commit('registerFailure');
					return Promise.reject(error);
				}
			);
		}
	},
	mutations: {
		loginSuccess(state, user) {
			state.status.loggedIn = true;
			state.user = user;
		},
		loginFailure(state) {
			state.status.loggedIn = false;
			state.user = null;
		},
		logout(state) {
			state.status.loggedIn = false;
			state.user = null;
		},
		registerSuccess(state) {
			state.status.loggedIn = false;
		},
		registerFailure(state) {
			state.status.loggedIn = false;
		}
	}
};
