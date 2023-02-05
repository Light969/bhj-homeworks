// const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
// console.log(dropdownLink);

const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.onclick = function() {
    const dropdownList = document.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
    // dropdownValue.textContent = "ПРИВЕТ";  
}

const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));


for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener( "click" , function() {
    // alert('Hi!')
    dropdownValue.textContent = "Hi";
    // return false;
        
    });
}
