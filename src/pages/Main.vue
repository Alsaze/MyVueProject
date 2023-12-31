<template>
  <div>
    <input
        v-model="title">
  </div>
  <div>
    {{title}}
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  data(){
    return{
      title: ''
    }
  },
  methods:{
    incrementCount(){
      this.count++;
    }
  }
}

</script>

<style>

</style>