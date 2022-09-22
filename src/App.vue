<template>
	<TopHeader />
	<GameList />
</template>

<script>
	import TopHeader from './components/TopHeader.vue'
	import GameList from './components/GameList.vue'
	
	export default {
		name: 'App',
		components: {
			TopHeader,
			GameList
		}
	}
</script>

<style>
	#app {
		
	}
</style>
