document.forms.form.addEventListener('submit', (e) => {

    e.preventDefault();
    const xhr = new XMLHttpRequest();

    // отслеживаем процесс отправки
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById( 'progress' );
        let progressValue = `${event.loaded}` / `${event.total}`;
        progress.value = progressValue;
        // console.log(progressValue);
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
    };

    // Ждём завершения: неважно, успешного или нет
    xhr.onloadend = function() {
      if (xhr.status == 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    const formElement = document.getElementById('form');
    // console.log(formElement);
    const formData = new FormData(formElement);
    
    xhr.send(formData);

});




