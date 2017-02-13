<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-6">
        <task-generator></task-generator>
      </div>
      <div class="col-md-6">
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>

import TaskGenerator from './TaskGenerator.vue';
import draggable from 'vuedraggable';
import List from './List.vue';


  export default {
		components: {
      draggable,
      'list': List,
      'task-generator': TaskGenerator
  },
  data() {
    return {
      bienvenue: "Bienvenue sur todo"
    }
  }
}
</script>

<style scope>
  .row {
    margin: 20px;
  }
</style>