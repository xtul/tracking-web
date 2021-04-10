<template>
	<div>
		<NavBar />
		<b-container fluid>
			<b-row align-v="center" align-h="center">
				<b-col cols="12">
					map will be right here
				</b-col>
			</b-row>
		</b-container>
	</div>	
</template>

<script>
import NavBar from '../components/Home/NavBar';

export default {
	name: 'HomePage',
	components: {
		NavBar
	}
}
</script>
