<template>
	<b-navbar toggleable="lg" type="dark" variant="primary" sticky>
		<b-navbar-brand href="#">Tracking Service</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<!-- items on right side -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item @click="$bvModal.show('devices-modal')">Devices</b-nav-item>

				<DevicesModal/>

				<!-- dropdown -->
				<b-nav-item-dropdown right>
					<template #button-content>
						<em>Profile</em>
					</template>
					<b-dropdown-item href="#">Edit</b-dropdown-item>
					<b-dropdown-item href="#" @click="logout()">Log out</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import router from '../../router';
import DevicesModal from '../Home/Modals/DevicesModal';

export default {
	components: {
		DevicesModal
	},
	methods: {
		async logout() {
			await this.$store.dispatch('auth/logout');
			router.push('/login');
		}
	}
}
</script>
