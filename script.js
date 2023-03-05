/* eslint-disable quotes */

// Node variables

const myLibrary = [];
let bookAdded;

let addBookForm = document.getElementById("addBookForm");
let newTitle = document.getElementById("inputTitle");
let newAuthor = document.getElementById("inputAuthor");
let newPages = document.getElementById("inputPages");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

// Book Class
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
