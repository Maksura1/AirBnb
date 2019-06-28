//
const db = require('../db')

//connect to database
module.exports = (req, res) => {

		let query = `SELECT * FROM homes `

		if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
			query += `WHERE `
		}
		if (req.query.country) {
			query += `country = ${req.query.country} `
		}
		if (req.query.city) {
			query += `city = ${req.query.city} `
		}

		db.query(query, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
