let myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');
const pachinko = new Book('Pachinko', 'Min Jin Liee', 496, 'Unread');
myLibrary.push(theHobbit, pachinko);

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
}

function addBookToLibrary() {
  // content to be added
}

addBookToLibrary()

function makeCards(){
  for(const obj of myLibrary){
    let cards = document.getElementById("cards");
    let card = document.createElement("div");
    card.classList.add("card");

    let cardTitle = document.createElement("p");
    cardTitle.innerText = obj.title;
    card.appendChild(cardTitle);

    let cardAuthor = document.createElement("p");
    cardAuthor.innerText = obj.author;
    card.appendChild(cardAuthor);

    let cardPages = document.createElement("p");
    cardPages.innerText = `${obj.pages} pages`;
    card.appendChild(cardPages);

    let cardRead = document.createElement("button");
    cardRead.innerText = obj.read;
    card.appendChild(cardRead);

    let cardDelete = document.createElement("button");
    cardDelete.innerText = "Delete";
    card.appendChild(cardDelete);

    cards.appendChild(card);
  }
}

makeCards();