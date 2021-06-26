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

<script>
export default {
  data() {
    return {
      languages: [
        { name: "Javascript", selected: false },
        { name: "NodeJs", selected: false },
        { name: "VueJs", selected: false },
        { name: "ReactJs", selected: false },
        { name: "Angular", selected: false },
      ],
    };
  },
};
</script>

<style>
.list div {
  display: inline-block;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}

.langSelected {
  background-color: dodgerblue;
  color: white;
}
</style>