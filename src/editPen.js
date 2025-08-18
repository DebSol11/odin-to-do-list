import { arrayOfToDoObjects } from "./createToDos.js";

// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.
const editPenDOMListener = document.addEventListener("DOMContentLoaded", () => {
  const editPenNodeList = document.querySelectorAll(".edit-pen");
  for (let i = 0; i < editPenNodeList.length; i++) {
    editPenNodeList[i].addEventListener("click", () => {
      editToDo(i);
    });
  }
});

function editToDo(index) {
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  priority.value = arrayOfToDoObjects[index].priority;
  title.value = arrayOfToDoObjects[index].title;
  description.value = arrayOfToDoObjects[index].description;
  dueDate.value = arrayOfToDoObjects[index].dueDate;
  notes.value = arrayOfToDoObjects[index].notes;
}

function editPenNodeListListener() {
  const editPenNodeList = document.querySelectorAll(".edit-pen");
  for (let i = 0; i < editPenNodeList.length; i++) {
    editPenNodeList[i].addEventListener("click", () => {
      editToDo(i);
    });
  }
}

export { editPenDOMListener, editPenNodeListListener };
