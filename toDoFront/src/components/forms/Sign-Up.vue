<template>
  <form class="sign-up-form">
    <div class="form-group">
      <label for="sign-up-login">Login</label>
      <app-input ref="signupLogin" inputType="text" inputId="sign-up-login" inputPlaceholder="Pseudo" v-model="user.login"></app-input>
    </div>

    <div class="form-group">
      <label for="sign-up-email">E-mail</label>
      <app-input ref="signupEmail" inputType="email" inputId="sign-up-email" inputPlaceholder="E-mail" v-model="user.email"></app-input>
    </div>

    <div class="form-group">
      <label for="sign-up-password">Mot de passe</label>
      <app-input ref="signupPassword" inputType="password" inputId="sign-up-password" inputPlaceholder="Password" v-model="user.password"></app-input>
    </div>

    <div class="form-group">
      <label for="sign-up-verif-password" >Confirmer votre mot de passe :</label>
      <app-input ref="signupPasswordConfirm" inputType="password" inputId="sign-up-passwordConfirm" inputPlaceholder="Confirm password" v-model="user.passwordConfirm"></app-input>
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
          let logex = new RegExp("^[a-zA-Z]{"+this.params.minLengthLogin+","+this.params.maxLengthLogin+"}$");
          let emailex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
          let passwordex = new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z]).{"+this.params.minLengthPassword+","+this.params.maxLengthPassword+"}$");
          if(!logex.test(this.user.login)){
            this.$refs.signupLogin.invalidate();}
          else{
            this.$refs.signupLogin.validate();}
          if(!emailex.test(this.user.email)){
            this.$refs.signupEmail.invalidate();}
          else{
            this.$refs.signupEmail.validate();}
          if(!passwordex.test(this.user.password)){
            this.$refs.signupPassword.invalidate();}
          else{
            this.$refs.signupPassword.validate();
            if(this.user.password != this.user.passwordConfirm){
              this.$refs.signupPasswordConfirm.invalidate();}
            else{
              this.$refs.signupPasswordConfirm.validate();}
          }
          if(this.$refs.signupLogin.isValid && this.$refs.signupPassword.isValid && this.$refs.signupPasswordConfirm.isValid && this.$refs.signupLogin.isValid){
            this.sendData();
          }
        },
        sendData(){
          this.$http.post('user/', {
            login : this.user.login,
            email : this.user.email,
            password : this.user.password
          }).then(response => {
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
