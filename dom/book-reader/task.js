const fontSize = Array.from(document.getElementsByClassName('font-size'));
// console.log(fontSize);
const book = document.querySelector('.book');
// console.log(book);

function delCurrentFontSizeActive() {
    fontSize.forEach(fontSize => fontSize.classList.remove('font-size_active'));
}

function delCurrentBookActive() {
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
}

for (let i = 0; i <= fontSize.length-1; i++) {
  fontSize[i].onclick = function() {
    delCurrentFontSizeActive();
    delCurrentBookActive();
    fontSize[i].classList.add('font-size_active');
    if (fontSize[i] === fontSize[0]) {
      book.classList.add('book_fs-small');
    };
    if (fontSize[i] === fontSize[2]) {
      book.classList.add('book_fs-big');
    }
    return false;
  }
}