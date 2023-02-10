const menuSub = document.querySelectorAll('.menu_sub');              
for (let i = 0; i < menuSub.length; i++) {                         
  const menuItem = menuSub[i].closest('.menu__item'); 
  const menuLink = menuItem.querySelector('a');
  menuLink.onclick = function() {
    const activeSubMenu = document.querySelector('.menu_active'); 	   
	if (activeSubMenu != null && activeSubMenu != menuSub[i]) { 
	activeSubMenu.classList.remove('menu_active');
	} 	  
    menuSub[i].classList.toggle('menu_active');
    return false;
  }
}


//-------------------Второй рабочий вариант решения

// const menuLink = [...document.querySelectorAll('.menu__link')];
// menuLink.forEach((element) => {
//   element.onclick = function () {
//     const menuItem = element.closest('.menu__item');
// 	const menuSub = menuItem.querySelector('.menu_sub');
//     const activeSubMenu = document.querySelector('.menu_active');
// 	    if(!menuSub) {
//         return;
//       };
//       if (menuSub != activeSubMenu && activeSubMenu !=null) {
//         activeSubMenu.classList.remove('menu_active');		
// 		  menuSub.classList.add('menu_active');
//         return false;
//       }
//       menuSub.classList.toggle('menu_active');
//       return false; 
//   }
// });







