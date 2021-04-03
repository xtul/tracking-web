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
            
                <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
            
                <b-button type="submit" variant="primary">Submit</b-button>
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
