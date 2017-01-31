<template>
  <div>
    <div class="todos-list">
      <app-todo-li v-for="todo in toDoList" :toDoName="todo.name" :toDoID="todo.id"></app-todo-li>
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
      toDoList: [
        {
          id: "1",
          name: "ma todo"
        },
        {
          id: "2",
          name: "Tata"
        },
        {
          id: "3",
          name: "Toto"
        },
        {
          id: "4",
          name: "tutu"
        },
        {
          id: "5",
          name: "titi"
        }
      ]

      }
    }
  }

</script>

<style scope>
  .todos-list{
    margin:10px;
  }
</style>
