<template>
	<TopHeader />
	<MovieList />
</template>

<script>
	import TopHeader from './components/TopHeader.vue'
	import MovieList from './components/MovieList.vue'
	
	export default {
		name: 'App',
		components: {
			TopHeader,
			MovieList
		}
	}
</script>

<style>
	#app {
		
	}
</style>
