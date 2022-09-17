const app = new Vue({
	el: '#app',
	data: {
		products: []
	},
	methods: {
		function1: function() {
			fetch('https://dummyjson.com/products')
				.then(res => res.json())
				.then(result => this.products = result.products);
		},
		function2: function() {
			fetch('https://dummyjson.com/products')
				.then(res => res.json())
				.then(result => this.products = result.products);
		},
		function3: function() {
			fetch('https://dummyjson.com/products')
				.then(res => res.json())
				.then(result => this.products = result.products);
		}
	}
});
