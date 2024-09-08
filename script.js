const myLibrary = [];
const cardContainer = document.querySelector(".card-container");
const dialog = document.querySelector("dialog");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
        const card = document.createElement("div");
        let title = document.createElement("div");
        title.textContent = myLibrary.at(i).title;
        let author = document.createElement("div");
        author.textContent = myLibrary.at(i).author;
        let pages = document.createElement("div");
        pages.textContent = myLibrary.at(i).pages + 'pages';
        let isRead = document.createElement("button");
        isRead.textContent = (myLibrary.at(i).read) ? 'read' : 'not read yet';
        let remove = document.createElement("button");
        remove.textContent = "Remove";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);
        card.appendChild(remove);

        cardContainer.appendChild(card);
    }
}

const addButton = document.querySelector(".addBook");
addButton.addEventListener("click", () => {
    document.getElementById('modal-overlay').style.display = 'block';
    dialog.showModal();
});

myLibrary.push(new Book("io", "sono", 21, "non letto"));

const submitBook = document.querySelector("#submitBook");
submitBook.addEventListener("click", function(){
    event.preventDefault();
    let newTitle = document.querySelector("#newTitle").value;
    let newAuthor = document.querySelector("#newAuthor").value;
    let newPages = document.querySelector("#newPages").value;
    let isRead = (document.querySelector("#newRead").checked) ? true : false;
    const newBook = new Book(newTitle, newAuthor, newPages, isRead);
    myLibrary.push(newBook);
    dialog.close();
    document.getElementById('modal-overlay').style.display = 'none';
    document.querySelector('form').reset();
    displayBooks();
})