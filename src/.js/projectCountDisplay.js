import { arrayOfToDoObjects } from "./createToDos.js";

// Selectors
const lifeProjectCount = document.getElementById("lifeProjectCount");

function countLifeProjects() {
  const lifeArrayOfObjects = arrayOfToDoObjects.filter(
    (item) => item.project == "Life"
  );
  const numberOfLifeProjectToDos = lifeArrayOfObjects.length;
  return numberOfLifeProjectToDos;
}

function displayLifeProjectsNumber() {
  if (countLifeProjects() == 0) {
    lifeProjectCount.remove();
  } else {
    lifeProjectCount.textContent = countLifeProjects();
  }
}

export { displayLifeProjectsNumber };
