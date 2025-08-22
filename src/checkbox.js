import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos, clearTable } from "./displayToDos.js";

function listenForCheckBoxClick() {
  const checkboxNodeList = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkboxNodeList.length; i++) {
    checkboxNodeList[i].addEventListener("click", () => {
      console.log("checkbox clicked");
      toggleChecklistValue(i);
      clearTable();
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
