import GetApi from '../helpers/getApiUrl';
import store from '../store';

const url = GetApi();

class AuthService {
	isLoggedIn() {
		if (this.getUser() == null) {
			return false;
		}
		return true;
	}

	getUser() {
		return JSON.parse(localStorage.getItem('user'));
	}

    async register(form) {
        return await fetch(url + 'auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(form)
		});
	}
	
	async logout() {
		const user = this.getUser();
		await fetch(url + 'auth/revoke', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': 'Bearer ' + user.token
			},
			body: JSON.stringify({
				'token': user.token,
				'refreshToken': user.refreshToken
			})
		});

		localStorage.removeItem('user');
		store.state.auth.user = undefined;
	}

	async login(form) {
		const response = await fetch(url + 'auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(form)
		});
		return await response.json();
	}

	async refresh(form) {
		const response = await fetch(url + 'auth/refresh', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(form)
		});
		const json = await response.json();
		store.state.auth.user = json;

		localStorage.setItem('user', JSON.stringify(json));		
	}
}

export default new AuthService();