import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import HomePage from './components/Home-Page.vue';
import ToDoPage from './components/ToDo-Page.vue';
import ToDoMenu from './components/ToDo-Menu.vue';
import Input from './components/inputs/Input.vue';

Vue.use(VueRouter);

Vue.component('app-home-page', HomePage);
Vue.component('app-todo-page', ToDoPage);
Vue.component('app-todo-menu', ToDoMenu);
Vue.component('app-input', Input);


const routes = [
  { path: '/', component: HomePage},
  { path: '/todomenu', component: ToDoMenu},
  { path: '/todopage', component: ToDoPage}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
