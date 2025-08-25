// Import
import { displayToDos, clearTable } from "./displayToDos.js";

// Array containing the to do objects
let arrayOfToDoObjects = [
  {
    project: "Life",
    priority: "AAA",
    title: "Movement",
    description: "Some form of physical activity.",
    dueDate: "every day",
    notes: "Gradually increase intensity.",
    checklist: true,
  },
];

// Factory function to create toDoObjects
function createToDoObject(
  project,
  priority,
  title,
  description,
  dueDate,
  notes,
  checklist
) {
  return { project, priority, title, description, dueDate, notes, checklist };
}

// Test object
const toDo1 = createToDoObject(
  "Life",
  "AAA",
  "Fart",
  "A compression of air exiting the after thereby making a noticeable sound",
  "01.01.0101",
  "Only do the fart if the risk of a wet fart does not exceed 50%",
  false
);
arrayOfToDoObjects.push(toDo1);
console.log(arrayOfToDoObjects);

// Functions
function createToDoObjectFromInput() {
  // Get the input elements
  const project = document.getElementById("project");
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  // Call the factory function and create a new instance of a to do object
  const toDoObject = createToDoObject(
    project.value,
    priority.value,
    title.value,
    description.value,
    dueDate.value,
    notes.value,
    false
  );
  // return the to do object
  return toDoObject;
}

function addToDoObjectFromInputToArray() {
  arrayOfToDoObjects.push(createToDoObjectFromInput());
}

function clearTheForm() {
  // You may consider to use prototypal inheritance with factories when your mind is fresh
  // more information: https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern
  // And/ or have a look at getters and setters and see if this concept can be incorporated here
  // more information: https://javascript.info/property-accessors
  // But for now just repeat the code :D
  let project = document.getElementById("project");
  let priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  // Set the input fields to empty strings again
  project.value = "Life";
  priority.value = "AA";
  title.value = "";
  description.value = "";
  dueDate.value = "";
  notes.value = "";
}

// Event listeners
const submitBtnListener = submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addToDoObjectFromInputToArray();
  clearTable();
  displayToDos();
  clearTheForm();
});

// Export
export { arrayOfToDoObjects, submitBtnListener };
