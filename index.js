// index requires express, pathto run
const express = require('express')
const path = require('path')
const app = express()


// run everything inside client as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/homes.html'))
	console.log('__dirname', __dirname)
})
//this is just a quidk ranaks s 
//Run Server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
