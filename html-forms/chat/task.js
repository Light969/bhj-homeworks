const chatWidget = document.querySelector('.chat-widget');
// console.log(chatWidget);
chatWidget.onclick = function() {
  chatWidget.classList.add('chat-widget_active');
}

const chatWidgetInput = document.querySelector('.chat-widget__input');

chatWidgetInput.oninput = () => 
chatWidgetInput.submit();





//    document.addEventListener('keyup', onKey);
  //  function onKey(event) {
      // console.log(event.key);
 
    //  if (event.key === 'l') {
        // console.log('Hi');
        // console.log(this.currentSymbol.textContent);
      //  alert('Hi');
     
      //} 
    //}
