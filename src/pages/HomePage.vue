<template>
	<div class="home-container">
		<NavBar />
		<Map />
	</div>	
</template>

<script>
import NavBar from '../components/Home/NavBar';
import Map from '../components/Home/Map';

export default {
	name: 'HomePage',
	components: {
		NavBar, Map
	},
	async created() {
		// download all devices that belong to user
		await this.$store.dispatch('devices/requestDevices');		
		// Vuex WebSocket plugin will start tracking positions right after
	}
}
</script>
