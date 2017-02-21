import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import userService from './services/auth'
import App from './App.vue';
import HomePage from './components/Home-Page.vue';
import ToDoPage from './components/ToDo-Page.vue';
import ToDoMenu from './components/ToDo-Menu.vue';
import Input from './components/inputs/Input.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('app-home-page', HomePage);
Vue.component('app-todo-page', ToDoPage);
Vue.component('app-todo-menu', ToDoMenu);
Vue.component('app-input', Input);

Vue.http.options.root = 'http://localhost:8080';

const routes = [
  { path: '/', component: HomePage},
  { path: '/todomenu', component: ToDoMenu},
  { path: '/todopage', component: ToDoPage}
]


const router = new VueRouter({
  routes
})

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  methods: {
    getConnection: function(cb) {
      var connection;
      this.$http.get('user/auth').then(res => {
        console.log(res.body)
        this.connection = res.body;
      });
      console.log(this.connection)
      return cb(this.connection);
    }
  }
})

router.beforeEach((to, from, next) => {
  vm.getConnection(function(isConnected){
    console.log(isConnected)
    if (to.path != '/' && (isConnected === 'false')) {  
    // if (from.path != '/') from.path = '/';
    next(false); 
    } else next();
  })
});
