// Database
const db = require('../db')

module.exports = (req, res) => {
	db.query(`SELECT * FROM countries`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
