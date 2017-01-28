import Vue from 'vue';
import App from './App.vue';
import HomePage from './components/Home-Page.vue';
import SignIn from './components/Sign-In.vue';
import SignUp from './components/Sign-Up.vue';



Vue.component('app-home-page', HomePage)
Vue.component('app-sign-in', SignIn)
Vue.component('app-sign-up', SignUp)

new Vue({
  el: '#app',
  render: h => h(App)
});
