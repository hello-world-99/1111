const app = new Vue({
	el: '#app',
	data: {
		message: ''
	},
	methods: {
		function1: function() {
			fetch('http://localhost:3000/')
			.then(res => res.json())
			.then(result => {
				this.message = result.message
				console.log("Function 1")
			});
		},
		function2: function() {
			fetch('http://localhost:3000/dagree_button', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: ''
			})
			.then(res => res.json())
			.then(result => this.message = result.message);
		},
		function3: function() {
			fetch('http://localhost:3000/lev_button', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: ''
			})
			.then(res => res.json())
			.then(result => this.message = result.message);
		}
	}
});
