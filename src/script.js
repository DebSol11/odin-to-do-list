// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "./styles.css"
import "./toDoForm.css"
import { displayToDos } from "./displayToDos.js";
// import { submitBtnListener } from "./createToDos.js";
import { addProjectBtnListener } from "./addProjects.js";
import { displayToDoButton, listenForAddToDoBtnClick } from "./addToDo.js";

displayToDos();
// submitBtnListener;
displayToDoButton();
listenForAddToDoBtnClick();
addProjectBtnListener;

