<template>
  <div class="list">
    <div
      v-for="(language, index) in languages"
      :key="index"
      @click="language.selected = !language.selected"
      :class="{ langSelected: language.selected }"
    >
      <span>{{ language.name }}</span>
    </div>
  </div>
</template>

<script src="./TagSelector.js"></script>

<style src="./TagSelector.css" >
</style>