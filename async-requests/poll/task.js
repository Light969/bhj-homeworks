const pollTitle = document.getElementById('poll__title');
// console.log(pollTitle);
const pollAnswers = document.getElementById('poll__answers');
// console.log(pollAnswers);

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText);
        pollTitle.textContent = 'Как вы относитесь к собакам?';
        pollAnswers.insertAdjacentHTML('afterBegin', '<button class="poll__answer">Хорошо</button><button class="poll__answer">Отлично</button><button class="poll__answer">Я люблю собак</button><button class="poll__answer">Кто тут?</button>');
        const pollAnswer = Array.from(document.getElementsByClassName('poll__answer'));
        // console.log(pollAnswer);
        pollAnswer.forEach(answer => answer.onclick = function() {
            alert('Спасибо, ваш голос засчитан!');
        });

        // Тоже самое.
        // for (let i = 0; i < pollAnswer.length; i++) {
        //     pollAnswer[i].onclick = function() {
        //         alert('Спасибо, ваш голос засчитан!');
        //     }
        // }

    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();