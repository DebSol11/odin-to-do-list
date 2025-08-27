import { arrayOfToDoObjects } from "./createToDos.js";

const displayDetailsModal = document.getElementById("displayDetailsModal");

function displayDetails(index) {
  const toDoDetails = document.getElementById("toDoDetails");
  const paragraph = document.createElement("p");
  paragraph.textContent = arrayOfToDoObjects[index].project;
  toDoDetails.appendChild(paragraph);
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
    }, 500); // Wait for the animation to complete (500ms)
  });
}

export { listenForDetailsBtnClick, listenForCloseDetailsClick };
