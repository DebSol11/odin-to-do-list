// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { clearChildNotes } from "./detailsBtn.js";

// Functions 
function deleteToDo(index) {
  const toDoContainer = document.getElementById("toDoContainer");
  arrayOfToDoObjects.splice(index, 1);
  clearChildNotes(toDoContainer);
  displayToDos();
}

function listenForTrashSymbolClick() {
  const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");
  for (let j = 0; j < trashSymbolNodeList.length; j++) {
    trashSymbolNodeList[j].addEventListener("click", (event) => {
      console.log(event);
      deleteToDo(j);
    });
  }
}

// Export
export {
  deleteToDo,
  listenForTrashSymbolClick,
};

