import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import { LayoutPlugin } from 'bootstrap-vue';
import { CardPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);

// bootstrap form
import { BForm } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue';
import { BFormGroup } from 'bootstrap-vue';
import { BFormInput } from 'bootstrap-vue';
Vue.component('b-form', BForm);
Vue.component('b-button', BButton);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);

Vue.config.productionTip = true;

export const router = new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/login', component: LoginPage }
		//{ path: '*', redirect: '/' }
	]
});

router.beforeEach((to, from, next) => {
	// array of paths available to public
	const publicPages = ['/login'];
	// auth is required to everything not in publicPages
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
