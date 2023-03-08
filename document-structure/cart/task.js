const product = Array.from(document.getElementsByClassName('product'));
//console.log(product);
const cartProducts = document.querySelector('.cart__products');
for (let i = 0; i < product.length; i++) {
	const productQuantityControlInc = product[i].querySelector('.product__quantity-control_inc');
	const productQuantityControlDec = product[i].querySelector('.product__quantity-control_dec');
	const productQuantityValue = product[i].querySelector('.product__quantity-value');
	productQuantityControlInc.onclick = function() {
		productQuantityValue.textContent = Number(productQuantityValue.textContent) + 1;
		return false;
	}
	productQuantityControlDec.onclick = function() {
		if (productQuantityValue.textContent >= 2) {
		productQuantityValue.textContent = Number(productQuantityValue.textContent) - 1;	
		}
		return false;	
	}
	
	const productAdd = product[i].querySelector('.product__add');
	productAdd.onclick = function() {
		let count = productQuantityValue.textContent;
		let dataId = product[i].getAttribute('data-id');
		let img = product[i].querySelector('.product__image').getAttribute('src');
		// let src = product[i].getElementsByTagName('img').getAttribute('src'); Не работает, так как TagName формирует коллекцию а не массив
	
		let cartProduct = [...cartProducts.querySelectorAll('.cart__product')];
		if (cartProduct.find(product => product.getAttribute('data-id') === dataId)) {
			let cartProductFind = cartProduct.find(product => product.getAttribute('data-id') === dataId);
			const cartProductCount = cartProductFind.querySelector('.cart__product-count');
			cartProductCount.textContent = Number(cartProductCount.textContent) + Number(`${count}`);
		} else {
			cartProducts.insertAdjacentHTML('afterBegin', `
			<div class="cart__product" data-id=${dataId}>
			  <img class="cart__product-image" src=${img}>
			  <div class="cart__product-count">${count}</div>
			</div>`);
		};               
	}
}

