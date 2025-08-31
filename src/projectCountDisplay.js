import { arrayOfToDoObjects } from "./createToDos.js";

// Selectors
const lifeProjectCount = document.getElementById("lifeProjectCount");

function countLifeProjects() {
    const lifeArrayOfObjects = arrayOfToDoObjects.filter((item) => item.project == "Life");
    return lifeArrayOfObjects;
}

function displayLifeProjects() {
    
}

export {countLifeProjects};