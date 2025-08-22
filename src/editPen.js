import { arrayOfToDoObjects } from "./createToDos.js";

// This can maybe be kicked out of the code, if it works without it in the npm run dev environment!
// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.
const editPenDOMListener = document.addEventListener("DOMContentLoaded", () => {
  listenForEditPenClick();
});

function editToDo(index) {
  const project = document.getElementById("project");
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  project.value = arrayOfToDoObjects[index].project;
  priority.value = arrayOfToDoObjects[index].priority;
  title.value = arrayOfToDoObjects[index].title;
  description.value = arrayOfToDoObjects[index].description;
  dueDate.value = arrayOfToDoObjects[index].dueDate;
  notes.value = arrayOfToDoObjects[index].notes;
}

function listenForEditPenClick() {
  const editPenNodeList = document.querySelectorAll(".edit-pen");
  for (let i = 0; i < editPenNodeList.length; i++) {
    editPenNodeList[i].addEventListener("click", () => {
      editToDo(i);
    });
  }
}

export { editPenDOMListener, listenForEditPenClick };
