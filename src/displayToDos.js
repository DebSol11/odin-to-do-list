import { arrayOfToDoObjects } from "./createToDos.js";
import {
  deleteToDoDOMListener,
  deleteToDo,
  trashSymbolNodeListListener,
} from "./deleteToDo.js";
import { editPenNodeListListener } from "./editPen.js";

// Selectors
const tableBody = document.querySelector("tbody");


function displayToDos() {
  for (let i = 0; i < arrayOfToDoObjects.length; i++) {
    // import this from it's own function in the checkbox.js for development it's okay to do it here.
    
    if (arrayOfToDoObjects[i].checklist == true) {
      displayCrossedToDo(i);
      // editPenNodeListListener();
    } else {
      displayNormalToDo(i);
      // trashSymbolNodeListListener2();
      // editPenNodeListListener();
    }
  }
// const trashSymbolArray = Array.from(trashSymbolNodeList);
// console.log(trashSymbolArray);
listenForTrashSymbolClick();
}

function displayCrossedToDo(index) {
  let toDoElement = document.createElement("tr");
  toDoElement.classList.add(`toDoEntity${index}`);

  const tdCheckbox = document.createElement("td");
  toDoElement.appendChild(tdCheckbox);
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("checked", "");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("class", "checkbox");
  inputCheckbox.setAttribute("name", "checkbox");
  tdCheckbox.appendChild(inputCheckbox);

  const tdProject = document.createElement("td");
  const sProject = document.createElement("s");
  sProject.textContent = arrayOfToDoObjects[index].project;
  tdProject.appendChild(sProject);
  toDoElement.appendChild(tdProject);

  const tdPriority = document.createElement("td");
  const sPriority = document.createElement("s");
  sPriority.textContent = arrayOfToDoObjects[index].priority;
  tdPriority.appendChild(sPriority);
  toDoElement.appendChild(tdPriority);

  const tdTitle = document.createElement("td");
  const sTitle = document.createElement("s");
  sTitle.textContent = arrayOfToDoObjects[index].title;
  tdTitle.appendChild(sTitle);
  toDoElement.appendChild(tdTitle);

  const tdDescription = document.createElement("td");
  const sDescription = document.createElement("s");
  sDescription.textContent = arrayOfToDoObjects[index].description;
  tdDescription.appendChild(sDescription);
  toDoElement.appendChild(tdDescription);

  const tdDueDate = document.createElement("td");
  const sDueDate = document.createElement("s");
  sDueDate.textContent = arrayOfToDoObjects[index].dueDate;
  tdDueDate.appendChild(sDueDate);
  toDoElement.appendChild(tdDueDate);

  const tdNotes = document.createElement("td");
  const sNotes = document.createElement("s");
  sNotes.textContent = arrayOfToDoObjects[index].notes;
  tdNotes.appendChild(sNotes);
  toDoElement.appendChild(tdNotes);

  const tdManipulate = document.createElement("td");
  toDoElement.appendChild(tdManipulate);
  const editPenImg = document.createElement("img");
  editPenImg.setAttribute(
    "src",
    "img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
  );
  editPenImg.setAttribute("alt", "Edit pen SVG");
  editPenImg.setAttribute("id", `editPen${index}`);
  editPenImg.classList.add("edit-pen");
  tdManipulate.appendChild(editPenImg);
  const deleteTrashImg = document.createElement("img");
  deleteTrashImg.setAttribute(
    "src",
    "img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
  );
  deleteTrashImg.setAttribute("alt", "Trash Symbol SVG");
  deleteTrashImg.setAttribute("id", `trashSymbol${index}`);
  deleteTrashImg.classList.add("trash-symbol");
  tdManipulate.appendChild(deleteTrashImg);
  
  tableBody.appendChild(toDoElement);
};

function displayNormalToDo(index) {
  let toDoElement = document.createElement("tr");
  toDoElement.classList.add(`toDoEntity${index}`);

  const tdCheckbox = document.createElement("td");
  toDoElement.appendChild(tdCheckbox);
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("class", "checkbox");
  inputCheckbox.setAttribute("name", "checkbox");
  tdCheckbox.appendChild(inputCheckbox);

  const tdProject = document.createElement("td");
  tdProject.textContent = arrayOfToDoObjects[index].project;
  toDoElement.appendChild(tdProject);

  const tdPriority = document.createElement("td");
  tdPriority.textContent = arrayOfToDoObjects[index].priority;
  toDoElement.appendChild(tdPriority);

  const tdTitle = document.createElement("td");
  tdTitle.textContent = arrayOfToDoObjects[index].title;
  toDoElement.appendChild(tdTitle);

  const tdDescription = document.createElement("td");
  tdDescription.textContent = arrayOfToDoObjects[index].description;
  toDoElement.appendChild(tdDescription);

  const tdDueDate = document.createElement("td");
  tdDueDate.textContent = arrayOfToDoObjects[index].dueDate;
  toDoElement.appendChild(tdDueDate);

  const tdNotes = document.createElement("td");
  tdNotes.textContent = arrayOfToDoObjects[index].notes;
  toDoElement.appendChild(tdNotes);

  const tdManipulate = document.createElement("td");
  toDoElement.appendChild(tdManipulate);
  const editPenImg = document.createElement("img");
  editPenImg.setAttribute(
    "src",
    "img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
  );
  editPenImg.setAttribute("alt", "Edit pen SVG");
  editPenImg.setAttribute("id", `editPen${index}`);
  editPenImg.classList.add("edit-pen");
  tdManipulate.appendChild(editPenImg);
  const deleteTrashImg = document.createElement("img");
  deleteTrashImg.setAttribute(
    "src",
    "img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
  );
  deleteTrashImg.setAttribute("alt", "Trash Symbol SVG");
  deleteTrashImg.setAttribute("id", `trashSymbol${index}`);
  deleteTrashImg.classList.add("trash-symbol");
  tdManipulate.appendChild(deleteTrashImg);

  tableBody.appendChild(toDoElement);
};



// if it is declared in the deleteToDos.js imported here into displayToDo.js and than called, it somehow executes twice resulting in a unwanted behavior when the toDoElement with the index 0 is tried to be deleted without adding something else.
function listenForTrashSymbolClick() {
  const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");
  for (let j = 0; j < trashSymbolNodeList.length; j++) {
    trashSymbolNodeList[j].addEventListener("click", (event) => {
      console.log(event);
      deleteToDo(j);
    });
  }
}

function clearTable() {
  const rowCount = tableBody.rows.length; // Get the number of rows
  // Loop through rows in reverse and delete each one
  for (let i = rowCount - 1; i >= 0; i--) {
    // The deleteRow method removes rows based on their index.
    // The loop starts from the last row and goes backwards. When we loop in forward, the position (index) of the remaining rows would change after each deletion. So to prevent this issue, we loop in reverse.
    tableBody.deleteRow(i);
  }
}

export { displayToDos, clearTable, listenForTrashSymbolClick };
