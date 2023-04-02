const loader = document.querySelector('.loader');
// const item = Array.from(document.getElementsByClassName('item'));
const item = document.querySelector('.item');
// console.log(item);


const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        // console.log(xhr.responseText);
        // alert(xhr.responseText);
        //Возвращаемые данные в формате - строки
        // alert(typeof(xhr.responseText));
        //Преобразовываем данные в объект
        function restoreObject() {
            return JSON.parse(xhr.responseText);
        }
        // console.log(restoreObject());
        const object = restoreObject();
        // console.log(object);
        const valute = object.response.Valute;
        // console.log(valute);
        for (var key in valute) {
        //   console.log("Ключ: " + key + " значение: " + valute[key]);
        //   console.log("Ключ: " + key + " значение: " + valute[key].CharCode);
        //   console.log("Ключ: " + key + " значение: " + valute[key].Value);
          item.insertAdjacentHTML('afterBegin', `
            <div class="item__code">${valute[key].CharCode}</div>
            <div class="item__value">${valute[key].Value}</div>
            <div class="item__currency">руб.</div>
          `);
        };
        // item[0].insertAdjacentHTML('afterBegin', '<div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div>');
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();



