const addText = function(){
    const timer = document.getElementById("timer");   
        if (timer.textContent <= 0) {
           alert('Вы победили в конкурсе!');
        } else {
           timer.textContent -= 1;
        }
    }
setInterval(addText, 1000)
