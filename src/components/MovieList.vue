<template>
	<div class="container mt-4 mb-5">
		<div class="row">
			<div class="col-md-3" v-for="game in games" :key="game.id">
				<CardGame :title="game.title" />
			</div>
		</div>
	</div>
</template>

<script>
	import CardGame from './CardGame.vue'

	export default {
		name: 'MovieList',
		components: {
			CardGame
		},
		data() {
			return {
				games: []
			}
		},
		mounted() {
			this.load();
			console.log(this.games);
		},
		methods: {
			load: function() {
				fetch('http://localhost:3000/games', {
					method: 'GET',
					mode: 'no-cors',
					credentials: 'same-origin',
					headers: { 'Content-Type': 'application/json' }
				}).then((res) => {
					console.log(res.json());
				})
				.then((data) => {
					this.games = data;
				}).catch((error) => {
					console.log('Error:', error);
				});
			}
		}
	}
</script>