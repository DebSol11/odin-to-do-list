import { arrayOfToDoObjects } from "./createToDos.js";

const displayDetailsModal = document.getElementById("displayDetailsModal");
const toDoDetails = document.getElementById("toDoDetails");


function displayDetails(index) {
  let keysArray = Object.keys(arrayOfToDoObjects[index]);
  console.log(keysArray);
  const projectPara = document.createElement("p");
  projectPara.textContent = keysArray[0].toUpperCase() +": "+ arrayOfToDoObjects[index].project;
  toDoDetails.appendChild(projectPara);
  const priorityPara = document.createElement("p");
  priorityPara.textContent = keysArray[1].toUpperCase() +": "+ arrayOfToDoObjects[index].priority;
  toDoDetails.appendChild(priorityPara);
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



export { listenForDetailsBtnClick, listenForCloseDetailsClick };
