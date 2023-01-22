const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const nextButton = document.getElementsByClassName('slider__arrow_next');
const prevButton = document.getElementsByClassName('slider__arrow_prev'); 
// const nextButton = {...document.getElementsByClassName('slider__arrow_next')};
// const prevButton = {...document.getElementsByClassName('slider__arrow_prev')}; 

for (let i = 0; i < nextButton.length; i++) {
	nextButton[i].onclick = next;
	prevButton[i].onclick = prev;
}

// nextButton.onclick = next;
// prevButton.onclick = prev;

function getCurrentIndex() {
    for (let i = 0; i < sliderItems.length; i++)
    if (sliderItems[i].className.includes( 'slider__item_active' )) {
        return i; 
    }
 }

function next() {
	const current = getCurrentIndex();
	const active = getCurrentIndex() === sliderItems.length - 1 ? 0 : getCurrentIndex() + 1;
	changeSlide(current, active);
 }

function prev() {
	const current = getCurrentIndex();
	const active = getCurrentIndex() === 0 ? sliderItems.length - 1 : getCurrentIndex() - 1;
	changeSlide(current, active);
 }

function changeSlide(current, active) {
	sliderItems[current].classList.remove('slider__item_active');
	sliderItems[active].classList.add('slider__item_active');
}