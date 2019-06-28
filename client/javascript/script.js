
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
			<h6> ${e.name}</h6>
			<h7> Price: $${e.price} <br>
			Rating: <i class="fas fa-star"></i></h7>
		</div>
		`)
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
	let cities_ui = document.getElementById('city')

	//display cities on the sidebar
	cities.forEach((e) => {
		cities_ui.insertAdjacentHTML('afterbegin',`
    <li id="${e.id}" class="country"> ${e.name}</li>
	`)
	})
})

//create an eventlister for Australia
document.addEventListener('click', (e) => {
	// ALL CLICKS HERE
	// console.log("helo World")
	if (e.target.classList.contains('country')) {
		// console.log(e.target.id)//
		//get target categories
		axios.get(`/api/homes?country=${e.target.id}`).then((res)=>{
			let homes = res.data
			let homes_ui = document.getElementById('properties')
			homes_ui.innerHTML = ''// makes default properties go away
			homes.forEach((e) => {
				homes_ui.insertAdjacentHTML('afterbegin', `
				<div class="card">
					<img src="${e.images}" alt="">
					<h6> ${e.name}</h6>
					<h7> Price: $${e.price} <br>
					Rating: <i class="fas fa-star"></i></h7>
				</div>
				`)
			})

		})
	}//clicking codes end here
})


}///end of window load
