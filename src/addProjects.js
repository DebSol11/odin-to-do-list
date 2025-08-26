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
    projectsDisplayUl.appendChild(newProject);
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
export { projectsArray, addProjectBtnListener };
