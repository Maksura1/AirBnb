//await for window load
window.onload = () => {
	//let sidebar = document.getElementById('sidebar')
	let ul = document.getElementsByTagName('ul')[0]
	console.log(ul)
	let cities = ['Paris', 'New York', 'Sydney', 'Cape Town']
	cities.forEach((c) => {
		ul.insertAdjacentHTML('beforeEnd', `
		<li>
		 <a href ="#"> ${c}</a>
		</li>`
	)
	})
}
