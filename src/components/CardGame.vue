<template>
	<div class="card mb-4" style="width: 18rem;">
		<img :src="image" class="card-img-top" alt="Image">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ descriptionMod }}</p>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item">Genre
				<span class="badge bg-primary">{{ genre }}</span>
			</li>
			<li class="list-group-item">Platform
				<span class="badge bg-primary">{{ platform }}</span>
			</li>
			<li class="list-group-item">Publisher
				<span class="badge bg-primary">{{ publisher }}</span>
			</li>
		</ul>
		<div class="card-body d-grid gap-2">
			<a :href="link" class="btn btn-primary">Watch</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardGame',
		props: {
			title: String,
			image: String,
			description: String,
			genre: String,
			platform: String,
			publisher: String,
			link: String
		},
		data() {
			return {
				text: 'Test'
			}
		},
		computed: {
			descriptionMod() {
				let text = this.$props.description;
				if (text.length > 80) {
					text = text.slice(0,80) + '...';
				}
				return text;
			}
		}
	}
</script>