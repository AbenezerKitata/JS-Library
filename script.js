let myLibrary = [];
let btn = document.querySelector(".btn");
btn.addEventListener("click", addBookToLibrary);
function makeReadYes() {
  if (document.querySelector("#isRead").checked) {
    document.querySelector("#isRead").value = "Read already";
  } else {
    document.querySelector("#isRead").value = "Not Read Yet";
  }
}
function Book() {
  // my constructor
}
Book.prototype.info = function () {
  return `The book ${this.title} was written by ${this.author} and has ${this.pageCt} pages. It's ${this.isRead}. `;
};

function addBookToLibrary(e) {
  e.preventDefault();
  makeReadYes();
  console.log(`my lib 1= ${myLibrary}`);
  myLibrary.push(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    Number(document.querySelector("#pageCt").value),
    document.querySelector("#isRead").value
  );
  console.log(`my lib 2= ${myLibrary}`);
  testfn();
  while (myLibrary.length) { 
    myLibrary.pop(); 
}
myLibrary = new Array()
}
function Test(title, author, pageCt, isRead) {
  this.title = title;
  this.author = author;
  this.pageCt = pageCt;
  this.isRead = isRead;
}
Test.prototype = Object.create(Book.prototype);

let testfn = function () {
  let counter = 0;
  console.log(`counter1 = ${counter}`);

  if (counter > 0) {
    div.parentNode.removeChild(div)
  }
  let div = document.createElement("div");
  div.className = "big-box";
  document.body.appendChild(div);
  let card = document.createElement("div");
  div.appendChild(card);
  card.className = "card";
  counter++;
  console.log(`counter2 = ${counter}`);
  myLibrary = new Test(myLibrary[0],myLibrary[1],myLibrary[2],myLibrary[3]);
    card.textContent = myLibrary.info();
    // console.log(`iterator = ${myLibrary}`);
};

// let boon = [`kasjhkjafh`, `kjfasgjkfghdj`, 145468, `not read yet`]
