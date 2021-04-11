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
		this.$store.dispatch('RequestDevices');
	}
}
</script>
