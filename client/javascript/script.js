
window.onload = () => {

axios.get('/api/homes').then((res) => {
	// console.log('res', res.data)
	let homes = res.data // the resulting data from homes

	//target homes
	let homes_ui = document.getElementById('properties')

	//display homes in DOM
	homes.forEach((e) => {
		homes_ui.insertAdjacentHTML('afterbegin', `
		<div class="card">
			<img src="${e.images}" alt="">
			<h5> ${e.name}</h5>
			<p>Price: ${e.price}</p>
			<p><i class="fas fa-star"></i></p>
		</div>
		`
	)
	})
})//end of all homes


//create sidebar for country filter
axios.get('/api/countries').then((res)=> {
	// console.log('res', res.data)
	let countries = res.data// get resulting countries_get

	//target countries_get
	let countries_ui = document.getElementById('country')

	//display countries in UI
	countries.forEach((e) => {
		countries_ui.insertAdjacentHTML('afterbegin', `
		<li id="${e.id}" class="country"> ${e.name}</li>
		`)
	})
})// end of countries list on sidebar

//create sidebar for city Filter
axios.get('/api/cities').then((res) => {
	// console.log('res', res.data)
	let cities = res.data//get resulting cities_get

	//target countries_get
	let cities_ui = document.getElementById
})



//create an eventlister for Australia
document.addEventListener('click', (e) => {
	// console.log("helo World")
	if (e.target.classList.contains('country')) {
		// console.log(e.target.id)//
		//get target categories
		axios.get('/api/')
	}
})


}///end of window load
