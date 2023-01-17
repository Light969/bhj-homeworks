const modalMain = document.getElementById("modal_main");
    const addClass = modalMain.className;
    modalMain.className = "modal modal_active";

const modalClose = document.getElementsByClassName("modal__close");
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        if (modalClose[i].className.includes( 'modal__close_times' )) {
            const modalMain = document.getElementById("modal_main");
            const addClass = modalMain.className;
            modalMain.className = "modal"; 
            
            const modalSuccess = document.getElementById("modal_success");
            const delClass = modalSuccess.className;
            modalSuccess.className = "modal"; 
        } 
    }     
}    

const showSuccess = document.getElementsByClassName("show-success");
for (let i = 0; i < showSuccess.length; i++)
    showSuccess[i].onclick = function() {
        const modalMain = document.getElementById("modal_main");
        const addClass = modalMain.className;
        modalMain.className = "modal";
        
        const modalSuccess = document.getElementById("modal_success");
        const delClass = modalSuccess.className;
        modalSuccess.className = "modal modal_active"; 
    }
