<template>
  <div>
    <div class="todos-list row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2>Mes todo</h2>
          </div>
          <div class="panel-body">
            <app-todo-li v-for="todo in myToDo" :toDoName="todo.name" :toDoID="todo._id"></app-todo-li>  
          </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script >
import toDoLi from './elements/ToDo-li.vue';

export default {
  components: {
    'app-todo-li': toDoLi
  },
  data(){
    return {
      myToDo: []

      }
    },

    methods: {
      loadLists: function() {
        this.$http.get('user/lists').then(res => {
          this.myToDo = res.body;
        });
      }
    },
    mounted() {
      this.loadLists();
    }
  }

</script>

<style scope>
  .todos-list{
    margin:10px;
  }
</style>
