window.onload =() = {
//homes

axios.get(/api/homes').then((res) => {
	// console.log('res', res.data)
	let homes = res.data
	// target products
	let homes_ui = document.getElementById('products')

	// display each product in the DOM
	products.forEach((p) => {
		products_ui.insertAdjacentHTML('beforeEnd', `
		<div class="product">
			<div class="product-image">
				<i class="far fa-star"></i>


}
