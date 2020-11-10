// Constant declaration
const toreadList = document.getElementById('toReadList');
const addBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('addBookModal');
const span = document.getElementById('closeModal');
const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

// Variable declaration
let  myLibrary = [];

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
});

// Book object
function Book(title, author, cover, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.readStatus = status;
}

// Populate DOM with each book
function addToDom() {
    
    myLibrary.forEach((book, index) => {

        let newBook = document.createElement('div');
        let newToolbar = document.createElement('div');
        let newClose = document.createElement('span');
        let newRead = document.createElement('span');
        let newThumbnailBox = document.createElement('div');
        let newInfoBox = document.createElement('div');
        let newTitle = document.createElement('div');
        let newAuthor = document.createElement('div');
        let newImage = document.createElement('img');
        
        newRead.innerHTML = '\u{1F4D8}';
        newClose.innerHTML = '\u00D7';
        newTitle.innerText = book.title;
        newAuthor.innerText = book.author;

        newImage.src = book.cover;

        newBook.classList.add('margin-20', 'max-width-150', 'flex-column-center');
        newToolbar.classList.add('flex-end', 'width-100p');
        newRead.classList.add('btn-read', 'margin-right-10');
        newClose.classList.add('btn-close');
        newClose.dataset.book = index;
        newThumbnailBox.classList.add('margin-bot-10');
        newImage.classList.add('thumbnail');
        
        newImage.alt = book.title;
        newTitle.classList.add('text-center');
        newAuthor.classList.add('text-center');

        newInfoBox.appendChild(newTitle);
        newInfoBox.appendChild(newAuthor);
        newThumbnailBox.appendChild(newImage);
        newToolbar.appendChild(newRead);
        newToolbar.appendChild(newClose);
        newBook.appendChild(newToolbar);
        newBook.appendChild(newThumbnailBox);
        newBook.appendChild(newInfoBox);
        toreadList.appendChild(newBook);
    });
}

// Add a book to the library
function addBookToLibrary() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const bookCover = document.getElementById('cover').value;
    const bookStatus = document.querySelector('input[name="status"]:checked').value;

    console.log(bookStatus);

    myBook = new Book (bookTitle, bookAuthor, bookCover, bookPages, bookStatus);
    myLibrary.push(myBook);
    addToDom();
}

