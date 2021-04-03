<template>
  <div id="app">
    <b-container fluid>
      <b-row align-v="center" align-h="center">
        <b-col cols="12" md="6">
          <img src="img/logo.png" class="logo">
          <Login/>
          <Register/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Login, Register
  }
}
</script>
