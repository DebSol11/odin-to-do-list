import { arrayOfToDoObjects } from "./createToDos.js";

// We need to wrap the click eventListener here in a DOMContentLoaded eventListener, because otherwise it does not wok as intended. The DOM object would not be loaded jet and throw an error.

const editPen0Listener = document.addEventListener("DOMContentLoaded", () => {
  const editPen0 = document.getElementById("editPen0");

  console.log(editPen0);

  editPen0.addEventListener("click", () => {
    console.log(arrayOfToDoObjects[0]);
    alert("You clicked the editPen0");
  });
});

export { editPen0Listener };

// for (let i = 0; i < arrayOfToDoObjects.length; i++) {
//     let dynamicVariable = `variable_${i}`
// }
