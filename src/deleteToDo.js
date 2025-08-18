import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js"

// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.
const deleteToDoDOMListener = document.addEventListener("DOMContentLoaded", () => {
  trashSymbolNodeListListener();
});

function deleteToDo(index) {
  arrayOfToDoObjects.splice(index, 1);
  clearTable();
  displayToDos();
}

function trashSymbolNodeListListener() {
  const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");
  for (let i = 0; i < trashSymbolNodeList.length; i++) {
    trashSymbolNodeList[i].addEventListener("click", () => {
      deleteToDo(i);
    });
  }
}

export {deleteToDoDOMListener, trashSymbolNodeListListener};