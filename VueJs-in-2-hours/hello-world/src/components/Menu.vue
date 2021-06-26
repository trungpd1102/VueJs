<template>
  <div>
    <input type="text" v-model="name" />
    <input type="checkbox" v-model="accept" /> Check
    <div>{{ name }}</div>
    <div>{{ accept }}</div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      name: "Pham Duc Trung",
      accept: true,
    };
  },
};
</script>

<style>
</style>
