//import store from '../store';
import GetApi from '../helpers/getApiUrl'

const url = GetApi();

class AuthService {
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
}

export default new AuthService();