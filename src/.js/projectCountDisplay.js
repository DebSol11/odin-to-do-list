import { arrayOfToDoObjects } from "./createToDos.js";
import { projectsArray } from "./addProjects.js";

// function countLifeProjects() {
//   const lifeArrayOfObjects = arrayOfToDoObjects.filter(
//     (item) => item.project == "Life"
//   );
//   const numberOfLifeProjectToDos = lifeArrayOfObjects.length;
//   return numberOfLifeProjectToDos;
// }

// function displayLifeProjectsNumber() {
//   const lifeProjectCount = document.getElementById("lifeProjectCount");
//   if (countLifeProjects() == 0) {
//     lifeProjectCount.remove();
//   } else {
//     lifeProjectCount.textContent = countLifeProjects();
//   }
// }

// generalized
function countProjects(index) {
  const arrayOfObjects = arrayOfToDoObjects.filter(
    (item) => item.project == projectsArray[index]
  );
  const numberOfProjectToDos = arrayOfObjects.length;
  return numberOfProjectToDos;
}

// this function does not work as intended jet
function displayProjectsNumber(index) {
  const projectCount = document.getElementById(`${index}`);
  if (countProjects() == 0) {
    projectCount.remove();
  } else {
    projectCount.textContent = countProjects();
  }
}

export { countProjects, displayProjectsNumber };
