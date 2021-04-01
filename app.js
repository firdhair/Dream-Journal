// Selectors
const myJournal = document.querySelector("#myJournal");
const saveButton = document.querySelector("#btnSave");
const journal = document.querySelector(".journal-container");
const journalInput = document.querySelector(".inputJournal");
const titleInput = document.querySelector(".inputTitle");
const dateInput = document.querySelector(".inputTanggal");

// Event Listeners
saveButton.addEventListener("click", addJournal);
journal.addEventListener("click", deleteCheck);

function addJournal(event) {
  event.preventDefault();
  // menambahkan div dengan kelas journal
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("journal");

  // membuat title
  const newTitle = document.createElement("h4");
  newTitle.innerText = titleInput.value;
  newTitle.classList.add("journal-title");
  todoDiv.appendChild(newTitle);

  // membuat tanggal
  const newDate = document.createElement("p");
  newDate.innerText = dateInput.value;
  newDate.classList.add("journal-date");
  todoDiv.appendChild(newDate);

  // membuat isi jurnal
  const newJournal = document.createElement("p");
  newJournal.innerText = journalInput.value;
  newJournal.classList.add("journal-item");
  todoDiv.appendChild(newJournal);

  // membuat tombol edit
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);

  // membuat delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  todoDiv.appendChild(deleteButton);

  // append to journal
  journal.appendChild(todoDiv);

  // membersihkan value input
  journalInput.value = "";
  titleInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const journal = item.parentElement;
    journal.remove();
  }
}

function openForm() {
  myJournal.style.display = "block";
}

function closeForm() {
  myJournal.style.display = "none";
}
