const pollTitle = document.getElementById('poll__title');
// console.log(pollTitle);
const pollAnswers = document.getElementById('poll__answers');
// console.log(pollAnswers);

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText);
        //Проверяем возвращаемые данные
        // alert(typeof(xhr.responseText));
        //Преобразуем строку в объект (responseText и response - одно и то же)
        const object = JSON.parse(xhr.response);
        // console.log(object);
        // console.log(object.data.title);
        // console.log(object.data.answers);

        pollTitle.textContent = `${object.data.title}`;
        let answers = object.data.answers;
        // console.log(answers);
        for (let i = 0; i < answers.length; i++) {
            pollAnswers.insertAdjacentHTML('afterBegin', `
            <button class="poll__answer">${answers[i]}</button>
            `);
        }
        const pollAnswer = Array.from(document.getElementsByClassName('poll__answer'));
        // console.log(pollAnswer);
        pollAnswer.forEach(answer => answer.onclick = function() {
            alert('Спасибо, ваш голос засчитан!');
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();