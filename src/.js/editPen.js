import { arrayOfToDoObjects } from "./createToDos.js";
import { addToDoFormModal } from "./addToDo.js";

function editToDo(array, index) {
  const project = document.getElementById("project");
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  project.value = array[index].project;
  priority.value = array[index].priority;
  title.value = array[index].title;
  description.value = array[index].description;
  dueDate.value = array[index].dueDate;
  notes.value = array[index].notes;
}

function listenForEditPenClick(array) {
  const editPenNodeList = document.querySelectorAll(".edit-pen");
  for (let i = 0; i < editPenNodeList.length; i++) {
    editPenNodeList[i].addEventListener("click", () => {
      editToDo(array, i);
      addToDoFormModal.classList.add("active");
      addToDoFormModal.classList.add("open");
      addToDoFormModal.style.display = "block";
    });
  }
}

export { listenForEditPenClick };
