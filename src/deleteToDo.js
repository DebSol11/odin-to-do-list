// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js";

// Functions 
function deleteToDo(index) {
  arrayOfToDoObjects.splice(index, 1);
  clearTable();
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

