const addProjectBtn = document.getElementById("addProjectBtn");
const projectSection = document.querySelector("#projects");
const addProjectForm = document.querySelector("#addProjectForm");

const projectsArray = ["Life"];

function getProjectInputValue() {
  const project = document.getElementById("project");
  const projectInputValue = project.value;
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
    displayProjects();
    console.log(projectsArray);
  }
);

function displayProjects() {
  for (let i = 0; i < projectsArray.length; i++) {
    let newProject = document.createElement("h3");
    newProject.textContent = projectsArray[i];
    projectSection.insertBefore(newProject, addProjectForm);
  }
}

export { addProjectBtnListener };
