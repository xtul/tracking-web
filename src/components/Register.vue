<template>
  <b-card border-variant="light" no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col>
        <b-card-body title="I don't have an account yet">
          <b-card-text>
            <b-form @submit="onSubmit">
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
                    description="This will be your log in."
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
            </b-form>
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
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
    }
}
</script>
