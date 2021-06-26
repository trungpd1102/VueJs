<template>
  <div id="app">
    <div v-show="isShow">
      <p>Hello VueJs</p>
    </div>
    <button @click="isShow = !isShow">Show/Hidden</button>
    <!-- <h1 v-bind:id="vID">Duc Trung Vue</h1> -->
    <h1 :id="ID">Duc Trung Vue</h1>

    <!-- id binding -->
    <input type="text" :disabled="inputDisabled" />
    <button @click="inputDisabled = !inputDisabled">
      Disable/Enable Input
    </button>

    <!-- class binding -->
    <h1 :class="{ isSelected: selected }">Class Binding</h1>
    <button @click="selected = !selected">Change color</button>

    <div>
      <input type="text" v-model="ownerName[0]" />
      <p>{{ ownerName[0] }}</p>
    </div>

    <div>
      <input type="text" v-model="tech.vueJs" />
      <p>{{ tech.vueJs }}</p>
    </div>

    <!-- Event handler -->
    <div>
      <input type="text" v-model="tech.reactJs" />
      <p>{{ tech.reactJs }}</p>
      <button v-on:click="tech.reactJs = 'This is reactJs'">
        Change input
      </button>
      <button v-on:mouseover="tech.reactJs = 'This is reactJs'">
        Mouse Over
      </button>
    </div>

    <!-- preventDefault event -->
    <div>
      <form action="/prevent">
        <input type="text" v-model="tech.reactJs" />
        <p>{{ tech.reactJs }}</p>
        <button type="submit" @click.prevent="tech.reactJs = 'This is reactJs'">
          Change input
        </button>
      </form>
    </div>

    <!-- Confition render -->
    <div>
      <button @click="isDisplay = !isDisplay">
        <span v-if="isDisplay">Hide</span>
        <span v-else>Show</span>
      </button>
      <div v-if="isDisplay">Duc Trung Hachi-X</div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  data() {
    return {
      isShow: true,
      ID: "v-id",
      inputDisabled: false,
      selected: true,
      ownerName: ["Pham Duc Trung", "Vu Thi Ngoc"],
      tech: {
        reactJs: "React Js",
        angular: "Angular",
        vueJs: "VueJs",
      },
      isDisplay: true,
    };
  },
  component: {
    Menu,
  },
};
</script>

<style>
.isSelected {
  color: tomato;
}
</style>
