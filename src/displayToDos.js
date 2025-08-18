import { arrayOfToDoObjects } from "./createToDos.js";

// Selectors
const tableBody = document.querySelector("tbody");

function displayToDos() {
  for (let i = 0; i < arrayOfToDoObjects.length; i++) {
    let toDoElement = document.createElement("tr");
    // toDoElement.classList.add(`toDoEntity${i}`);
    const tdCheckbox = document.createElement("td");
    toDoElement.appendChild(tdCheckbox);
    const inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("class", "checkbox");
    inputCheckbox.setAttribute("name", "checkbox");
    tdCheckbox.appendChild(inputCheckbox);
    const tdPriority = document.createElement("td");
    tdPriority.textContent = arrayOfToDoObjects[i].priority;
    toDoElement.appendChild(tdPriority);
    const tdTitle = document.createElement("td");
    tdTitle.textContent = arrayOfToDoObjects[i].title;
    toDoElement.appendChild(tdTitle);
    const tdDescription = document.createElement("td");
    tdDescription.textContent = arrayOfToDoObjects[i].description;
    toDoElement.appendChild(tdDescription);
    const tdDueDate = document.createElement("td");
    tdDueDate.textContent = arrayOfToDoObjects[i].dueDate;
    toDoElement.appendChild(tdDueDate);
    const tdNotes = document.createElement("td");
    tdNotes.textContent = arrayOfToDoObjects[i].notes;
    toDoElement.appendChild(tdNotes);
    const tdManipulate = document.createElement("td");
    toDoElement.appendChild(tdManipulate);
    const editPenImg = document.createElement("img");
    editPenImg.setAttribute(
      "src",
      "img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    );
    editPenImg.setAttribute("alt", "Edit pen SVG");
    editPenImg.setAttribute("id", `editPen${i}`);
    editPenImg.classList.add("edit-pen");
    tdManipulate.appendChild(editPenImg);
    const deleteTrashImg = document.createElement("img");
    deleteTrashImg.setAttribute(
      "src",
      "img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    );
    deleteTrashImg.setAttribute("alt", "Trash Symbol SVG");
    deleteTrashImg.setAttribute("id", `trashSymbol${i}`);
    deleteTrashImg.classList.add("trash-symbol");
    tdManipulate.appendChild(deleteTrashImg);

    tableBody.appendChild(toDoElement);
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

export { displayToDos, clearTable };
