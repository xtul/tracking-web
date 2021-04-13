import GetApi from '../helpers/getApiUrl';
import AuthService from './authService';
import router from '../router';

const url = GetApi();

class DataService {
	async makeRequest(dir, body, method) {
		let user = AuthService.getUser();
		if (user == undefined) {
			await AuthService.logout();
			router.push('/login');
		}

		await fetch(url + 'auth/validate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				"token": user.token,
				"refreshToken": user.refreshToken
			})
		}).then(async (response) => {
			if (response.status === 400) {
				await AuthService.refresh({
					"token": user.token,
					"refreshToken": user.refreshToken
				});
				// reload user
				user = AuthService.getUser();
				if (user == null) {
					AuthService.logout();
				}
			}
		});		

		if (method == null) {
			method = 'GET';
		}

		let options = {
			method: method,
			headers: {
				'Authorization': 'Bearer ' + user.token
			}
		};
		if (body != null) {
			options.headers['Content-Type'] = 'application/json;charset=utf-8';
			options.body = JSON.stringify(body);
		}
		let result = await fetch(url + dir, options);

		// if request still failed, token was invalidated
		if (result.status == 401) {
			try {
				await AuthService.logout();
			} catch {
				router.push('/login')
			}
			router.push('/login')
			return;
		}

		return await result.json();
	}
}

export default new DataService();