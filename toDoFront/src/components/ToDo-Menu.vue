<template>
  <div>
    <div> {{message}} </div>
    <br>
    <input v-model="message">

    <div class="to-do-head">

    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      message : "Cette page sera une liste des différentes toDo auxquelles a accès l'utilisateur"
    }
  }
}
</script>
