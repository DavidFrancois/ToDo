<template lang="html">
  
  <div class="row">
    <div class="col-md-3">

      <list>
        
      </list>
    </div>
    <div class="col-md-9">
      <div class="box box-primary">
        <div class="box box-body">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import List from './List.vue';

export default {
  components: {
    'list': List
  },
  data() {
    return {
      bienvenue: "Bienvenue sur todo"
    }
  }
}
</script>