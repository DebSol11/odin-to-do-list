import { countProjects } from "./projectCountDisplay";
import { arrayOfToDoObjects } from "./createToDos";
import { listenForProjectLiClick } from "./projectFilterToDos";

import { removeDuplicateElementsFromArray, getValuesOfObjectArrayKey } from "./generalFunctions";


// Selectors
const addProjectBtn = document.getElementById("addProjectBtn");
const projectsDisplayUl = document.querySelector("#projectsDisplay");
const selectorProjects = document.querySelector("#project");

const projectsArrayContainer = document.querySelector("[data-projectsArray]");

// Array
const projectsArray = ['name', 'todo'];

function render() {
  clearElement(projectsArrayContainer);
  projectsArray.forEach(project => {
    const projectElement = document.createElement("li");
    projectElement.classList.add("project-name");
    projectElement.innerText = project;
    projectsArrayContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


render();










// Functions
// so you can use it dynamically in the code
// consider the map method

// function getProjectInputValue() {
//   const projectCreator = document.getElementById("projectCreator");
//   const projectInputValue = projectCreator.value;
//   return projectInputValue;
// }

// function addProjectInputToProjectsArray() {
//   projectsArray.push(getProjectInputValue());
// }

function displayProjects(array) {
  for (let i = 0; i < projectsArray.length; i++) {
    let newProject = document.createElement("li");
    newProject.textContent = projectsArray[i];
    newProject.setAttribute("id", `${projectsArray[i]}`);
    let newSpan = document.createElement("span");
    newSpan.textContent = countProjects(array, i);
    newProject.appendChild(newSpan);
    projectsDisplayUl.appendChild(newProject);
  }
}

function updateProjects(array) {
  for (let i = 0; i < projectsArray.length; i++) {
    if (countProjects(array, i) == 0) {
      projectsArray.splice(i, 1);
    }
  }
  displayProjects(array);
}

// function clearProjectsDisplayDiv() {
//   while (projectsDisplayUl.hasChildNodes()) {
//     projectsDisplayUl.removeChild(projectsDisplayUl.firstChild);
//   }
// }

function displayProjectsInForm() {
  for (let i = 0; i < projectsArray.length; i++) {
    let ProjectInForm = document.createElement("option");
    ProjectInForm.textContent = projectsArray[i];
    ProjectInForm.setAttribute("value", `${projectsArray[i]}`);
    selectorProjects.appendChild(ProjectInForm);
  }
}

function clearProjectsInForm() {
  while (selectorProjects.hasChildNodes()) {
    selectorProjects.removeChild(selectorProjects.firstChild);
  }
}

// Event listeners
// function addProjectBtnListener(array) {
//   addProjectBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     addProjectInputToProjectsArray();
//     clearProjectsDisplayDiv();
//     clearProjectsInForm();
//     displayProjects(array);
//     displayProjectsInForm();
//     listenForProjectLiClick();
//     console.log(projectsArray);
//   });
// }

// Export
export {
  projectsArray,
  addProjectBtnListener,
  displayProjects,
  clearProjectsDisplayDiv,
  updateProjects,
};
