<template>
  <div id="task">
    <span>{{ taskData.content }}</span>
  </div>
</template>

<script>
export default {
  name: "Task",
  // define props with array
  // props: ["taskData"],

  // define props with object
  props: {
    // taskData: {
    //   type: Object,
    //   default: function () {
    //     return {};
    //   },
    // },
    taskData: Object,
  },
  data() {
    return {
      content: "ABC",
    };
  },
  methods: {
    deleteTask: function () {
      console.log(this.taskData);
    },
  },
};
</script>

<style>
</style>
