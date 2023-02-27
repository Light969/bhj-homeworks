const interests = [...document.querySelectorAll('.interests')];
// console.log(interests);
for (let i = 1; i < interests.length; i++) {
    const interest = interests[i].closest('.interest');
    // console.log(interest);
    const label = interest.querySelector('label');
    // console.log(label);
    const interestCheck = label.querySelector('.interest__check');
    // interestCheck.addEventListener('change', () => {console.log(interestCheck.checked)});
    interestCheck.addEventListener('change', () => {
        if (interestCheck.checked === true) {
            // console.log('Hi'); 
            [...interests[i].querySelectorAll('.interest__check')].forEach(element => {
                element.checked = true;
            });
        };
        if (interestCheck.checked === false) {
            // console.log('By'); 
            [...interests[i].querySelectorAll('.interest__check')].forEach(element => {
                element.checked = false;
            });
        }
    });
}












// let checkbox = [];
//     if (interest != null) {
//         checkbox.push(interest);
//     }
// console.log(checkbox);




