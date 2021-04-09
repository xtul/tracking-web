import GetApi from '../helpers/getApiUrl';

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
	
	logout() {
		localStorage.removeItem('user');
	}

	async login(form) {
		const response = await fetch(url + 'auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(form)
		});
		const json = await response.json();
		localStorage.setItem('user', JSON.stringify(json));
		return response;
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
		if (json != null) {
			const user = this.getUser();

			user.token = json.token;

			localStorage.setItem('user', JSON.stringify(user));
		}
	}
}

export default new AuthService();