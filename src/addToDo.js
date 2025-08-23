import { tableBody } from "./displayToDos";

function displayToDoButton() {
  let tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);
  
  let toDoBtn = document.createElement("button");
  toDoBtn.textContent = "Add to do";
  toDoBtn.setAttribute("id", "toDoBtn");
  ta.appendChild(toDoBtn);
}

export { displayToDoButton };
