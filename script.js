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
        const current = myLibrary.shift();

        const card = document.createElement("div");
        card.classList.add('card');
        let title = document.createElement("div");
        title.textContent = `"${current.title}"`;
        let author = document.createElement("div");
        author.textContent = current.author;
        let pages = document.createElement("div");
        pages.textContent = current.pages + ' pages';
        let isRead = document.createElement("button");
        if(current.read){
            isRead.textContent = 'Read';
            isRead.classList.add('read');
        } else{
            isRead.textContent = 'Not read yet';
            isRead.classList.add('not-read');
        }
        isRead.addEventListener('click', function(){
            if(isRead.classList.contains('read')){
                isRead.textContent = 'Not read yet';
                isRead.classList.remove('read');
                isRead.classList.add('not-read');
            } else{
                isRead.textContent = 'Read';
                isRead.classList.remove('not-read');
                isRead.classList.add('read');
            }
        });
        let remove = document.createElement("button");
        remove.classList.add('remove');
        remove.textContent = "Remove";
        remove.addEventListener('click', function(){
            cardContainer.removeChild(card);
        });

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


const submitBook = document.querySelector("#submitBook");
submitBook.addEventListener("click", function(){
    event.preventDefault();
    let newTitle = document.querySelector("#newTitle").value;
    let newAuthor = document.querySelector("#newAuthor").value;
    let newPages = document.querySelector("#newPages").value;
    let isRead = (document.querySelector("#newRead").checked) ? true : false;
    const newBook = new Book(newTitle, newAuthor, newPages, isRead);
    addBookToLibrary(newBook);
    dialog.close();
    document.getElementById('modal-overlay').style.display = 'none';
    document.querySelector('form').reset();
    displayBooks();
})