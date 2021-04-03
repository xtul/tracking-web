"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_bootstrapVue.LayoutPlugin);

_vue["default"].use(_bootstrapVue.CardPlugin); // bootstrap form


_vue["default"].component('b-form', _bootstrapVue.BForm);

_vue["default"].component('b-button', _bootstrapVue.BButton);

_vue["default"].component('b-form-group', _bootstrapVue.BFormGroup);

_vue["default"].component('b-form-input', _bootstrapVue.BFormInput);

_vue["default"].config.productionTip = true;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');