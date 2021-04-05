<template>
  <b-card border-variant="light" no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col>
        <b-card-body title="Register">
          <b-card-text>
            <b-form @submit="onSubmit" v-if="registered === false">
                <b-form-group
                  id="input-group-1"
                  label="E-mail:"
                  label-for="input-1"
                  description="Required to receive notifications. Can be changed later."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-form-group 
                    id="input-group-2" 
                    label="Nickname:" 
                    label-for="input-2"
                    description="You will log in using this."
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-button type="submit" variant="primary">Register</b-button>
				<a id="hasaccount" href="#" v-on:click="emitToggleLogin()">Log in</a>
            </b-form>
			<p id="success" v-else>Registered successfully - you will now be redirected.</p>
			<p id="error" v-if="registrationError != ''" ref="errorEl">{{ registrationError }}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'Register',
  data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
			registered: false,
			registrationError: ''
        }
    },
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		}
	},
    methods: {
        onSubmit(event) {
            event.preventDefault()

			this.registered = false;

			this.$store.dispatch('auth/register', this.form).then(
				() => {
					this.registered = true;
					this.emitToggleLogin();
				},
				error => {
					this.registrationError = 'Failed: status ' + error.response + ', ' + error.response.data;
				}
			);
        },

		emitToggleLogin() {
			this.$emit('onToggleLogin');
		},
		
		emitRegisterSuccess() {
			this.$emit('onRegisterSuccess');
		}
    }
}
</script>

<style>
	#hasaccount {
		padding-left:0.5em;
	}

	#error {
		color:red;
	}

	#success {
		color:green;
	}
</style>