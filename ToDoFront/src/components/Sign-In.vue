<template>
  <form class="sign-in-form">
    <div class="form-group row">
      <label for="sign-in-login" class="col-sm-3 col-form-label">Login</label>
      <div class="col-sm-9">
        <input class="form-control" id="sign-in-login" placeholder="Login">
      </div>
    </div>

    <div class="form-group row">
      <label for="sign-in-password" class="col-sm-3 col-form-label">Mot de passe</label>
      <div class="col-sm-9">
        <input type="password"  class="form-control" id="sign-in-password" placeholder="Mot de passe">
      </div>
    </div>

    <div class="center-content"> <button  class="btn btn-primary"> Connection </button> </div>
  </form>
</template>


<style>
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
