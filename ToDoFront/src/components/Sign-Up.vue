<template>
  <form class="sign-up-form">
    <div class="form-group">
      <label for="sign-up-login" >Login</label>
      <input class="form-control" id="sign-up-login" placeholder="Login">
      </div>
    </div>

    <div class="form-group">
      <label for="sign-up-email">E-mail</label>
        <input type="email"  class="form-control" id="sign-up-email" placeholder="E mail">
      </div>
    </div>

    <div class="form-group">
      <label for="sign-up-password">Mot de passe</label>
        <input type="password"  class="form-control" id="sign-up-password" placeholder="Mot de passe">
      </div>
    </div>


    <div class="form-group">
      <label for="sign-up-verif-password" >Confirmer votre mot de passe :</label>
      <input type="password"  class="form-control" id="sign-up-verif-password" placeholder="Confirmation mot de passe">
    </div>

    <div class="center-content"> <button  class="btn btn-primary"> Inscription </button> </div>
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
