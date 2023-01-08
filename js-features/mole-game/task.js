// hole.className.includes( 'hole_has-mole' );

// for (let i = 0, i < document..., )

const element = document.getElementById("hole1");   
element.onclick = function() {
    // if (hole.className.includes( 'hole_has-mole' )) {
        const clickerTwo = document.getElementById("dead");
        clickerTwo.textContent += 1;
    // } else {
        const clicker = document.getElementById("lost");
        clicker.textContent += 1;
    // }
};

