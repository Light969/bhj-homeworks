const menuSub = document.querySelectorAll('.menu_sub');
  for (let i = 0; i < menuSub.length; i++) {
    const menuItem = menuSub[i].closest('.menu__item');
    menuItem.onclick = function() {
      for (let i = 0; i < menuSub.length; i++) {
        if (menuSub[i].className.includes('menu_active')) {
          menuSub[i].className.remove('menu_active');
        }
    }
    menuSub[i].classList.toggle('menu_active');
    return false;
    //alert('Hi');
    }
  }

// const menuLink = Array.from(document.querySelectorAll('.menu__link'));
//     for (let i = 0; i < menuLink.length; i++) {
//         // console.log(menuLink);



// const menuSub = document.querySelectorAll('.menu_sub');
//   for (let i = 0; i < menuSub.length; i++) {
//     const menuItem = menuSub[i].closest('.menu__item');
//     menuItem.onclick = function() {
//       for (let i = 0; i < menuSub.length; i++) {
//         if (menuSub[i].className.includes('menu_active')) {
//           menuSub[i].className.remove('menu_active');
//         }
//     }
//     menuSub[i].classList.toggle('menu_active');
//     return false;
//     //alert('Hi');
//     }
//   }