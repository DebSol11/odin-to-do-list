// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { clearChildNotes } from "./detailsBtn.js";

// Functions 
function deleteToDo(array, index) {
  const toDoContainer = document.getElementById("toDoContainer2");
  array.splice(index, 1);
  clearChildNotes(toDoContainer);
  displayToDos(array);
}

function listenForTrashSymbolClick(array) {
  const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");
  for (let j = 0; j < trashSymbolNodeList.length; j++) {
    trashSymbolNodeList[j].addEventListener("click", (event) => {
      console.log(event);
      deleteToDo(array, j);
    });
  }
}

// Export
export {
  deleteToDo,
  listenForTrashSymbolClick,
};

