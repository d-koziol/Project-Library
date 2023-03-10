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

// Book Class
class Book {
  constructor(title, author, pagesNum, haveRead) {
    this.title = title;
    this.author = author;
    this.pagesNum = pagesNum;
    this.haveRead = haveRead;
  }
}

//Toggle read function

Book.prototype.toggleRead = function () {
  this.haveRead = !this.haveRead;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  library();
}
// Function book delete
function deleteBook(index) {
  myLibrary.splice(index, 1);
  library();
}

// Table iterate and new book card create function

function library() {
  let libraryBook = document.querySelector(".libraryCards");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i += 1) {
    let book = myLibrary[i];
    let bookCard = document.createElement("div");
    bookCard.innerHTML = `
    <div class="card">
      <div class="bookInfo">
        <h2 class="title">Title: ${book.title}</h2>
        <h3 class="author">Author: ${book.author}</h3>
        <h3 class="pagesNum">Pages: ${book.pagesNum}</h3>
        <p class="haveRead">${book.haveRead ? "Read" : "Not Read Yet"}</p>
      </div>
      <div class="cardButtons">
        <input type="button" class="deleteBtn" value="Delete Book" onclick="deleteBook(${i})"/>
        <input type="button" class="toggleReadBtn" value="Toggle Read" onclick="toggleRead(${i})"/>
      </div>
    </div>
    `;
    libraryBook.appendChild(bookCard);
  }
}
// Add new book function

function addBookToLibrary() {
  let title = newTitle.value;
  let author = newAuthor.value;
  let pagesNum = newPages.value;
  let haveRead = newRead.checked;
  let myBook = new Book(title, author, pagesNum, haveRead);
  myLibrary.push(myBook);
  library();
}

// Event listeners

submitBtn.addEventListener("click", addBookToLibrary);

addBookBtn.addEventListener("click", () => {
  addBookForm.style.visibility = "visible";
});
