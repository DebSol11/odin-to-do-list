// COMMENTED OUT FOR DEVELOPMENT
// import "./styles.css"
// import "./toDoForm.css"
import { displayToDos } from "./displayToDos.js";
import { submitBtnListener } from "./createToDos.js"
import { addProjectBtnListener } from "./addProjects.js";
import { editPenDOMListener } from "./editPen.js";
import { deleteToDoDOMListener } from "./deleteToDo.js";
// import { trashSymbolNodeListListener } from "./deleteToDo.js";
import { listenForTrashSymbolClick } from "./displayToDos.js";


displayToDos();
listenForTrashSymbolClick();
submitBtnListener;
addProjectBtnListener;
editPenDOMListener;
deleteToDoDOMListener;


// trashSymbolNodeListListener();



