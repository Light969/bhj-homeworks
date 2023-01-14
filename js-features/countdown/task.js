const addText = function(){
    const timer = document.getElementById("timer");   
        if (timer.textContent <= 0) {
            const status = document.getElementById('status');
            status.textContent = undefined; 
            alert('Вы победили в конкурсе!');
        } else {
           timer.textContent -= 1;
        }
    }
setInterval(addText, 1000)
