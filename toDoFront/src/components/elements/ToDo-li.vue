<template >
  <div class="to-do-li">
    <span> {{toDoName}} </span>
    <div class="btnGroup">
      <button type="button" name="modif-toDo"> Modifier </button>
      <button type="button" name="manage-user"> Gérer les accès </button>
      <button type="button" name="del-toDo"> Supprimer </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toDoName']
}
</script>

<style scope>
.to-do-li{
  padding: 10px;
  border-style: solid;
  width: 500px;
}

.btnGroup{
  text-align: right;
}
</style>
