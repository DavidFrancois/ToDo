<template >
  <div class="to-do-li row">
    <span class="col-md-3"> {{toDoName}} </span>
    <div class="btnGroup col-md-9">
      <a class="btn btn-default" type="button" :href="hrefMaker(toDoID)" name="modif-toDo"> Modifier </a>
      <button class="btn btn-primary" type="button" name="manage-user"> Gérer les accès </button>
      <button class="btn btn-danger" type="button" v-on:click="deleteToDo(toDoID)" name="del-toDo"> Supprimer </button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['toDoName', 'toDoID'],
  methods: {
    deleteToDo(toDoID){
      console.log(toDoID);
    },
    hrefMaker(toDoID){
      return toDoID +"#/todopage";
    }
  }
}
</script>

<style scope>
/*.to-do-li{
  padding: 10px;
  border-style: solid;
  width: 500px;
}*/

.btnGroup{
  text-align: right;
}
</style>
