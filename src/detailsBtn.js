import { arrayOfToDoObjects } from "./createToDos.js";
import { addToDoFormModal } from "./addToDo.js";


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

function listenForDetailsBtnClick() {
const detailsBtnNodeList = document.querySelectorAll(".detailsBtn");
  for (let i = 0; i < detailsBtnNodeList.length; i++) {
    detailsBtnNodeList[i].addEventListener("click", () => {
      editToDo(i);
      addToDoFormModal.classList.add("active");
      addToDoFormModal.classList.add("open");
      addToDoFormModal.style.display = "block";
    });
  }
}

export { listenForDetailsBtnClick };