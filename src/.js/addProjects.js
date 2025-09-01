import { countProjects } from "./projectCountDisplay";

// Selectors
const addProjectBtn = document.getElementById("addProjectBtn");
const projectsDisplayUl = document.querySelector("#projectsDisplay");
const selectorProjects = document.querySelector("#project");

// Array
const projectsArray = ["Life", "Work", "Love"];

// Functions
function getProjectInputValue() {
  const projectCreator = document.getElementById("projectCreator");
  const projectInputValue = projectCreator.value;
  return projectInputValue;
}

function addProjectInputToProjectsArray() {
  projectsArray.push(getProjectInputValue());
}

function displayProjects() {
  for (let i = 0; i < projectsArray.length; i++) {
    let newProject = document.createElement("li");
    newProject.textContent = projectsArray[i];
    newProject.setAttribute(
      "id",
      `${projectsArray[i].toLowerCase() + "Projects"}`
    );
    let newSpan = document.createElement("span");
    newSpan.textContent = countProjects(i);
    newProject.appendChild(newSpan);
    projectsDisplayUl.appendChild(newProject);
  }
}

// Write a function which removes the individual project from the DOM once it has no to do's any more and is not just newly created
function checkForProjectFinished() {
  for (let i = 0; i < projectsArray.length; i++) {
    if (countProjects(i) == 0) {
      projectsArray.splice(i, 1);
    }
  }
}

function displayProjectsNumber(index) {
  const projectCount = document.getElementById(`${index}`);
  if (countProjects() == 0) {
    projectCount.remove();
  } else {
    projectCount.textContent = countProjects();
  }
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
const addProjectBtnListener = addProjectBtn.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    addProjectInputToProjectsArray();
    clearProjectsDisplayDiv();
    clearProjectsInForm();
    displayProjects();
    displayProjectsInForm();
    console.log(projectsArray);
  }
);

// Export
export { projectsArray, addProjectBtnListener, displayProjects , clearProjectsDisplayDiv, checkForProjectFinished};
