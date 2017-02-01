<template>
  <div>
    <div v-if="inputType=='text'">
      <input type="text" v-bind:id="inputId" v-bind:placeholder="inputPlaceholder" v-bind:style="inputStyle" :value="value" class="form-control" @input="$emit('input', $event.target.value)">
    </div>
    <div v-else-if="inputType=='email'">
      <input type="email" v-bind:id="inputId" v-bind:placeholder="inputPlaceholder" v-bind:style="inputStyle" :value="value" class="form-control" @input="$emit('input', $event.target.value)">
    </div>
    <div v-else-if="inputType=='password'">
      <input type="password" v-bind:id="inputId" v-bind:placeholder="inputPlaceholder" v-bind:style="inputStyle" :value="value" class="form-control" @input="$emit('input', $event.target.value)">
    </div>
    <div v-else>
      <p> Input type not supported by input component. Please update or use "text", "email" or "password" </p>
    </div>
  </div>
</template>

<style scope>

</style>

<script type="text/javascript">
    export default{
      props:['inputType', 'inputId', 'inputPlaceholder', 'value'],
      data(){
        return{
          inputStyle:"",
          isValid: false
        }
      },
      methods:{
        validate(){
          this.inputStyle = 'border-color : green;';
          this.isValid = true;
        },
        invalidate(){
          this.inputStyle = 'border-color : red;';
          this.isValid = false;
        }
      }
    }
</script>
