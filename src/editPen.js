import { arrayOfToDoObjects } from "./createToDos.js";

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

export { listenForEditPenClick };
