// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "./styles.css"
import "./toDoForm.css"
import { displayToDos } from "./displayToDos.js";
// import { submitBtnListener } from "./createToDos.js";
import { addProjectBtnListener } from "./addProjects.js";
import { listenForOpenModalBtnClick, listenForCloseModalClick } from "./addToDo.js";
import { listenForDetailsBtnClick, listenForCloseDetailsClick } from "./detailsBtn.js";

displayToDos();
// submitBtnListener;
listenForOpenModalBtnClick();
listenForCloseModalClick();
listenForDetailsBtnClick();
listenForCloseDetailsClick();
addProjectBtnListener;

