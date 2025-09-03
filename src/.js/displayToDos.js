// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { listenForTrashSymbolClick } from "./deleteToDo.js";
import { listenForEditPenClick } from "./editPen.js";
import { listenForCheckBoxClick } from "./checkbox.js";
import trashSymbolImage from "../img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import editPenImage from "../img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import {
  listenForDetailsBtnClick,
  listenForCloseDetailsClick,
} from "./detailsBtn.js";
import { clearProjectsDisplayDiv, updateProjects} from "./addProjects.js";
import { listenForProjectLiClick } from "./projectFilterToDos.js";

// Selectors
const toDosSection = document.querySelector("#toDos");
const toDoContainer = document.getElementById("toDoContainer");

// Functions
function displayToDos(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].checklist == true) {
      displayCrossedToDoColored(array, i);
    } else {
      displayNormalToDoColored(array, i);
    }
  }
  listenForTrashSymbolClick(array);
  listenForEditPenClick(array);
  listenForDetailsBtnClick(array);
  listenForCheckBoxClick(array);
  listenForCloseDetailsClick();
  clearProjectsDisplayDiv();
  updateProjects(array);
  listenForProjectLiClick();
}

function displayCrossedToDo(array, index) {
  const toDoContainer = document.getElementById("toDoContainer2");
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
  sTitle.textContent = array[index].title;
  toDoElement.appendChild(sTitle);

  const sDueDate = document.createElement("s");
  sDueDate.textContent = array[index].dueDate;
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

function displayCrossedToDoColored(array, index) {
  displayCrossedToDo(array, index);
  const id = document.getElementById(`${index}`);
  const checkbox = document.querySelectorAll(".checkbox");
  const colorToDo = document.createElement("span");
  id.insertBefore(colorToDo, checkbox[index]);
  id.classList.add("colorGrey");
}

function displayNormalToDo(array, index) {
  const toDoContainer = document.getElementById("toDoContainer2");
  let toDoElement = document.createElement("div");
  toDoElement.classList.add(`toDoEntity`);
  toDoElement.setAttribute("id", `${index}`);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  toDoElement.appendChild(checkbox);

  const pTitle = document.createElement("p");
  pTitle.textContent = array[index].title;
  toDoElement.appendChild(pTitle);

  const pDueDate = document.createElement("p");
  pDueDate.textContent = array[index].dueDate;
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

function displayNormalToDoColored(array, index) {
  if (array[index].priority == "AAA") {
    displayNormalToDo(array, index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorAAA");
  } else if (array[index].priority == "AA") {
    displayNormalToDo(array, index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorAA");
  } else if (array[index].priority == "A") {
    displayNormalToDo(array, index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorA");
  } else if (array[index].priority == "B") {
    displayNormalToDo(array, index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorB");
  } else if (array[index].priority == "C") {
    displayNormalToDo(array, index);
    const id = document.getElementById(`${index}`);
    const checkbox = document.querySelectorAll(".checkbox");
    const colorToDo = document.createElement("span");
    id.insertBefore(colorToDo, checkbox[index]);
    id.classList.add("colorC");
  }
}

// Export
export { toDosSection, toDoContainer, displayToDos, listenForTrashSymbolClick };
