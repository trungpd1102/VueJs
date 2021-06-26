<template>
  <div id="app">
    <input type="text" v-model="newTask" />
    <button @click="addTask()">Add Task</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }">{{ task.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTask: "",
      tasks: [
        { content: "Learn VueJs", done: false },
        { content: "Do ticket #150", done: false },
        { content: "Learn Japanese", done: false },
        { content: "Learn English", done: false },
      ],
    };
  },

  methods: {
    addTask: function () {
      this.tasks.push({
        content: this.newTask,
        done: false,
      });
    },
  },

  watch: {
    newTask: function (oldValue, newValue) {
      console.log("new taks changed");
      console.log({ oldValue: oldValue });
      console.log({ newValue: newValue });
    },
  },

  mounted() {
    // goi API
    console.log("Mounted");
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
body {
  font-size: 22px;
}
</style>
