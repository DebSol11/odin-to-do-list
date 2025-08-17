import { arrayOfToDoObjects } from "./createToDos.js";

const editPen0 = document.getElementById("editPen0");

const editPen0Listener = editPen0.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(arrayOfToDoObjects[0]);
})

export { editPen0, editPen0Listener };


















// for (let i = 0; i < arrayOfToDoObjects.length; i++) {
//     let dynamicVariable = `variable_${i}`
// }

