const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
// console.log(dropdownList);

for (let i = 0; i < dropdownList.length; i++) {
	dropdownList[i].onclick = function() {
        alert('Hi');
        // dropdownList[i].className = "dropdown__list dropdown__list_active";
    }
}

// const dropdownValue = document.getElementById("dropdown__value");
// dropdownValue.className = "modal modal_active";


// const sliderItems = Array.from(document.getElementsByClassName('slider__item'));




// const nextButton = document.getElementsByClassName('slider__arrow_next');
// const prevButton = document.getElementsByClassName('slider__arrow_prev'); 
// // const nextButton = {...document.getElementsByClassName('slider__arrow_next')};
// // const prevButton = {...document.getElementsByClassName('slider__arrow_prev')}; 

// for (let i = 0; i < nextButton.length; i++) {
// 	nextButton[i].onclick = next;
// 	prevButton[i].onclick = prev;
// }