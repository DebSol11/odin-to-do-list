// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "../../src/styles.css";
import "../../src/toDoForm.css";
// import { arrayOfToDoObjects } from "./createToDos.js";
// import { displayToDos } from "./displayToDos.js";
// import { addProjectBtnListener } from "./addProjects.js";
// import { listenForOpenModalBtnClick, listenForCloseModalClick } from "./addToDo.js";
// import { listenForProjectLiClick } from "./projectFilterToDos.js";
// import { getValuesOfObjectArrayKey, removeDuplicateElementsFromArray } from "./generalFunctions.js";
// import { submitBtnListener } from "./createToDos.js";

// displayToDos(arrayOfToDoObjects);
// listenForOpenModalBtnClick();
// listenForCloseModalClick();
// submitBtnListener(arrayOfToDoObjects);
// addProjectBtnListener(arrayOfToDoObjects);
// listenForProjectLiClick();
// removeDuplicateElementsFromArray((getValuesOfObjectArrayKey(arrayOfToDoObjects, "project")));

// displayToDos(arrayOfToDoObjects);

// compared to removing, simplifying and increasing speed, adding extra functionality is a piece of cake

// "Bugs" to fix:
// - When pressed an a project all the available Projects should still be shown, not only the pressed one.
// - When a specific project is selected and a new to do for it is created and added it should only display the to does of the selected project but add the to do to an array where all the to does reside
// - Same logic as the above bullet point should apply when a to do is edited. It should add the edited to do to an array of objects where all the to does are in but only display the previously selected project to does
// - The numbers after the projects should update according to the deleted to does
// - Last if a project is added new all the above should also work on that new project
//
//
//
//
//
//
//
// The code is highly influenced by the video on YouTube from Web Dev Simplified - How to Code A Better To-Do List - Tutorial
// https://www.youtube.com/watch?v=W7FaYfuwu70 (visited on 2025-09-04)

// Selectors
const projectsArrayContainer = document.querySelector("[data-projectsArray]");
const newProjectForm = document.querySelector("[data-new-project-form");
const newProjectInput = document.querySelector("[data-new-project-input");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);

// Local storage key value pairs
// We create a NAMESPACE here to reduce the risk of collisions for the user
// It prevents us from overwriting information that is already in the local storage or preventing other websites from overwriting your local storage keys
const LOCAL_STORAGE_PROJECT_KEY = "task.projectsArray";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedProjectId";

// We want to get this array from the local storage instead of setting it manually
// So what the following line of code does is saying: Get the information from local storage using the key LOCAL_STORAGE_PROJECT_KEY and if it exists parse it into an object because it is initially a string or if it does no exist give us an empty array of projectsArray to start with
let projectsArray =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_LIST_ID_KEY
);

// When you dynamically add an element to the page in this case a project you need to always add an event listener to it, but there is a way around it. By adding an event Listener to the container that contains all the projects you are dynamically adding. This way you can also get around the nodeList/ querySelectorAll usage. What this does is essentially adding an event Listener to all the elements inside the container
projectsArrayContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});

// Event Listeners
newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  // check if an actual name was passed in
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  // now we clear out the input field for a better user experience
  newProjectInput.value = null;
  projectsArray.push(project);
  saveAndRender();
});

// We create a new projectsArray with the matching criteria in the filter function
deleteProjectButton.addEventListener("click", (e) => {
  projectsArray = projectsArray.filter(
    (project) => project.id !== selectedProjectId
  );
  // since the selectedProject is taken out of the List set it to null
  selectedProjectId = null;
  saveAndRender();
});

// Function definitions
function createProject(name) {
  // make a unique id very easily using the current date and time
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

// We want to safe this project to the local storage
function save() {
  localStorage.setItem(
    LOCAL_STORAGE_PROJECT_KEY,
    JSON.stringify(projectsArray)
  );
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProjectId);
}

function render() {
  clearElement(projectsArrayContainer);
  projectsArray.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("project-name");
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-project");
    }
    projectsArrayContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Function calls
render();


// Implementation of the second part
