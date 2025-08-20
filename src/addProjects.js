const addProjectBtn = document.getElementById("addProjectBtn");
const projectDisplayDiv = document.querySelector("#projectDisplay");
const selectorProjects = document.querySelector("#project");

const projectsArray = ["Life", "Work", "Love"];

function getProjectInputValue() {
  const projectCreator = document.getElementById("projectCreator");
  const projectInputValue = projectCreator.value;
  return projectInputValue;
}

function addProjectInputToProjectsArray() {
  projectsArray.push(getProjectInputValue());
}

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

function displayProjects() {
  for (let i = 0; i < projectsArray.length; i++) {
    let newProject = document.createElement("h3");
    newProject.textContent = projectsArray[i];
    projectDisplayDiv.appendChild(newProject);
  }
}

function clearProjectsDisplayDiv() {
  while (projectDisplayDiv.hasChildNodes()) {
    projectDisplayDiv.removeChild(projectDisplayDiv.firstChild);
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



export { projectsArray, addProjectBtnListener };
