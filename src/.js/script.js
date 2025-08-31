// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "../../src/styles.css"
import "../../src/toDoForm.css"
import { displayToDos } from "./displayToDos.js";
import { addProjectBtnListener } from "./addProjects.js";
import { listenForOpenModalBtnClick, listenForCloseModalClick } from "./addToDo.js";
import { displayLifeProjectsNumber } from "./projectCountDisplay.js";

displayToDos();
listenForOpenModalBtnClick();
listenForCloseModalClick();
displayLifeProjectsNumber();
addProjectBtnListener;

