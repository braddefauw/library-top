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
document.getElementById("title").innerText = myLibrary[0].title;
document.getElementById("author").innerText = myLibrary[0].author;
document.getElementById("pages").innerText = `${myLibrary[0].pages} pages`;
document.getElementById("read").innerText = myLibrary[0].read;