let myLibrary = [];

class Book {
  constructor(title, author, pagesNum, haveRead) {
    this.title = title;
    this.author = author;
    this.pagesNum = pagesNum;
    this.haveRead = haveRead;
  }
}

function addBookToLibrary(title, author, pagesNum, haveRead) {
  const myBook = new Book(title, author, pagesNum, haveRead);
  myLibrary.push(myBook);
}
