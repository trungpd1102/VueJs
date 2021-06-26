<template>
  <div id="app">
    <Task v-for="(task, index) in tasks" :key="index" :taskData="task" />
    <hr />
    <TagSelector />
    <TotalMoney />
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import TagSelector from "./components/TagSelector.vue";
import TotalMoney from "./components/TotalMoney.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: [
        { content: "Learn VueJs", done: false },
        { content: "Do ticket #150", done: false },
        { content: "Learn Japanese", done: false },
        { content: "Learn English", done: false },
      ],
    };
  },

  components: {
    Task,
    TagSelector,
    TotalMoney,
  },
};
</script>

<style>
body {
  font-size: 22px;
}
</style>
