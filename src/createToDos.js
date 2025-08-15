// export const greeting = "Hello, Odinite!";

let toDoObject = {
  title: "Train",
  description:
    "Do some form of physical activity during the day, may it be with or without a specific training goal",
  dueDate: "every day",
  priority: "AAA",
  notes: "To raise to the sky",
  checklist: true,
};

let arrayOfToDoObjects = [];

// REFACTORING CONSTRUCTOR INTO FACTORY FUNCTION
const ToDoObject = function (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
};
// hey, this is a constructor -
// then this can be refactored into a factory!

function createToDoObject(
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) {
  return { title, description, dueDate, priority, notes, checklist };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

const toDo1 = createToDoObject(
  "Fart",
  "A compression of air exiting the after thereby making a noticeable sound",
  "01.01.0101",
  "AAA",
  "Only do the fart if the risk of a wet fart does not exceed 50%",
  false
);

console.log(toDo1);
console.log(toDo1.title);
console.log(toDo1.notes);

arrayOfToDoObjects.push(toDoObject);

console.log(arrayOfToDoObjects);

arrayOfToDoObjects.push(toDo1);

console.log(arrayOfToDoObjects);



function createInputObject() {
  // Initialize an empty object
  let inputObject = {};
  // Get the input elements
  const priority = document.getElementById("priority");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const notes = document.getElementById("notes");
  // Add the values to the object
  inputObject = {
    priority: priority.value,
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    notes: notes.value,
    checklist: false,
  };
  return inputObject;
}

function addInputObjectToArray() {
    arrayOfToDoObjects.push(createInputObject())
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addInputObjectToArray();
  console.log(arrayOfToDoObjects);
});

