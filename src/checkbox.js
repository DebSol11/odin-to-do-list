import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js";
import { clearChildNotes } from "./detailsBtn.js";

function listenForCheckBoxClick() {
  const checkboxNodeList = document.querySelectorAll(".checkbox");
  const toDoContainer = document.getElementById("toDoContainer");
  for (let i = 0; i < checkboxNodeList.length; i++) {
    checkboxNodeList[i].addEventListener("click", () => {
      toggleChecklistValue(i);
      clearChildNotes(toDoContainer);
      displayToDos();
    });
  }
}

function toggleChecklistValue(index) {
  if (arrayOfToDoObjects[index].checklist == true) {
    arrayOfToDoObjects[index].checklist = false;
  } else if (arrayOfToDoObjects[index].checklist == false) {
    arrayOfToDoObjects[index].checklist = true;
  }
  console.log(arrayOfToDoObjects);
}

export { listenForCheckBoxClick };
