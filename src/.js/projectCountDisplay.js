import { arrayOfToDoObjects } from "./createToDos.js";
import { projectsArray } from "./addProjects.js";

// generalized
function countProjects(index) {
  const arrayOfObjects = arrayOfToDoObjects.filter(
    (item) => item.project == projectsArray[index]
  );
  const numberOfProjectToDos = arrayOfObjects.length;
  return numberOfProjectToDos;
}

export { countProjects };
