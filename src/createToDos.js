import { displayToDos, clearTable } from "./displayToDos.js";
import { editPenNodeListListener } from "./editPen.js";


let arrayOfToDoObjects = [
  {
    priority: "AAA",
    title: "Movement",
    description: "Some form of physical activity.",
    dueDate: "every day",
    notes: "Gradually increase intensity.",
    checklist: false,
  },
];

// factory function to create toDoObjects
function createToDoObject(
  priority,
  title,
  description,
  dueDate,
  notes,
  checklist
) {
  return { priority, title, description, dueDate, notes, checklist };
}

// test object
const toDo1 = createToDoObject(
  "AAA",
  "Fart",
  "A compression of air exiting the after thereby making a noticeable sound",
  "01.01.0101",
  "Only do the fart if the risk of a wet fart does not exceed 50%",
  false
);

arrayOfToDoObjects.push(toDo1);
console.log(arrayOfToDoObjects);

function createToDoObjectFromInput() {
  // Get the input elements
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  // Call the factory function and create a new instance of a to do object
  const toDoObject = createToDoObject(
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

const submitBtnListener = submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addToDoObjectFromInputToArray();
  clearTable();
  displayToDos();
  editPenNodeListListener();
  console.log(arrayOfToDoObjects);
});

export { arrayOfToDoObjects, submitBtnListener };
