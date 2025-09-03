// COMMENTED OUT FOR DEVELOPMENT
// HOW TO IMPORT CSS IN WEBPACK?
import "../../src/styles.css"
import "../../src/toDoForm.css"
import { arrayOfToDoObjects } from "./createToDos.js";
import { displayToDos } from "./displayToDos.js";
import { addProjectBtnListener } from "./addProjects.js";
import { listenForOpenModalBtnClick, listenForCloseModalClick } from "./addToDo.js";
import { listenForProjectLiClick } from "./projectFilterToDos.js";
import { getValuesOfObjectArrayKey, removeDuplicateElementsFromArray } from "./generalFunctions.js";
import { submitBtnListener } from "./createToDos.js";

displayToDos(arrayOfToDoObjects);
listenForOpenModalBtnClick();
listenForCloseModalClick();
submitBtnListener(arrayOfToDoObjects);
addProjectBtnListener(arrayOfToDoObjects);
listenForProjectLiClick();
removeDuplicateElementsFromArray((getValuesOfObjectArrayKey(arrayOfToDoObjects, "project")));


// displayToDos(arrayOfToDoObjects);


// compared to removing, simplifying and increasing speed, adding extra functionality is a piece of cake