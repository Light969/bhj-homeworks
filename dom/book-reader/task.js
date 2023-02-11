const fontSize = Array.from(document.getElementsByClassName('font-size'));
// console.log(fontSize);
const book = document.querySelector('.book');
console.log(book);

function delCurrentFontSizeActive() {
    fontSize.forEach(fontSize => fontSize.classList.remove('font-size_active'));
}

function delCurrentBookActive() {
    book.forEach(book => book.classList.remove('book_fs-big'));
    book.forEach(book => book.classList.remove('book_fs-small'));
}

for (let i = 0; i <= fontSize.length; i++) {
  fontSize[i].onclick = function() {
    delCurrentFontSizeActive();
    // delCurrentBookActive();
    fontSize[i].classList.add('font-size_active');
    return false;
  }
}