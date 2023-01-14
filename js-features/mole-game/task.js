const hole = document.getElementsByClassName("hole");
let arr = [];
for (let i = 0; i < hole.length; i++) {
    arr.push(hole[i].id);
}
// alert(arr);

for (let i = 0; i < arr.length; i++)
hole.onclick = function() {
    if (hole.className.includes( 'hole_has-mole' )) {
        const clickerTwo = document.getElementById("dead");
        clickerTwo.textContent = Number(clickerTwo.textContent) + 1;
    } else {
        const clicker = document.getElementById("lost");
        clicker.textContent = Number(clicker.textContent) + 1;
    }
}
