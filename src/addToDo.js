function displayToDoButton() {
  const divContentWrap = document.querySelector(".content-wrap")
  let toDoBtn = document.createElement("button");
  toDoBtn.textContent = "Add to do";
  toDoBtn.setAttribute("id", "toDoBtn");
  divContentWrap.appendChild(toDoBtn);
}

function listenForAddToDoBtnClick() {
  const toDoBtn = document.querySelector("#toDoBtn")
  toDoBtn.addEventListener("click", () => {
    
  });
}

export { displayToDoButton, listenForAddToDoBtnClick };
