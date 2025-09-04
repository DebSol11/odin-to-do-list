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

// "Bugs" to fix:
// - When pressed an a project all the available Projects should still be shown, not only the pressed one.
// - When a specific project is selected and a new to do for it is created and added it should only display the to does of the selected project but add the to do to an array where all the to does reside 
// - Same logic as the above bullet point should apply when a to do is edited. It should add the edited to do to an array of objects where all the to does are in but only display the previously selected project to does
// - The numbers after the projects should update according to the deleted to does
// - Last if a project is added new all the above should also work on that new project