<template>
	<b-container fluid>
		<b-row align-v="center" align-h="center">
			<b-col cols="12" md="4">
				<img src="img/logo.png" class="logo">
				<Login v-if="registerMode === false" @onToggleRegister="toggleRegisterMode(true)"/>
				<Register v-else @onToggleLogin="toggleRegisterMode(false)"/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

export default {
	name: 'LoginPage',
	components: {
		Login, Register
	},
	data() {
		return {
			registerMode: false
		};
	},
	methods: {
		toggleRegisterMode(value) {
			this.registerMode = value;
		}
	}
}
</script>
