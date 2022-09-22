let app = require('express')()
let bodyParser = require('body-parser')
let cors = require('cors')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/games', async (request, response) => {
	const res = await fetch('https://www.freetogame.com/api/games?platform=pc', {
		method: 'GET',
		mode: 'no-cors',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' }
	})
	const data = await res.json()
	response.json(data)
	
});

app.listen(3000)