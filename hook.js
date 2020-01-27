/*
	Basic endpoint to act as a placeholder webhook
*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
	console.log(req.body);
	res.send("Accepted");
})

app.listen(port, () => console.log(`Webhook listening port ${port}!`))
