// function displayToDoButton() {
//   const divContentWrap = document.querySelector(".content-wrap")
//   let toDoBtn = document.createElement("button");
//   toDoBtn.textContent = "Add to do";
//   toDoBtn.setAttribute("id", "toDoBtn");
//   divContentWrap.appendChild(toDoBtn);
// }

const addToDoFormModal = document.getElementById("addToDoFormModal");

function listenForAddToDoBtnClick() {
  const addToDoIcon = document.querySelector("#addToDoIcon");
  const submitBtn = document.getElementById("submitBtn");
  addToDoIcon.addEventListener("click", () => {
    console.log("Works");
    addToDoFormModal.classList.add("active");
    addToDoFormModal.classList.add("open");
    addToDoFormModal.style.display = "block";
  });
}

function listenForCloseModalClick() {
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    addToDoFormModal.classList.add("slideOut");
    setTimeout(() => {
      addToDoFormModal.classList.remove("active", "slideOut");
      addToDoFormModal.style.display = "none";
    }, 500); // Wait for the animation to complete (500ms)
  });
}

export { listenForAddToDoBtnClick, listenForCloseModalClick };
