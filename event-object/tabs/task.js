const tab = Array.from(document.getElementsByClassName('tab'));
// console.log(tab);

const tabContent = Array.from(document.getElementsByClassName('tab__content'));
// console.log(tabContent);

// function getCurrentIndexTab() {
//     for (let i = 0; i < tab.length; i++)
//     if (tab[i].className.includes( 'tab_active' )) {
//         return i; 
//     }
//  }
// console.log(getCurrentIndexTab());
// function getCurrentIndexTab() {  // Не получается применить метод 
//     tab.indexOf(this.className.includes( 'tab_active' ));
// }

function getCurrentIndexTab() {
    return tab.findIndex(tab => tab.className.includes( 'tab_active' ));
}

// function getCurrentIndexTab() {
//     return tab.indexOf(tab => tab.className.includes( 'tab_active' ));
// }

function getCurrentIndexTabContent() {
    for (let i = 0; i < tabContent.length; i++)
    if (tabContent[i].className.includes( 'tab__content_active' )) {
        return i; 
    }
 }
// console.log(getCurrentIndexTabContent());

// Кликаем "2е меню"- всё работает, а потом заново на "1е меню" Не работает
for (let i = 0; i < tab.length; i++) { 
	tab[i].onclick = function() {
        tab[i].classList.add('tab_active');
        tab[getCurrentIndexTab()].classList.remove('tab_active');
        changMenu();
    }
}

function changMenu() {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[getCurrentIndexTabContent()].classList.remove('tab__content_active');
        tabContent[getCurrentIndexTab()].classList.add('tab__content_active');
    }
}
