<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand href="#">Tracking Service</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>Profile</em>
						</template>
						<b-dropdown-item href="#">Edit</b-dropdown-item>
						<b-dropdown-item href="#" @click="logout()">Log out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import router from '../../router';

export default {
	methods: {
		async logout() {
			await this.$store.dispatch('auth/logout');
			router.push('/login');
		}
	}
}
</script>