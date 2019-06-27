// require package
const {Client} = require('pg')

// create connection to database on postgres
const db = new Client({
	connectionString: 'postgres://maksuraalam:@localhost:5432/maksuraalam'
})

// connect to database
db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

//export db
module.exports = db
