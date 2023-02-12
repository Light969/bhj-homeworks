const chatWidget = document.querySelector('.chat-widget');
// console.log(chatWidget);
chatWidget.onclick = function() {
  chatWidget.classList.add('chat-widget_active');
}
