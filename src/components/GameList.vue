<template>
	<div class="container mt-4 mb-5">
		<div class="row">
			<div class="col-md-3" v-for="game in games" :key="game.id">
				<CardGame
					:title="game.title"
					:image="game.thumbnail"
					:description="game.short_description"
					:genre="game.genre"

					:platform="game.platform"
					:publisher="game.publisher"
					:link="game.game_url"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import CardGame from './CardGame.vue'

	export default {
		name: 'GameList',
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
					headers: { 'Content-Type': 'application/json' }
				}).then((res) => {
					return res.json();
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