const menuSub = document.querySelectorAll('.menu_sub');              
for (let i = 0; i < menuSub.length; i++) {                         
  const menuItem = menuSub[i].closest('.menu__item');              
  menuItem.onclick = function() {
    if (menuItem.closest('.menu_sub') === null) {
    const activeSubMenu = document.querySelector('.menu_active'); 
      // if (activeSubMenu != null && activeSubMenu != menuSub[i] && menuItem.closest('.menu_sub') === null)                            
      if (activeSubMenu != null && activeSubMenu != menuSub[i]) { // открытое подменю существует и не является тем, по которому был клик
        activeSubMenu.classList.remove('menu_active'); // закрываем предыдущее подменю
        menuSub[i].classList.add('menu_active'); // открываем новое подменю
        console.log(menuItem.closest('.menu_sub'));
        return false;
      }
	  menuSub[i].classList.toggle('menu_active');
	  return false;
    }
  }
}