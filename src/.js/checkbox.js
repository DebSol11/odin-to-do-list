import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { clearChildNotes } from "./detailsBtn.js";

function listenForCheckBoxClick(array) {
  const checkboxNodeList = document.querySelectorAll(".checkbox");
  const toDoContainer = document.getElementById("toDos");
  for (let i = 0; i < checkboxNodeList.length; i++) {
    checkboxNodeList[i].addEventListener("click", () => {
      toggleChecklistValue(array, i);
      clearChildNotes(toDoContainer);
      displayToDos(array);
    });
  }
}

function toggleChecklistValue(array, index) {
  if (array[index].checklist == true) {
    array[index].checklist = false;
  } else if (array[index].checklist == false) {
    array[index].checklist = true;
  }
}

export { listenForCheckBoxClick };
