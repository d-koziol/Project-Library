/* eslint-disable quotes */

// DOM Selectors

const myLibrary = [];

let addBookForm = document.querySelector(".addBookForm");
let addBookBtn = document.querySelector(".addBookBtn");
let newTitle = document.getElementById("inputTitle");
let newAuthor = document.getElementById("inputAuthor");
let newPages = document.getElementById("inputPages");
let newRead = document.getElementById("inputRead");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

addBookBtn.addEventListener("click", () => {
  if (addBookForm) addBookForm.style.visibility = "visible";
});
// Book Class
class Book {
  constructor(title, author, pagesNum, haveRead) {
    this.title = title;
    this.author = author;
    this.pagesNum = pagesNum;
    this.haveRead = haveRead;
  }
}

function addBookToLibrary() {
  let title = newTitle.value;
  let author = newAuthor.value;
  let pagesNum = newPages.value;
  let haveRead = newRead.checked;

  let myBook = new Book(title, author, pagesNum, haveRead);
  myLibrary.push(myBook);
  console.log(myLibrary);
}

// Creates new book obj and new card

submitBtn.addEventListener("click", addBookToLibrary);
