import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {i18n} from './plugin/vue-i18n'
import store from './store/store'
//import VButton from './components/button/button'
//Vue.component('VButton', VButton)

import './components'

Vue.config.productionTip = false
Vue.directive('click-outside', {
	bind(el, binding) {
		el.addEventListener('click', e => e.stopPropagation());
		document.body.addEventListener('click', binding.value);
	},
	unbind(el, binding) {
		document.body.removeEventListener('click', binding.value);
	}
});
new Vue({
	i18n,
	store,
	router,
	render: h => h(App)
}).$mount('#app')
