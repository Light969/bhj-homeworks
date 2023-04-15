const modalMain = document.querySelector('.modal');
modalMain.className = "modal modal_active";

const modalClose = document.querySelector('.modal__close');
modalClose.onclick = function() {
	var date = new Date(new Date().getTime() + 60 * 1000);
    document.cookie = "hide_popup=yes; path=/; expires=" + date.toUTCString();

    modalMain.className = "modal";
}

function getCookie(name) {
	let pairs = document.cookie.split('; ');
	let cookie_obj = {};
        for (let i=0; i<pairs.length; i++) {
            let nv = pairs[i].split('=');
            cookie_obj[nv[0]] = nv[1]; 
        }
        return cookie_obj[name];
}

if ( getCookie('hide_popup') == 'yes' ) {
	modalMain.className = "modal";
}