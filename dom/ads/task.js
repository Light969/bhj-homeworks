const rotatorСase = Array.from(document.getElementsByClassName('rotator__case'));
// console.log(rotatorСase);
function getCurrentIndex() {
  return rotatorСase.findIndex(element => element.className.includes('rotator__case_active'));
}
// console.log(getCurrentIndex());

function next() {
    const current = getCurrentIndex();
    const active = current === rotatorСase.length - 1 ? 0 : current + 1;
    changeСase(current, active);
    // console.log(current); 
    // console.log(active); 
}

function changeСase(current, active) {
  rotatorСase[current].classList.remove('rotator__case_active');
  rotatorСase[active].classList.add('rotator__case_active');
}

setInterval(() => {
    next();
}, 1000);