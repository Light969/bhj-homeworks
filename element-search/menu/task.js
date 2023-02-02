const menuSub = document.querySelectorAll('.menu_sub');              
for (let i = 0; i < menuSub.length; i++) {                         
  const menuItem = menuSub[i].closest('.menu__item');              
    menuItem.onclick = function() {
      const activeSubMenu = document.querySelector('.menu_active');
	  // alert(activeSubMenu);                              
      for (let i = 0; i < menuSub.length; i++) {
        if (activeSubMenu != null) {
        // alert('В 1м if');
          activeSubMenu.classList.remove('menu_active');	
        };
        if (activeSubMenu === menuSub[i]) {
        // alert('Во 2м if');
          menuSub[i].classList.add('menu_active');
          return;
        }	 
      } 
	// alert('В toggle');
	menuSub[i].classList.toggle('menu_active');
	return false;
    }
}