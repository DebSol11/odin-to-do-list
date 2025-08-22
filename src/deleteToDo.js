// Import
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js";

// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.
// const deleteToDoDOMListener = document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     trashSymbolNodeListListener();
//   }
// );

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

