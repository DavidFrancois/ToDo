<template>
  <div id="app">
    <nav class="menu-horizontal">
      <li><a href="#/">Home / Inscription</a></li>
      <li><a href="#/toDoMenu">Liste des toDo</a></li>
      <li><a href="#/toDoPage">Une todo list</a></li>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  .menu-horizontal{
    display: inline-flex;
    list-style-type: none;
  }

  .menu-horizontal li{
    margin-top: 10px;
    margin-left: 30px;
  }

</style>
