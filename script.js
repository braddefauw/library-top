let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
}

function addBookToLibrary() {
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');
  const pachinko = new Book('Pachinko', 'Min Jin Liee', 496, 'Unread');
  myLibrary.push(theHobbit, pachinko);
  console.log(myLibrary);
}

addBookToLibrary()

function makeNewCard(){
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

    let cardRead = document.createElement("p");
    cardRead.innerText = obj.read;
    card.appendChild(cardRead);

    cards.appendChild(card);
  }
}

makeNewCard();

document.getElementById("title").innerText = `"${myLibrary[0].title}"`;
document.getElementById("author").innerText = myLibrary[0].author;
document.getElementById("pages").innerText = `${myLibrary[0].pages} pages`;
document.getElementById("read").innerText = myLibrary[0].read;