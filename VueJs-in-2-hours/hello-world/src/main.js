import Vue from 'vue';
import App from './App.vue';
//import TodoList from './components/TodoList.vue'
import i18n from './i18n';
import FlagIcon from 'vue-flag-icon';

Vue.use(FlagIcon);
Vue.config.productionTip = false;

new Vue({
	i18n,
	render: (h) => h(App),
}).$mount('#app');
