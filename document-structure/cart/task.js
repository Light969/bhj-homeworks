const product = Array.from(document.getElementsByClassName('product'));
//console.log(product);
const cartProducts = document.querySelector('.cart__products');
//console.log(cartProducts);
for (let i = 0; i < product.length; i++) {
	const productQuantityControlInc = product[i].querySelector('.product__quantity-control_inc');
	const productQuantityControlDec = product[i].querySelector('.product__quantity-control_dec');
	const productQuantityValue = product[i].querySelector('.product__quantity-value');
	//console.log(productQuantityValue.textContent);
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
		let mg = product[i].getElementsByTagName('img');
		//let src = product[i].getElementsByTagName('img').getAttribute('src');
		//let src = img.getAttribute('src');
		
		cartProducts.insertAdjacentHTML('afterBegin', '<div class="cart__product" data-id="8"><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>');
		const cartProductCount = cartProducts.querySelector('.cart__product-count');
		cartProductCount.textContent = count;
		const cartProductId = cartProducts.querySelector('.cart__product');
		cartProductId.setAttribute('data-id', dataId);
		//const cartId = cartProductId.getAttribute('data-id');
		
		
		// console.log(cartProducts);
		//console.log(count);
        //console.log(dataId);
		//console.log(mg);
		// console.log(cartProductCount);
		// console.log(cartProductId);
		//console.log(cartId);
	}
}

