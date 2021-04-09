import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(Router);

// bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { LayoutPlugin } from 'bootstrap-vue';
import { CardPlugin } from 'bootstrap-vue';
import { BForm } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue';
import { BFormGroup } from 'bootstrap-vue';
import { BFormInput } from 'bootstrap-vue';
Vue.component('b-form', BForm);
Vue.component('b-button', BButton);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
