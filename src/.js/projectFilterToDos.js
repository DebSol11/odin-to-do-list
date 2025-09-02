import { arrayOfToDoObjects } from "./createToDos";

function filterArray(forProject) {
  let newArray = arrayOfToDoObjects.filter((obj) => obj.project == forProject);
  return newArray;
}

function listenForProjectLiClick() {
  const projectNodeList = document.querySelectorAll("li");
  for (let i = 0; i < projectNodeList.length; i++) {
    projectNodeList[i].addEventListener("click", () => {
      console.log(filterArray(projectNodeList[i].id));
    });
  }
}

export { listenForProjectLiClick };
