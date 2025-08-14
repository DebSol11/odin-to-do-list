export const greeting = "Hello, Odinite!"

export let toDoObject = {
    title: "Train",
    description: "Do some form of physical activity during the day, may it be with or without a specific training goal",
    dueDate: "every day",
    priority: "AAA",
    notes: "To raise to the sky",
    checklist: true,
}



let arrayOfToDoObjects = [

]



// REFACTORING CONSTRUCTOR INTO FACTORY FUNCTION
const ToDoObject = function (title, description, dueDate, priority, notes, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createToDoObject (title, description, dueDate, priority, notes, checklist) {
  return { title, description, dueDate, priority, notes, checklist };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

const toDo1 = createToDoObject("Fart", "A compression of air exiting the after thereby making a noticeable sound", "01.01.0101", "AAA", "Only do the fart if the risk of a wet fart does not exceed 10%", "false");

console.log(toDo1);