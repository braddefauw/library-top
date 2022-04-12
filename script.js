let myLibrary = [];
let index = 2;

const Book = function(title, author, pages, read, index){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read;
  this.index = index
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read', 0);
const pachinko = new Book('Pachinko', 'Min Jin Liee', 496, 'Read', 1);
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

    let cardP = document.createElement("p");
    let cardRead = document.createElement("button");
    cardRead.innerText = obj.read;
    cardRead.classList.add("readBtn");
    cardP.appendChild(cardRead);
    card.appendChild(cardP);

    let cardIndex = obj.index;

    let deleteP = document.createElement("p");
    let cardDelete = document.createElement("button");
    cardDelete.innerText = "Delete";
    cardDelete.classList.add("deleteBtn");
    deleteP.appendChild(cardDelete);
    card.appendChild(deleteP);

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
  if (author !== "" && title !== "" && pages !== ""){
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

    let cardP = document.createElement("p");
    let cardRead = document.createElement("button");
    cardRead.innerText = obj.read;
    cardRead.classList.add("readBtn");
    cardP.appendChild(cardRead);
    card.appendChild(cardP);

    let deleteP = document.createElement("p");
    let cardDelete = document.createElement("button");
    cardDelete.innerText = "Delete";
    cardDelete.classList.add("deleteBtn");
    deleteP.appendChild(cardDelete);
    card.appendChild(deleteP);

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
      let grandparent = parent.parentElement;
      grandparent.remove();
    })
  }
}

// popup form end

// delete card

let deleteBtns = document.getElementsByClassName("deleteBtn");
  for(let btn of deleteBtns){
    btn.addEventListener('click', (e) => {
      let target = e.target;
      let parent = target.parentElement;
      let grandparent = parent.parentElement;
      grandparent.remove();
    })
  }

let readBtns = document.getElementsByClassName("readBtn");
for(let btn of readBtns){
  btn.addEventListener('click', (e) => {
    let target = e.target;
    let parent = target.parentElement;
    let elem = myLibrary[parent.dataset.indexNumber];
    let children = parent.getElementsByClassName("readBtn")[0];
    if(children.innerHTML === "Read"){
      children.innerHTML = "Unread";
      children.style.color = "#ff7f50";
      elem.read = "Unread"
      console.log(myLibrary);
    }else{
      children.innerHTML = "Read";
      children.style.color = "white";
      elem.read = "Read";
      console.log(myLibrary);
    }
  })
}