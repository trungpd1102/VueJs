<template>
  <div id="hello">
    <input type="text" v-model="username">
    <div v-if="error" class="error">
      {{error}}
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      username: ""
    };
  },

};
</script>

<style>
</style>
