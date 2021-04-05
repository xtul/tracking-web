"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _App = _interopRequireDefault(require("./App.vue"));

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage.vue"));

var _HomePage = _interopRequireDefault(require("./pages/HomePage.vue"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_bootstrapVue.LayoutPlugin);

_vue["default"].use(_bootstrapVue.CardPlugin); // bootstrap form


_vue["default"].component('b-form', _bootstrapVue.BForm);

_vue["default"].component('b-button', _bootstrapVue.BButton);

_vue["default"].component('b-form-group', _bootstrapVue.BFormGroup);

_vue["default"].component('b-form-input', _bootstrapVue.BFormInput);

_vue["default"].config.productionTip = true;
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    component: _HomePage["default"]
  }, {
    path: '/login',
    component: _LoginPage["default"]
  } //{ path: '*', redirect: '/' }
  ]
});
exports.router = router;
router.beforeEach(function (to, from, next) {
  // array of paths available to public
  var publicPages = ['/login']; // auth is required to everything not in publicPages

  var authRequired = !publicPages.includes(to.path);
  var loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
new _vue["default"]({
  router: router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');