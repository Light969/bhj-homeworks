const element = document.getElementById("cookie");
    function changeSizes() {
        if (element.width === 200) {
            element.width = 250;
            const clicker = document.getElementById("clicker__counter");
            clicker.textContent = Number(clicker.textContent) + 1;
          } else {
            element.width = 200;
            const clicker = document.getElementById("clicker__counter");
            clicker.textContent = Number(clicker.textContent) + 1;
          }
    };
    element.onclick = changeSizes;

// element.onclick = function() {
//     const clicker = document.getElementById("clicker__counter");
//     clicker.textContent = Number(clicker.textContent) + 1;
//     // alert(typeof(Number(clicker.textContent)));
//     // alert(Number(clicker.textContent));
// };

    
