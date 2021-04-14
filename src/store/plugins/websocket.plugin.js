import { HubConnectionBuilder } from '@aspnet/signalr';
import AuthService from '../../services/authService';
import getUrl from '../../helpers/getApiUrl';

const url = getUrl().replace('/api', '');

export default function createWebSocketPlugin() {
	return store => {
		let user = AuthService.getUser;
		const client = new HubConnectionBuilder()
			.configureLogging('error')
			.withUrl(url + 'PositionsHub', { accessTokenFactory: () => JSON.parse(localStorage.getItem('user')).token })
			.build()

		client.on('stateChanged', (oldState, newState) => {
			if (oldState !== newState && newState !== 'Connected') {
				store.dispatch('devices/connectionClosed');
			} else {
				store.dispatch('devices/connectionOpened');
			}
		});

		client.on('position', (imei, position) => {
			const payload = {
				imei: imei,
				position: position
			}
			store.dispatch('devices/addPosition', payload);
		});

		client.on('unauthorized', () => {
			AuthService.refresh({
				'token': user.token,
				'refreshToken': user.refreshToken
			})
			.then(response => {
				if (response.status === 400) {
					store.dispatch('devices/connectionError', "Session revoked.");
				}
			});
		})

		client.on('noImeis', () => {
			store.dispatch('devices/connectionError', "No devices to subscribe.");
		})

		client.on('badImeis', () => {
			store.dispatch('devices/connectionError',
				"Some of requested devices don't exist.");
		})
		
		store.subscribe(mutation => {
			if (mutation.type === 'devices/ADD_DEVICES') {
				client.start()
				.then(() => {
					store.dispatch('devices/connectionOpened');
					let imeis = store.state.devices.devices.map(function (obj) {
						return obj.imei;
					});
					client.invoke('SubscribeToDevices', imeis);
				})
				.catch(err => {
					store.dispatch('devices/connectionError', err);
				});
			}
			if (mutation.type === 'auth/logout') {
				store.dispatch('devices/connectionClosed');
				client.stop();
			}
		})
	};
}