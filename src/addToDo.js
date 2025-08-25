const addToDoFormModal = document.getElementById("addToDoFormModal");

function listenForOpenModalBtnClick() {
  const addToDoIcon = document.querySelector("#addToDoIcon");
  addToDoIcon.addEventListener("click", () => {
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

export { addToDoFormModal, listenForOpenModalBtnClick, listenForCloseModalClick };
