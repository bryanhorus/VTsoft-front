import Vue from 'vue'
import App from './App.vue'

import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Button from 'primevue/button';

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import router from './router'

Vue.config.productionTip = false
Vue.component('InputText', InputText);
Vue.component('Panel', Panel);
Vue.component('Button', Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
