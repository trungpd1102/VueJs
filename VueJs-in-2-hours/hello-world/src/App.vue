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
		<button :disabled="isDiable">OK</button>
		<JSPDF />
	</div>
</template>

<script>
// import Task from "./components/Task.vue";
// import TagSelector from "./components/TagSelector/TagSelector.vue";
// import TotalMoney from "./components/TotalMoney.vue";
// import i18n from './i18n';
import JSPDF from '@/components/jsPDF/index.vue';

export default {
	name: 'App',
	data() {
		return {
			tasks: [
				{ content: 'Learn VueJs', done: false },
				{ content: 'Do ticket #150', done: false },
				{ content: 'Learn Japanese', done: false },
				{ content: 'Learn English', done: false },
			],
			languages: [
				{ flag: 'us', language: 'en', title: 'English' },
				{ flag: 'vn', language: 'vi', title: 'Tieng Viet' },
			],
			isDiable: true,
		};
	},

	components: {
		// Task,
		// TagSelector,
		// TotalMoney,
		JSPDF,
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
	width: 100%;
	height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	font-size: 0.8em;
}
</style>
