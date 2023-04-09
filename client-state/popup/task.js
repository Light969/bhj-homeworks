const modalMain = document.querySelector('.modal');
modalMain.className = "modal modal_active";

const modalClose = document.querySelector('.modal__close');
    modalClose.onclick = function() {
        modalMain.className = "modal";   
    }
	
console.log(document.cookie);

setCookie('name', 'Mike');
setCookie('year', 2023);

console.log(document.cookie);

function setCookie(name, value) {
	document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	return cookie.substr(name.length + 1);
}

console.log(getCookie('name'));