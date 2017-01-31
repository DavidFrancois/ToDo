<template>
  <form class="sign-up-form">
    <div class="form-group">
      <label for="sign-up-login">Login</label>
        <app-input ref="signupLogin" inputType="text" inputId="sign-up-login" inputPlaceholder="Pseudo" ></app-input>
      </div>

    <div class="form-group">
      <label for="sign-up-email">E-mail</label>
        <input type="email"  class="form-control" id="sign-up-email" placeholder="E mail" v-model="user.email">
      </div>

    <div class="form-group">
      <label for="sign-up-password">Mot de passe</label>
        <input type="password"  class="form-control" id="sign-up-password" placeholder="Mot de passe" v-model="user.password">
      </div>

    <div class="form-group">
      <label for="sign-up-verif-password" >Confirmer votre mot de passe :</label>
      <input type="password"  class="form-control" id="sign-up-verif-password" placeholder="Confirmation mot de passe" v-model="user.passwordConfirm">
    </div>

    <div class="center-content"> <button class="btn btn-primary" v-on:click="checkData()">Inscription</button> </div>
  </form>
</template>


<style scope>
  .sign-up-form{
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
            email:"",
            password:"",
            passwordConfirm:""
          },
          params:{
            minLengthLogin:4,
            maxLengthLogin:10,
            minLengthPassword:7,
            maxLengthPassword:20
          }
        }
      },
      methods:{
        checkData(){
          console.log("called");
          let logex = new RegExp('/^[a-z]{'&this.params.minLengthLogin&','&this.params.maxLengthLogin&'}$/');
          if(!logex.test(this.user.login)){
            this.$refs.signupLogin.invalidate();
          }
          else
            this.$refs.signupLogin.validate();
        },
        sendData(){
        }
      }
    }
</script>
