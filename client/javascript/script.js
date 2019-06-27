//await for window load
window.onload = () => {
	//let sidebar = document.getElementById('sidebar')
	let ul_city = document.getElementById('city')
	console.log(ul_city)
	let cities = ['Paris', 'New York', 'Sydney', 'Cape Town']
	cities.forEach((c) => {
		ul_city.insertAdjacentHTML('beforeEnd', `
		<li>
		 <a href="#"> ${c}</a>
		</li>
	`)
	})


let ul_country = document.getElementById('country')
console.log(ul_country)
let countries = ['France', 'USA', 'South Africa', 'Asutralia']
countries.forEach((c) => {
	ul_country.insertAdjacentHTML('beforeEnd',`
<li>
 <a href ="#"> ${c} </a>
</li>
 `)
})

}
