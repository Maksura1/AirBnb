// define database
const db = require('../db')

//connect to database
module.exports = (req, res) => {
	db.query(`SELECT * FROM homes`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
