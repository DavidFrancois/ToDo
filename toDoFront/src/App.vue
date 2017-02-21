<template>
  <div id="app">
    <nav class="menu-horizontal">
      <li><a href="#/">Home / Inscription</a></li>
      <li><a href="#/toDoMenu">Liste des toDo</a></li>
      <li><a href="#/toDoPage">Une todo list</a></li>
      <li><a href="#" @click="disconnect()">Deconnexion</a></li>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>

// import userServices from './services/auth'

export default {
  data () {
    return {
    //  connected: App.getConnection
    }
  },
  
  methods: {
    disconnect: function() { 
      this.$http.get('user/disconnect').then( res => {
        console.log('Successfully disconnected')
      })
    }
  }
}
</script>

<style>
  .menu-horizontal{
    display: inline-flex;
    list-style-type: none;
    padding-bottom: 10px;
    width: 100%;
    border-bottom-style: solid;
  }

  .menu-horizontal li{
    margin-top: 10px;
    margin-left: 30px;
  }

</style>
