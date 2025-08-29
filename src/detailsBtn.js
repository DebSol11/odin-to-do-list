import { arrayOfToDoObjects } from "./createToDos.js";

const displayDetailsModal = document.getElementById("displayDetailsModal");
const toDoDetails = document.getElementById("toDoDetails");

function displayDetails(index) {
  let keysArray = Object.keys(arrayOfToDoObjects[index]);
  console.log(keysArray);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("detailsGrid");
  const projectKey = document.createElement("h3");
  projectKey.classList.add("displayInline");
  projectKey.textContent =
    keysArray[0].charAt(0).toUpperCase() + keysArray[0].slice(1) + ": ";
  projectContainer.appendChild(projectKey);
  const projectPara = document.createElement("p");
  projectPara.classList.add("displayInline");
  projectPara.textContent = arrayOfToDoObjects[index].project;
  projectContainer.appendChild(projectPara);
  toDoDetails.appendChild(projectContainer);

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("detailsGrid");
  const priorityKey = document.createElement("h3");
  priorityKey.classList.add("displayInline");
  priorityKey.textContent =
    keysArray[1].charAt(0).toUpperCase() + keysArray[1].slice(1) + ": ";
  priorityContainer.appendChild(priorityKey);
  const priorityPara = document.createElement("p");
  priorityPara.classList.add("displayInline");
  priorityPara.textContent = arrayOfToDoObjects[index].priority;
  priorityContainer.appendChild(priorityPara);
  toDoDetails.appendChild(priorityContainer);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("detailsGrid");
  const titleKey = document.createElement("h3");
  titleKey.classList.add("displayInline");
  titleKey.textContent =
    keysArray[2].charAt(0).toUpperCase() + keysArray[2].slice(1) + ": ";
  titleContainer.appendChild(titleKey);
  const titlePara = document.createElement("p");
  titlePara.classList.add("displayInline");
  titlePara.textContent = arrayOfToDoObjects[index].title;
  titleContainer.appendChild(titlePara);
  toDoDetails.appendChild(titleContainer);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("detailsGrid");
  const descriptionKey = document.createElement("h3");
  descriptionKey.classList.add("displayInline");
  descriptionKey.textContent =
    keysArray[3].charAt(0).toUpperCase() + keysArray[3].slice(1) + ": ";
  descriptionContainer.appendChild(descriptionKey);
  const descriptionPara = document.createElement("p");
  descriptionPara.classList.add("displayInline");
  descriptionPara.textContent = arrayOfToDoObjects[index].description;
  descriptionContainer.appendChild(descriptionPara);
  toDoDetails.appendChild(descriptionContainer);

  const dueDateContainer = document.createElement("div");
  dueDateContainer.classList.add("detailsGrid");
  const dueDateKey = document.createElement("h3");
  dueDateKey.classList.add("displayInline");
  dueDateKey.textContent =
    keysArray[4].charAt(0).toUpperCase() + keysArray[4].slice(1) + ": ";
  dueDateContainer.appendChild(dueDateKey);
  const dueDatePara = document.createElement("p");
  dueDatePara.classList.add("displayInline");
  dueDatePara.textContent = arrayOfToDoObjects[index].dueDate;
  dueDateContainer.appendChild(dueDatePara);
  toDoDetails.appendChild(dueDateContainer);

  const notesContainer = document.createElement("div");
  notesContainer.classList.add("detailsGrid");
  const notesKey = document.createElement("h3");
  notesKey.classList.add("displayInline");
  notesKey.textContent =
    keysArray[5].charAt(0).toUpperCase() + keysArray[5].slice(1) + ": ";
  notesContainer.appendChild(notesKey);
  const notesPara = document.createElement("p");
  notesPara.classList.add("displayInline");
  notesPara.textContent = arrayOfToDoObjects[index].notes;
  notesContainer.appendChild(notesPara);
  toDoDetails.appendChild(notesContainer);
}

function listenForDetailsBtnClick() {
  const detailsBtnNodeList = document.querySelectorAll(".detailsBtn");
  for (let i = 0; i < detailsBtnNodeList.length; i++) {
    detailsBtnNodeList[i].addEventListener("click", (event) => {
      console.log(event);
      displayDetailsModal.classList.add("active");
      displayDetailsModal.classList.add("open");
      displayDetailsModal.style.display = "block";
      displayDetails(i);
    });
  }
}

function listenForCloseDetailsClick() {
  const closeDetailsModal = document.getElementById("closeDetailsModal");
  closeDetailsModal.addEventListener("click", () => {
    displayDetailsModal.classList.add("slideOut");
    setTimeout(() => {
      displayDetailsModal.classList.remove("active", "slideOut");
      displayDetailsModal.style.display = "none";
      clearChildNotes(toDoDetails);
    }, 500); // Wait for the animation to complete (500ms)
  });
}

function clearChildNotes(parentNode) {
  while (parentNode.hasChildNodes()) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

export { listenForDetailsBtnClick, listenForCloseDetailsClick, clearChildNotes };
