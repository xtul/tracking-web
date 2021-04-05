<template>
  <b-card border-variant="light" no-body class="overflow-hidden">
    <b-row no-gutter>
      <b-col>
        <b-card-body title="Log in">
          <b-card-text>
            <b-form @submit="onSubmit">            
                <b-form-group 
                    id="input-group-1" 
                    label="Nickname:" 
                    label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-button type="submit" variant="primary">Log in</b-button>
				<a id="noaccount" href="#" v-on:click="emitToggledRegister()">I don't have an account yet</a>
				<p v-if="registeredMessage != ''">{{ registeredMessage }}</p>
				<p v-if="loading">Loading...</p>
				<p v-if="message != '' && loading == false">{{ message }}</p>
            </b-form>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
			loading: false,
			message: ''
        }
    },
	props: ['registeredMessage'],
    methods: {
		emitToggledRegister() {
			this.$emit('onToggleRegister', true);
		},
		onSubmit(event) {
			event.preventDefault();

			this.loading = true;
			this.$store.dispatch('auth/login', this.form).then(
				() => {
					this.$router.push('/');
				},
				error => {
					this.loading = false;
					this.message =
						(error.response && error.response.data) ||
						error.message ||
						error.toString();
				}
			)
		}
	}
}
</script>

<style>
#noaccount {
	padding-left:0.5em;
}
</style>