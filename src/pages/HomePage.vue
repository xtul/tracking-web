<template>
	<b-container fluid>
		<b-row align-v="center" align-h="center">
			<b-col cols="12" md="4">
				Logged in, account stuff should be here.
				<button @click="logout()">Log out.</button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import AuthService from '../services/authService';
import router from '../router';

export default {
	name: 'HomePage',
	data() {
		return {
			devices: {}
		}
	},
	async created() {
		this.devices = await this.$store.dispatch('RequestDevices');
	},
	methods: {
		async logout() {
			await AuthService.logout();
			router.push('/login');
		}
	}
}
</script>
