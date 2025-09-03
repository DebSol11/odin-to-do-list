import { countProjects } from "./projectCountDisplay";
import { arrayOfToDoObjects } from "./createToDos";

// Selectors
const addProjectBtn = document.getElementById("addProjectBtn");
const projectsDisplayUl = document.querySelector("#projectsDisplay");
const selectorProjects = document.querySelector("#project");

// Array
const projectsArray = ["Life", "Work", "Love"];

// Functions
// so you can use it dynamically in the code
// consider the map method
function createProjectsArrayFromArrayOfObjectsInput(array) {}

function getProjectInputValue() {
  const projectCreator = document.getElementById("projectCreator");
  const projectInputValue = projectCreator.value;
  return projectInputValue;
}

function addProjectInputToProjectsArray() {
  projectsArray.push(getProjectInputValue());
}

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

// Write a function which removes the individual project from the DOM once it has no to do's any more and is not just newly created
function updateProjects(array) {
  for (let i = 0; i < projectsArray.length; i++) {
    if (countProjects(array, i) == 0) {
      projectsArray.splice(i, 1);
    }
  }
  displayProjects(array);
}

function clearProjectsDisplayDiv() {
  while (projectsDisplayUl.hasChildNodes()) {
    projectsDisplayUl.removeChild(projectsDisplayUl.firstChild);
  }
}

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
function addProjectBtnListener(array) {
  addProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addProjectInputToProjectsArray();
    clearProjectsDisplayDiv();
    clearProjectsInForm();
    displayProjects(array);
    displayProjectsInForm();
    console.log(projectsArray);
  });
}

// Export
export {
  projectsArray,
  addProjectBtnListener,
  displayProjects,
  clearProjectsDisplayDiv,
  updateProjects,
};
