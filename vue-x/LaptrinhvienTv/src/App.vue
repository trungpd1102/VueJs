<template>
  <div id="app">
    <span>{{ name }}</span>
    <hr />
    <button @click="updateProfile">Chang Name</button>
    <AddTask />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/Task.vue";

import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      tasks: [],
      newTask: { name: "", done: false },
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  components: { AddTask, TaskList },
  methods: {
    // lay ham setName tu mutation cua store ve this
    ...mapMutations(["setName"]),
    ...mapActions(["updateProfile"]),
  },
};
</script>

<style></style>
