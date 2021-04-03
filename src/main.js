import Vue from 'vue'
import App from './App.vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(LayoutPlugin);
Vue.use(CardPlugin);

// bootstrap form
import { BForm } from 'bootstrap-vue'
import { BButton } from 'bootstrap-vue'
import { BFormGroup } from 'bootstrap-vue'
import { BFormInput } from 'bootstrap-vue'
Vue.component('b-form', BForm);
Vue.component('b-button', BButton)
Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-input', BFormInput)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
