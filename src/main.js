import Vue from 'vue'
import App from './App.vue'
import ToastService from 'primevue/toastservice';

import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';
import Column from 'primevue/column';
import Carousel from 'primevue/carousel';
import Toast from 'primevue/toast';

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import router from './router'

Vue.config.productionTip = false
Vue.component('DataTable', DataTable)
Vue.component('InputText', InputText);
Vue.component('Panel', Panel);
Vue.component('Button', Button);
Vue.component('Dialog', Dialog);
Vue.component('Menubar', Menubar);
Vue.component('Column', Column);
Vue.component('Carousel', Carousel);
Vue.component('Toast', Toast)

Vue.use(ToastService);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
