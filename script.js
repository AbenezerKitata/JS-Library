function makeReadYes() {
  if (document.querySelector("#isRead").checked) {
    document.querySelector("#isRead").value = "Read";
  } else {
    document.querySelector("#isRead").value = "Not Read";
  }
}
let myLibrary = [];


class Book {
  constructor(title, author, pageCt, isRead){
    this.title = title;
    this.author = author;
    this.pageCt = pageCt;
    this.isRead = isRead;
  }
}
function addBookToLibrary() {
  let addButton = document.querySelector(".btn");
  addButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    makeReadYes();
    let mybook = new Book(
      document.querySelector("#title").value,
      document.querySelector("#author").value,
      Number(document.querySelector("#pageCt").value),
      document.querySelector("#isRead").value
    );
    myLibrary.push(mybook);
    looper();
  });
}
addBookToLibrary();

function looper() {
  // loop through  [myLibrary] and display every object on a table or cards.
  let table = document.querySelector("table");
  table.style.visibility = `visible`;
  let row2 = document.createElement("tr");
  table.appendChild(row2);
  let tableData1 = document.createElement("td");
  let tableData2 = document.createElement("td");
  let tableData3 = document.createElement("td");
  let tableData4 = document.createElement("td");
  let tableData5 = document.createElement("td");
  let tr = document.querySelectorAll('tr')
  tableData5.style.backgroundColor = 'rgba(54, 70, 4, 0.815)'
  let delBtn = document.createElement('input');
  delBtn.type = 'button'
  delBtn.value = 'Delete'
  tableData5.appendChild(delBtn)

  delBtn.className = 'Delete-btn'
  delBtn.textContent = 'delete'
  delBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    delBtn.parentNode.parentNode.parentNode.removeChild(row2)
    if (tr.length === 2) {
      table.style.visibility = `hidden`
    }
  });
  let selectRead = document.createElement('select');
  let read_option = document.createElement('option');
  let unread_option = document.createElement('option');
  read_option.textContent = 'Read'
  read_option.value = 'Read'
  unread_option.textContent = 'Not Read'
  unread_option.value = 'Not Read'
  selectRead.appendChild(read_option);
  selectRead.appendChild(unread_option);
  tableData4.appendChild(selectRead);
  row2.appendChild(tableData1);
  row2.appendChild(tableData2);
  row2.appendChild(tableData3);
  row2.appendChild(tableData4);
  row2.appendChild(tableData5);


  myLibrary.forEach((book) => {
    tableData1.textContent = book.title;
    tableData2.textContent = book.author;
    tableData3.textContent = book.pageCt;
    selectRead.value = book.isRead;
  });
}
