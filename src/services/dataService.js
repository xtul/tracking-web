import GetApi from '../helpers/getApiUrl';
import AuthService from './authService';
import router from '../router';

const url = GetApi();

class UserService {
	async makeRequest(dir, body) {
		let user = AuthService.getUser();

		if (user == undefined) {
			AuthService.logout();
			router.push('/login');
		}

		const tokenValidateResult = await fetch(url + 'auth/validate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				"token": user.token,
				"refreshToken": user.refreshToken
			})
		})

		if (tokenValidateResult.status !== 200) {
			await AuthService.refresh({
				"token": user.token,
				"refreshToken": user.refreshToken
			});
			// reload user
			user = AuthService.getUser();
		}

		let result;
		if (body == null) {
			result = await fetch(url + dir, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + user.token
				}
			});
		} else {
			result = await fetch(url + dir, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
					'Authorization': 'Bearer ' + user.token
				},
				body: JSON.stringify(body)
			});
		}

		// if request still failed, token was invalidated
		if (result.status == 401) {
			AuthService.logout();
		}

		return await result.json();
	}
}

export default new UserService();