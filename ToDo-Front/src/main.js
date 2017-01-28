import Vue from 'vue';
import App from './App.vue';
import SignIn from './components/Sign-In.vue';
import SignUp from './components/Sign-Up.vue';


Vue.component('app-sign-in', SignIn);
Vue.component('app-sign-up', SignUp);

new Vue({
  el: '#app',
  render: h => h(App)
});
