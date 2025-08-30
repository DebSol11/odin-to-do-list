// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { listenForTrashSymbolClick } from "./deleteToDo.js";
import { listenForEditPenClick } from "./editPen.js";
import { listenForCheckBoxClick } from "./checkbox.js";
import trashSymbolImage from "./img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import editPenImage from "./img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import { displayToDoButton } from "./addToDo.js";
import {
  listenForDetailsBtnClick,
  listenForCloseDetailsClick,
} from "./detailsBtn.js";
import { clearChildNotes } from "./detailsBtn.js";

// Selectors
const toDosSection = document.querySelector("#toDos");
const toDoContainer = document.getElementById("toDoContainer");

// Functions
function displayToDos() {
  const toDoContainer = document.createElement("div");
  toDoContainer.setAttribute("id", "toDoContainer");
  toDosSection.appendChild(toDoContainer);
  for (let i = 0; i < arrayOfToDoObjects.length; i++) {
    // import this from it's own function in the checkbox.js for development it's okay to do it here.
    if (arrayOfToDoObjects[i].checklist == true) {
      displayCrossedToDoColored(i);
    } else {
      displayNormalToDoColored(i);
    }
  }
  listenForTrashSymbolClick();
  listenForEditPenClick();
  listenForDetailsBtnClick();
  listenForCheckBoxClick();
  listenForCloseDetailsClick();
}

function displayCrossedToDo(index) {
  const toDoContainer = document.getElementById("toDoContainer");
  let toDoElement = document.createElement("div");
  toDoElement.classList.add(`toDoEntity`);
  toDoElement.setAttribute("id", `${index}`);
  toDoElement.classList.add("greyed");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("checked", "");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  toDoElement.appendChild(checkbox);

  const sTitle = document.createElement("s");
  sTitle.textContent = arrayOfToDoObjects[index].title;
  toDoElement.appendChild(sTitle);

  const sDueDate = document.createElement("s");
  sDueDate.textContent = arrayOfToDoObjects[index].dueDate;
  toDoElement.appendChild(sDueDate);

  const manipulateContainerDiv = document.createElement("div");
  manipulateContainerDiv.setAttribute("id", "manipulateContainerDiv");
  toDoElement.appendChild(manipulateContainerDiv);

  const detailsBtn = document.createElement("button");
  detailsBtn.classList.add("detailsBtn");
  detailsBtn.textContent = "Details";
  manipulateContainerDiv.appendChild(detailsBtn);

  const editPenImg = document.createElement("img");
  editPenImg.src = editPenImage;
  editPenImg.setAttribute("alt", "Edit pen SVG");
  editPenImg.setAttribute("id", `editPen${index}`);
  editPenImg.classList.add("edit-pen");
  manipulateContainerDiv.appendChild(editPenImg);

  const deleteTrashImg = document.createElement("img");
  deleteTrashImg.src = trashSymbolImage;
  deleteTrashImg.setAttribute("alt", "Trash Symbol SVG");
  deleteTrashImg.setAttribute("id", `trashSymbol${index}`);
  deleteTrashImg.classList.add("trash-symbol");
  manipulateContainerDiv.appendChild(deleteTrashImg);

  toDoContainer.appendChild(toDoElement);
}

function displayCrossedToDoColored(index) {
  displayCrossedToDo(index);
  const id = document.getElementById(`${index}`);
  const checkbox = document.querySelectorAll(".checkbox");
  const colorToDo = document.createElement("span");
  id.insertBefore(colorToDo, checkbox[index]);
  id.classList.add("colorGrey");
}

function displayNormalToDo(index) {
  const toDoContainer = document.getElementById("toDoContainer");
  let toDoElement = document.createElement("div");
  toDoElement.classList.add(`toDoEntity`);
  toDoElement.setAttribute("id", `${index}`);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  toDoElement.appendChild(checkbox);

  const pTitle = document.createElement("p");
  pTitle.textContent = arrayOfToDoObjects[index].title;
  toDoElement.appendChild(pTitle);

  const pDueDate = document.createElement("p");
  pDueDate.textContent = arrayOfToDoObjects[index].dueDate;
  toDoElement.appendChild(pDueDate);

  const manipulateContainerDiv = document.createElement("div");
  manipulateContainerDiv.setAttribute("id", "manipulateContainerDiv");
  toDoElement.appendChild(manipulateContainerDiv);

  const detailsBtn = document.createElement("button");
  detailsBtn.classList.add("detailsBtn");
  detailsBtn.textContent = "Details";
  manipulateContainerDiv.appendChild(detailsBtn);

  const editPenImg = document.createElement("img");
  editPenImg.src = editPenImage;
  editPenImg.setAttribute("alt", "Edit pen SVG");
  editPenImg.setAttribute("id", `editPen${index}`);
  editPenImg.classList.add("edit-pen");
  manipulateContainerDiv.appendChild(editPenImg);

  const deleteTrashImg = document.createElement("img");
  deleteTrashImg.src = trashSymbolImage;
  deleteTrashImg.setAttribute("alt", "Trash Symbol SVG");
  deleteTrashImg.setAttribute("id", `trashSymbol${index}`);
  deleteTrashImg.classList.add("trash-symbol");
  manipulateContainerDiv.appendChild(deleteTrashImg);

  toDoContainer.appendChild(toDoElement);
}

function displayNormalToDoColored(index) {
  if (arrayOfToDoObjects[index].priority == "AAA") {
    displayNormalToDo(index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorAAA");
  } else if (arrayOfToDoObjects[index].priority == "AA") {
    displayNormalToDo(index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorAA");
  } else if (arrayOfToDoObjects[index].priority == "A") {
    displayNormalToDo(index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorA");
  } else if (arrayOfToDoObjects[index].priority == "B") {
    displayNormalToDo(index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorB");
  } else if (arrayOfToDoObjects[index].priority == "C") {
    displayNormalToDo(index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorC");
  }
}

// function clearTable() {
//   const rowCount = tableBody.rows.length; // Get the number of rows
//   // Loop through rows in reverse and delete each one
//   for (let i = rowCount - 1; i >= 0; i--) {
//     // The deleteRow method removes rows based on their index.
//     // The loop starts from the last row and goes backwards. When we loop in forward, the position (index) of the remaining rows would change after each deletion. So to prevent this issue, we loop in reverse.
//     tableBody.deleteRow(i);
//   }
// }

// Export
export { toDosSection, toDoContainer, displayToDos, listenForTrashSymbolClick };
