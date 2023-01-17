const menuLink = Array.from(document.querySelectorAll('.menu__link'));
    for (let i = 0; i < menuLink.length; i++) {
        // console.log(menuLink);
        menuLink[i].onclick = function() {
            const menu = menuLink[i].closest('.menu');
            menu.classList.toggle('menu_active');
            return false;
        }
    }