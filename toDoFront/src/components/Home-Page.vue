<template>
  <div class="home-page">
    <div id="homeTitle">
      <h1> {{bienvenue}} </h1>
    </div>
        <div class="row">
      <div class="col-md-6">
        <app-sign-in>
        </app-sign-in>
      </div>
      <div class="col-md-6">
        <app-sign-up>
        </app-sign-up>
      </div>
    </div>
  </div>
</template>

<script>

import SignIn from './Sign-In.vue';
import SignUp from './Sign-Up.vue';

export default {
  components: {
    'app-sign-in': SignIn,
    'app-sign-up': SignUp
  },
  data() {
    return {
      bienvenue: "Bienvenue sur todo"
    }
  }
}
</script>


<style >
  #homeTitle{
    text-align: center;
  }
</style>
