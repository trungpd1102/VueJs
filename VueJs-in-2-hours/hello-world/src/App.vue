<template>
  <div id="app">
    <!-- <h1>{{$t('welcome')}}</h1>
    <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
      <flag :iso="entry.flag" :sqared=false />
      {{entry.title}}
    </button>
    <Task v-for="(task, index) in tasks" :key="index" :taskData="task" />
    <hr />
    <TagSelector />
    <TotalMoney /> -->
  </div>
</template>

<script>
// import Task from "./components/Task.vue";
// import TagSelector from "./components/TagSelector/TagSelector.vue";
// import TotalMoney from "./components/TotalMoney.vue";
// import i18n from './i18n';

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
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "vn", language: "vi", title: "Tieng Viet" },
      ],
    };
  },

  components: {
    // Task,
    // TagSelector,
    // TotalMoney,
  },

  methods: {
    // changeLocale(locale){
    //   i18n.locale = locale;
    // }
  },
};
</script>

<style>
body {
  font-size: 22px;
}
</style>
