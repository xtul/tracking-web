import store from '../store/index.js'

const url = store.getters.getApiUrl;

class UserService {
	async makeRequest(dir, body) {
		if (body == null) {
			return await fetch(url + dir, {
				method: 'GET'
			});
		} else {
			return await fetch(url + dir, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(body)
			});
		}
	}
}

export default new UserService();