// index requires express, pathto run
const express = require('express')
const path = require('path')
const app = express()

//
app.get('/api/homes', require('./controller/homes_get'))
app.get('/api/cities', require('./controller/cities_get'))
app.get('/api/countries', require('./controller/countries_get'))
app.get('/api/types', require('./controller/types_get'))

// run everything inside client as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/homes.html'))
	console.log('__dirname', __dirname)
})


//Run Server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
