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

function show(){
  document.getElementById("popup").style.display = "block";
}
function hide() {
  document.getElementById("popup").style.display = "none";
  
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("country").value = "";
}

function add() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var country = document.getElementById("country").value;
  
  if (name == "" || age == "" || country == "") {
    alert("Please fill all fields.")
  } else {
    document.getElementById("popup").style.display = "none";
    var newdiv = document.createElement("div");
    newdiv.className += "cont";
    newdiv.innerHTML = "Name: "+ name + "<br>Age: " + age + "<br>Country: " + country;
    document.getElementById("results").appendChild(newdiv);
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
  }
}

function addBookToLibrary() {
  // content to be added
}

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