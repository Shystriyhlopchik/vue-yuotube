import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router' // подключение роутов
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import currencyFilter from '@/filters/currency.filter.js'
import tooltipDirective from '@/directives/tooltip.directive.js'
import Paginate from 'vuejs-paginate'
import Loader from './components/app/Loader'
import messagePlugin from '@/utils/message.plugin.js'
import 'materialize-css/dist/js/materialize.min' // подключение materialize

import firebase from 'firebase/app' // импорт firebase
import 'firebase/auth' // модуль авторизации
import 'firebase/database' // модуль БД

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

const firebaseConfig = {
  apiKey: "AIzaSyDdMR8e9lSeJXD79BIMYXyttCxB3VPOzWo",
  authDomain: "vue-6cbf3.firebaseapp.com",
  databaseURL: "https://vue-6cbf3.firebaseio.com",
  projectId: "vue-6cbf3",
  storageBucket: "vue-6cbf3.appspot.com",
  messagingSenderId: "419890320987",
  appId: "1:419890320987:web:bca520679a4a4c8a56517e"
};

firebase.initializeApp(firebaseConfig); // инициализация firebase

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
