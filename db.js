// require package
const {Client} = require('pg')

// create connection
const db = new Client({
	connectionString: 'postgres://maksuraalam@localhost:5432/AirBnb'
})

// connect to database
db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

//export db on index.js
module.exports = db
