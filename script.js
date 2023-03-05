/* eslint-disable quotes */

// Node variables

const myLibrary = [];
let bookAdded;

let addBookForm = document.getElementById("addBookForm");
let newTitle = document.getElementById("inputTitle");
let newAuthor = document.getElementById("inputAuthor");
let newPages = document.getElementById("inputPages");
let newRead = document.getElementById("inputRead");
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

// Adding new book from form function

function newBookCreate() {
  const bookAdded = Object.create(Book, {
    title: newTitle.value,
    author: newAuthor.value,
    pagesNum: newPages.value,
    haveRead: newRead.value,
  });
  addBookToLibrary(bookAdded);
  newBookCard();
}

// Creates new book obj and new card

submitBtn.addEventListener("click", newBookCreate);
