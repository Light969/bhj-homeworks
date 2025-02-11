const chatWidget = document.querySelector('.chat-widget');
// console.log(chatWidget);
chatWidget.onclick = function() {
  chatWidget.classList.add('chat-widget_active');
}

const chatWidgetInput = document.querySelector('.chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');

function getCurrentFormattedTime() {
  let now = new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit", 
    minute: "2-digit"
  });
  return now;
}

chatWidgetMessages.innerHTML += `
<div class="message">
  <div class="message__time">${getCurrentFormattedTime()}</div>
  <div class="message__text">
    Что хотели?
  </div>
</div>
`;

chatWidgetInput.addEventListener('keyup', onKey);
function onKey(event) {
  if (event.keyCode === 13) {
    chatWidgetMessages.insertAdjacentHTML('beforeend', `
    <div class="message message_client">
      <div class="message__time">${getCurrentFormattedTime()}</div>
      <div class="message__text">${chatWidgetInput.value}</div>
    </div>`
    );
    robot();
    chatWidgetInput.value = "";
  }
}

function robot() {
  chatWidgetMessages.innerHTML += `
  <div class="message">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
    ${autocomplete[getRandomInt(7)]}
    </div>
  </div>
`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(7));

let autocomplete = [
  'Вы не купили не одного товара, чтобы нам писать.',
  'Кто тут?',
  'Где Ваша совесть?',
  'К сожалению все операторы заняты. Не пишите нам больше!',
  'Добрый день! До свидания!',
  'Мы ничего не будем Вам продавать.',
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет.'
];

