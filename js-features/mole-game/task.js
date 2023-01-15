const holes = document.getElementsByClassName("hole");
// console.log(holes[1].id);
// alert(holes[1].id);
// console.log(holes[1].className);

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function() {
        if (holes[i].className.includes( 'hole_has-mole' )) {
            const clickerDead = document.getElementById("dead");
                if (clickerDead.textContent >= 9) {
                    alert('Победа');
                } clickerDead.textContent = Number(clickerDead.textContent) + 1;
        } else {
            const clickerLost = document.getElementById("lost");
                if (clickerLost.textContent >= 4) {
                    alert('Вы проиграли!');
                } clickerLost.textContent = Number(clickerLost.textContent) + 1;
        }
    }     
}

// for (let i = 0; i < holes.length; i++) {
//     holes[i].onclick = function() {
//         if (holes[i].className.includes( 'hole_has-mole' )) {
//             alert('Hi'); 
//         } else {
//             alert('Bye');
//         }
//     }     
// }