const menuLink = Array.from(document.querySelectorAll('.menu__link'));
    for (let i = 0; i < menuLink.length; i++) {
        // console.log(menuLink);

        menuLink[i].onclick = function() {
            const menuItem = menuLink[i].closest('.menu__item');
            for (let i = 0; i < menuItem.length; i++) {
                const menuSub = menuItem[i].closest('.menu_sub');
                for (let i = 0; i < menuSub.length; i++) {
                    menuSub.classList.toggle('menu_active');
                    return false;
                }

            }
        }



        // menuLink[i].onclick = function() {
        //     const menuItem = menuLink[i].closest('.menu__item');
        //     for (let i = 0; i < menuItem.length; i++) {
        //         if (menuItem[i].parentElement.className.includes( 'menu_sub' )) {
        //             menuItem[i].parentElement.classList.toggle('menu_active');
        //             return false;
        //         }
        //     }
        // }

        // menuLink[i].onclick = function() {
        //     const menu = menuLink[i].closest('.menu');
        //         if (menu.className.includes( 'menu_sub' )) {
        //             menu.classList.toggle('menu_active');
        //             return false;
        //         }
        // }

        // menuLink[i].onclick = function() {
        //     const menu = menuLink[i].closest('.menu_sub');
        //     menu.classList.toggle('menu_active');
        //     return false;
        // }

        // menuLink[i].onclick = function() {
        //     const menu = menuLink[i].closest('.menu');
        //     menu.classList.toggle('menu_active');
        //     return false;
        // }

    }
