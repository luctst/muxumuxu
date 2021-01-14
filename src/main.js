import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal';

Vue.config.productionTip = false

Vue.use(VModal, { dynamicDefault: { draggable: false, resizable: false }});

new Vue({
  render: h => h(App),
}).$mount('#app')
