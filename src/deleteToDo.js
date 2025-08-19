import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js";

const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");

// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.
const deleteToDoDOMListener = document.addEventListener(
  "DOMContentLoaded",
  () => {
    trashSymbolNodeListListener();
  }
);

function deleteToDo(index) {
  arrayOfToDoObjects.splice(index, 1);
  clearTable();
  displayToDos();
}

// function trashSymbolNodeListListener() {
//   const trashSymbolNodeList = document.querySelectorAll(".trash-symbol");
//   // The problem has to do with the for loop
//   // how do i ensure the a function execute only once,
//   // closures are here to help...maybe but not today
//   for (let i = 0; i < trashSymbolNodeList.length; i++) {
//     trashSymbolNodeList[i].addEventListener("click", () => {
//       deleteToDo(i);
//     });
//   }
// }

function trashSymbolNodeListListener() {
  
}

export {
  trashSymbolNodeList,
  deleteToDoDOMListener,
  deleteToDo,
  trashSymbolNodeListListener,
};
