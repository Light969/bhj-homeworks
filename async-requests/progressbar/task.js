document.forms.form.addEventListener('submit', (e) => {

    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log(xhr.responseText);
        }
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    const formData = new FormData(document.forms.form);
    
    xhr.send(formData);

});




