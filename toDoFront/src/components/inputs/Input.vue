<template>
  <div v-if="inputType=='text'">
    <input type="text" v-bind:id="inputId" v-bind:placeholder="inputPlaceholder" v-bind:style="inputStyle" v-model="content" class="form-control">
  </div>
</template>

<style scope>

</style>

<script type="text/javascript">
    export default{
      props:['input-type'],
      data(){
        return{
          content:"",
          inputStyle:""
        }
      },
      methods:{
        validate(){
          this.inputStyle = 'border-color : green;';
        },
        invalidate(){
          this.inputStyle = 'border-color : red;';
        }
      }
    }
</script>
