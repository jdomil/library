// Constant declaration
const toreadList = document.getElementById('toReadList');
const inProgressList = document.getElementById('inProgressList');
const finishedList = document.getElementById('finishedList');
const addBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('addBookModal');
const span = document.getElementById('closeModal');
const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

const coverPlaceHolder = 'data:image/jpeg;base64,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'

// Variable declaration
let closeButtons = [...document.querySelectorAll('.btn-close')];
let inProgressButtons = [...document.querySelectorAll('.btn-inprogress')];
let readButtons = [...document.querySelectorAll('.btn-read')];

let myLibrary = [];

// Book object constructor
function Book(title, author, cover, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.readStatus = status;
}

// Log first book

const firstBook = new Book('Test Title', 'Test Author', coverPlaceHolder, 1, 'toRead');
myLibrary.push(firstBook);
addToDom(firstBook);


// Add a book to the library
function addBookToLibrary() {
    const bookTitle = document.getElementById('title').value || '[No Title]';
    const bookAuthor = document.getElementById('author').value || '[No Author]';
    const bookPages = document.getElementById('pages').value;
    const bookCover = document.getElementById('cover').value || coverPlaceHolder;
    const bookStatus = document.querySelector('input[name="status"]:checked').value;

    myBook = new Book(bookTitle, bookAuthor, bookCover, bookPages, bookStatus);
    myLibrary.push(myBook);
    index = myLibrary.indexOf(myBook);
    addToDom(myBook);
}

// Populate DOM with each book
function addToDom(book) {
    console.log('Hi!');
    // Elements declaration
    const newBook = document.createElement('div');
    const newToolbar = document.createElement('div');
    const newClose = document.createElement('span');
    const newInProgress = document.createElement('span');
    const newRead = document.createElement('span');
    const newThumbnailBox = document.createElement('div');
    const newInfoBox = document.createElement('div');
    const newTitle = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImage = document.createElement('img');

    // Create icons
    newInProgress.innerHTML = '\u{1F4D6}';
    newRead.innerHTML = '\u{1F4D8}';
    newClose.innerHTML = '\u00D7';

    // Embed book title and author
    newTitle.innerText = book.title;
    newAuthor.innerText = book.author;

    // Embed book cover URL and alt
    newImage.src = book.cover;
    newImage.alt = book.title;

    // Add classes for formatting
    newBook.classList.add('margin-20', 'max-width-150', 'flex-column-center');
    newToolbar.classList.add('flex-end', 'width-100p');
    newInProgress.classList.add('btn-inprogress', 'margin-right-10');
    newRead.classList.add('btn-read', 'margin-right-10');
    newClose.classList.add('btn-close');
    newThumbnailBox.classList.add('margin-bot-10');
    newImage.classList.add('thumbnail');
    newTitle.classList.add('text-center');
    newAuthor.classList.add('text-center');

    // Append all elements
    newInfoBox.appendChild(newTitle);
    newInfoBox.appendChild(newAuthor);
    newThumbnailBox.appendChild(newImage);
    newToolbar.appendChild(newInProgress);
    newToolbar.appendChild(newRead);
    newToolbar.appendChild(newClose);
    newBook.appendChild(newToolbar);
    newBook.appendChild(newThumbnailBox);
    newBook.appendChild(newInfoBox);

    // Add dataset
    newInProgress.dataset.book = myLibrary.indexOf(book);
    newRead.dataset.book = myLibrary.indexOf(book);
    newClose.dataset.book = myLibrary.indexOf(book);
    newBook.dataset.book = myLibrary.indexOf(book);

    // Append to correct swimlane
    switch (book.readStatus) {
        case 'inProgress':
            inProgressList.appendChild(newBook);
            break;

        case 'read':
            finishedList.appendChild(newBook);
            break;

        default:
            toreadList.appendChild(newBook);
            break;
    }

    // Add toolbar buttons to buttons array
    closeButtons.push(newClose);
    inProgressButtons.push(newInProgress);
    readButtons.push(newRead);
    enableBtns();
}

// Delete book function
function deleteBook(e) {
    const index = e.target.dataset.book;
    const bookToRemove = document.querySelector('div[data-book="' + index +'"]');

    bookToRemove.remove();
    myLibrary.shift(index, 1);
}

// Move book to In Progress function
function moveBookInProgress(e) {
    const index = e.target.dataset.book;
    console.log(index);
    console.log(myLibrary[index].readStatus);
    if (myLibrary[index].readStatus == 'inProgress') return;

    myLibrary[index].readStatus = 'inProgress';
    addToDom(myLibrary[index]);
    const bookToMove = document.querySelector('div[data-book="' + index +'"]');
    bookToMove.remove();
}

// Move book to Read function
function moveBookRead(e) {
    const index = e.target.dataset.book;
    if (myLibrary[index].readStatus == 'read') return;

    myLibrary[index].readStatus = 'read';
    addToDom(myLibrary[index]);
    const bookToMove = document.querySelector('div[data-book="' + index +'"]');
    bookToMove.remove();
}


// Enable toolbar buttons
function enableBtns() {
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            deleteBook(e);
        });
    });

    inProgressButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            moveBookInProgress(e);
        });
    });

    readButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            moveBookRead(e);
        });
    });
}

// Modal functionality
addBtn.onclick = () => {
    bookModal.style.display = 'flex';
}

span.onclick = () => {
    bookModal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == bookModal) {
        bookModal.style.display = "none";
    }
}

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookModal.style.display = "none";

    addBookToLibrary();
    bookForm.reset();
});

enableBtns();




