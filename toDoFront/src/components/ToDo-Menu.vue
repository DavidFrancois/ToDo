<template>
  <div>
    <div class="todo-list">
      <app-todo-li v-for="todo in toDoList" :toDoName="todo.name"></app-todo-li>
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
      message : "Cette page sera une liste des différentes toDo auxquelles a accès l'utilisateur"
    }
  }

</script>

<style scope>
  .todo-list{
    margin:10px;
  }
</style>
