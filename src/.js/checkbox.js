import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { clearChildNotes } from "./detailsBtn.js";

function listenForCheckBoxClick(array) {
  const checkboxNodeList = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkboxNodeList.length; i++) {
    checkboxNodeList[i].addEventListener("click", () => {
      const toDoContainer = document.getElementById("toDoContainer2");
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
