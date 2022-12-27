<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";

const deepValues = ref();
const values = ref();

fetch("api/express/deep/url")
	.then((response) => response.json())
	.then((data) => {
		deepValues.value = data;
	});
fetch("api/express")
	.then((response) => response.json())
	.then((data) => {
		values.value = data;
	});
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo 2" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<pre>
   {{ deepValues }}
  	</pre>
	<pre>
   {{ values }}
  	</pre>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
