const app = new Vue({
	el: '#app',
	data: {
		message: ''
	},
	methods: {
		function1: function() {
			fetch('/')
				.then(res => res.json())
				.then(result => this.message = result.message);
		},
		function2: function() {
			fetch('/dagree_button', {method: 'POST', headers: { 'Content-Type': 'application/json'}})
				.then(res => res.json())
				.then(result => this.message = result.message);
		},
		function3: function() {
			fetch('/lev_button', {method: 'POST', headers: { 'Content-Type': 'application/json'}})
				.then(res => res.json())
				.then(result => this.message = result.message);
		}
	}
	//tst
});

