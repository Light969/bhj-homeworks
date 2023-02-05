const tab = Array.from(document.getElementsByClassName('tab'));

const tabContent = Array.from(document.getElementsByClassName('tab__content'));

function delCurrentTabActive() {
    tab.forEach(tab => tab.classList.remove('tab_active'));
}

function delCurrentTabContentActive() {
    tabContent.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
}

for (let i = 0; i < tab.length; i++) { 
	tab[i].onclick = function() {
        delCurrentTabActive();
        delCurrentTabContentActive();
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
        return false;
    }
}


