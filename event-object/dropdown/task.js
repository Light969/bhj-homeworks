const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.onclick = function() {
    const dropdownList = document.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
    // dropdownValue.textContent = "ПРИВЕТ";  
}

const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].onclick = function() {
      // console.log(dropdownItem[i]);
      const dropdownLink = dropdownItem[i].querySelector('.dropdown__link');    
      // console.log(dropdownLink.textContent);
      dropdownValue.textContent = dropdownLink.textContent;
      const dropdownList = document.querySelector('.dropdown__list');
      dropdownList.classList.toggle('dropdown__list_active');
      return false;  
    };
}

// 2й Вариант решения.

// for (let i = 0; i < dropdownItem.length; i++) {
//     dropdownItem[i].addEventListener( "click" , function() {
//       const dropdownLink = dropdownItem[i].querySelector('.dropdown__link');    
//       dropdownValue.textContent = dropdownLink.textContent;
//       const dropdownList = document.querySelector('.dropdown__list');
//       dropdownList.classList.toggle('dropdown__list_active');
//       event.preventDefault();
//     }); 
// }