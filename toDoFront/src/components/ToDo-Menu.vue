<template>
  <div>
    <div class="todos-list">
      <h2>Mes todo</h2>
      <app-todo-li v-for="todo in myToDo" :toDoName="todo.name" :toDoID="todo.id"></app-todo-li>
    </div>

    <div class="todos-list">
      <h2>Autres todo</h2>
      <app-todo-li v-for="todo in myToDo" :toDoName="todo.name" :toDoID="todo.id"></app-todo-li>
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
      myToDo: [
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
