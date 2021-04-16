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
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);

// forms
import {
    BForm,
    BFormCheckbox,
    BButton,
    BFormGroup,
    BFormInput
} from 'bootstrap-vue';
Vue.component('b-form', BForm);
Vue.component('b-form-checkbox', BFormCheckbox);
Vue.component('b-button', BButton);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);

// navbar
import {
    BCollapse,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem
} from 'bootstrap-vue';
Vue.component('b-collapse', BCollapse);
Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-nav-item-dropdown', BNavItemDropdown);
Vue.component('b-dropdown-item', BDropdownItem);
Vue.component('b-navbar-toggle', BNavbarToggle);

// modal
import { ModalPlugin } from 'bootstrap-vue';
Vue.use(ModalPlugin);

// lists
import {
    BListGroup,
    BListGroupItem
} from 'bootstrap-vue';
Vue.component('b-list-group', BListGroup);
Vue.component('b-list-group-item', BListGroupItem);

// vue-layers (openlayers for vue)
import VueLayers from 'vuelayers';
import 'vuelayers/lib/style.css';
Vue.use(VueLayers, {
    dataProjection: 'EPSG:4326',
});

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
