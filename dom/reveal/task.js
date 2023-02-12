const reveal = Array.from(document.getElementsByClassName('reveal'));
for (let i = 0; i < reveal.length; i++) {
    function isVisible(reveal) {
        const { innerHeight } = window;
        const { top } = reveal.getBoundingClientRect();
        if (top < innerHeight && top > 0) {
        reveal.classList.add("reveal_active");
        } else {
        reveal.classList.remove("reveal_active");
        }
    }
    document.addEventListener('scroll', () => isVisible(reveal[i]));
}

// 2й вариант решения
// const reveal = Array.from(document.getElementsByClassName('reveal'));
// // console.log(reveal);
// for (let i = 0; i < reveal.length; i++) {
//     function isVisible(element) {
//         // const top = element.getBoundingClientRect().top;
//         // const bottom = element.getBoundingClientRect().bottom;
//         // Одно и то же.
//         const { top, bottom } = element.getBoundingClientRect();
//         // console.log(top);
//         // console.log(bottom);
//         if (bottom < 0) {
//             reveal[i].classList.remove('reveal_active');
//             console.log('By');
//             return;
//         }
//         if (top > window.innerHeight) {
//             reveal[i].classList.remove('reveal_active');
//             console.log('By');
//             return;
//         }
//         reveal[i].classList.add('reveal_active');
//         console.log('Hi');
//         return;
//     }
//     document.addEventListener('scroll', (event) => isVisible(reveal[i]));
// }
