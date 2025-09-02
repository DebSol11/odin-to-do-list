// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "../../src/styles.css"
import "../../src/toDoForm.css"
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { addProjectBtnListener } from "./addProjects.js";
import { listenForOpenModalBtnClick, listenForCloseModalClick } from "./addToDo.js";

displayToDos(arrayOfToDoObjects);
listenForOpenModalBtnClick();
listenForCloseModalClick();
addProjectBtnListener;

