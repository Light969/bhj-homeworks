const loader = document.querySelector('.loader');
const item = Array.from(document.getElementsByClassName('item'));
// console.log(item);


const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        // console.log(xhr.responseText);
        console.log(xhr.CharCode);
        item[0].insertAdjacentHTML('afterBegin', '<div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div>');
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();



