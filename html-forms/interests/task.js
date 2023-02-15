const interests = [...document.querySelectorAll('.interests')];
let checkbox = [];
for (let i = 0; i <= interests.length-1; i++) {
    const interest = interests[i].closest('.interest');
    console.log(interest);
    if (interest != null) {
        checkbox.push(interest);
    }
}
console.log(checkbox);

for (let i = 0; i <= checkbox.length-1; i++) {
    checkbox[i].onchange = function() {
        // console.log([...checkbox[i].querySelectorAll('.interest__check')]);
        // console.log(checkbox[i].querySelectorAll('.interest__check')[1]);
        if (checkbox[i].checked = true) {
            // checkbox[i].querySelectorAll('.interest__check')[1].checked = true;
            // checkbox[i].querySelectorAll('.interest__check')[2].checked = true;
            [...checkbox[i].querySelectorAll('.interest__check')].forEach(element => {
                element.checked = true;
            });
        }; 
        if (checkbox[i].checked = false) {
            [...checkbox[i].querySelectorAll('.interest__check')].forEach(element => {
                element.checked = false;
            });
        }
    }
}

