let myLibrary = [];
let index = 2;

function Book(title, author, pages, read, index){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read;
  this.index = index
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read', 0);
const pachinko = new Book('Pachinko', 'Min Jin Liee', 496, 'Unread', 1);
myLibrary.push(theHobbit, pachinko);
console.log(myLibrary);

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
    cardRead.classList.add("readBtn")
    card.appendChild(cardRead);

    let cardIndex = obj.index;

    let cardDelete = document.createElement("button");
    cardDelete.innerText = "Delete";
    cardDelete.classList.add("deleteBtn");
    card.appendChild(cardDelete);

    card.dataset.indexNumber = cardIndex;

    cards.appendChild(card);
  }
}

makeCards();

//popup form start

function show(){
  document.getElementById("popup").style.display = "block";
}
function hide() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}

function add() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read");
  if(read.checked){
    read = "Read"
  }else{
    read = "Unread"
  }
  if(author !== "" && title !== "" && pages !== ""){
    document.getElementById("popup").style.display = "none";

    //add fields to library
    let cards = document.getElementById("cards");
    let card = document.createElement("div");
    card.classList.add("card");

    let cardTitle = document.createElement("p");
    cardTitle.innerText = title;
    card.appendChild(cardTitle);

    let cardAuthor = document.createElement("p");
    cardAuthor.innerText = author;
    card.appendChild(cardAuthor);

    let cardPages = document.createElement("p");
    cardPages.innerText = `${pages} pages`;
    card.appendChild(cardPages);

    let cardRead = document.createElement("button");
    cardRead.innerText = read;
    cardRead.classList.add("readBtn")
    card.appendChild(cardRead);

    let cardDelete = document.createElement("button");
    cardDelete.innerText = "Delete";
    cardDelete.classList.add("deleteBtn");
    card.appendChild(cardDelete);

    let cardIndex = index++;
    card.dataset.indexNumber = cardIndex;

    cards.appendChild(card);
    const newBook = new Book(cardTitle.innerText, cardAuthor.innerText, cardPages.innerText, cardRead.innerText, cardIndex);
    myLibrary.push(newBook)

    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
  }
  let deleteBtns = document.getElementsByClassName("deleteBtn");
  for(let btn of deleteBtns){
    btn.addEventListener('click', (e) => {
      let target = e.target;
      let parent = target.parentElement;
      parent.remove();
    })
  }
  console.log(myLibrary);
}

// popup form end

// delete card

let deleteBtns = document.getElementsByClassName("deleteBtn");
for(let btn of deleteBtns){
  btn.addEventListener('click', (e) => {
    let target = e.target;
    let parent = target.parentElement;
    parent.remove();
  })
}

//read/unread

let readBtns = document.getElementsByClassName("readBtn");
for(let btn of readBtns){
  btn.addEventListener('click', (e) => {
    let target = e.target;
    let parent = target.parentElement;
    let children = parent.getElementsByClassName("readBtn")[0];
    if(children.innerHTML === "Read"){
      children.innerHTML = "Unread";
    }else{
      children.innerHTML = "Read";
    }
  })
}