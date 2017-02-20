<template>
  <form class="sign-in-form">
    <div class="form-group row">
      <label for="sign-in-login" class="col-sm-3 col-form-label">Login</label>
        <app-input ref="signinLogin" inputType="text" inputId="sign-in-login" inputPlaceholder="Pseudo" v-model="user.login"></app-input>
    </div>

    <div class="form-group row">
      <label for="sign-in-password" class="col-sm-3 col-form-label">Mot de passe</label>
        <app-input ref="signinPassword" inputType="password" inputId="sign-in-password" inputPlaceholder="Mot de passe" v-model="user.password"></app-input>
    </div>

    <div class="center-content"> <button  class="btn btn-primary" v-on:click="sendData()"> Connexion </button> </div>
  </form>
</template>


<style scope>
  .sign-in-form{
    width: 600px;
    margin: auto;
    margin-top: 100px;

    background-color: rgb(250, 250, 250);

    border-radius: 10px;
    border-color: #f7f7f9;
    border-style: solid;
    padding: 20px;
  }
</style>

<script type="text/javascript">
export default{
  data(){
    return{
      user:{
        login:"",
        password:""
      }
    }
  },
  methods:{
    sendData(){
      this.$http.post('user/auth',{
        login : this.user.login,
        password : this.user.password
      }, {headers: {'Authorization': 'Basic YXBpOnBhc3N3b3Jk'}}).then(response => {
        //success callback
        console.log(response.status);
        console.log(response.body);
      }, response => {
        //error callback
        console.log(response.status);
        console.log(response.body);
      })
    }
  }
}
</script>
