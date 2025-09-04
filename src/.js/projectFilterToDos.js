import { arrayOfToDoObjects } from "./createToDos";
import { displayToDos } from "./displayToDos";
import { clearChildNotes } from "./detailsBtn";
import { updateProjects } from "./addProjects";

function filterArray(forProject) {
  let newArray = arrayOfToDoObjects.filter((obj) => obj.project == forProject);
  console.log(newArray);
  return newArray;
}

function listenForProjectLiClick() {
  const projectNodeList = document.querySelectorAll("li");
  for (let i = 0; i < projectNodeList.length; i++) {
    projectNodeList[i].addEventListener("click", () => {
      let newArray = filterArray(projectNodeList[i].id);
  const toDoContainer = document.getElementById("toDoContainer2");
  clearChildNotes(toDoContainer);
  displayToDos(newArray);
  return newArray;
    });
  }
}

// function displayFilteredArray(i) {
//   const projectNodeList = document.querySelectorAll("li");
  
// }

export { listenForProjectLiClick };
