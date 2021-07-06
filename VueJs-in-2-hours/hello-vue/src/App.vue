<template>
  <div id="app">
    <Test  > Click </Test>
    <FunctionlComponet :user="{firstname: 'Trung', lastName: 'Pham'}"></FunctionlComponet>
  </div>
</template>

<script>
import FunctionlComponet from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";

export default {
  name: "App",
  data() {
    return {
      val: "ok",
      text: 'Click'
    };
  },
  components: {
    FunctionlComponet,
    Test,
  },
  methods: {
    callingFunction() {
      console.log("clicked");
      this.text = "Nhap vao day"
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
