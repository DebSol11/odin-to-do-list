/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProjects.js":
/*!****************************!*\
  !*** ./src/addProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectBtnListener: () => (/* binding */ addProjectBtnListener)\n/* harmony export */ });\nconst addProjectBtn = document.getElementById(\"addProjectBtn\");\nconst projectDisplayDiv = document.querySelector(\"#projectDisplay\");\n\nconst projectsArray = [\"Life\"];\n\nfunction getProjectInputValue() {\n  const project = document.getElementById(\"project\");\n  const projectInputValue = project.value;\n  return projectInputValue;\n}\n\nfunction addProjectInputToProjectsArray() {\n  projectsArray.push(getProjectInputValue());\n}\n\nconst addProjectBtnListener = addProjectBtn.addEventListener(\n  \"click\",\n  (event) => {\n    event.preventDefault();\n    addProjectInputToProjectsArray();\n    clearProjectsDisplayDiv();\n    displayProjects();\n    console.log(projectsArray);\n  }\n);\n\nfunction displayProjects() {\n  for (let i = 0; i < projectsArray.length; i++) {\n    let newProject = document.createElement(\"h3\");\n    newProject.textContent = projectsArray[i];\n    projectDisplayDiv.appendChild(newProject);\n  }\n}\n\nfunction clearProjectsDisplayDiv() {\n  while (projectDisplayDiv.hasChildNodes()) {\n    projectDisplayDiv.removeChild(projectDisplayDiv.firstChild);\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkUHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvYWRkUHJvamVjdHMuanM/MjU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuY29uc3QgcHJvamVjdERpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3REaXNwbGF5XCIpO1xuXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gW1wiTGlmZVwiXTtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdElucHV0VmFsdWUoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gcHJvamVjdC52YWx1ZTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dFZhbHVlO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0SW5wdXRUb1Byb2plY3RzQXJyYXkoKSB7XG4gIHByb2plY3RzQXJyYXkucHVzaChnZXRQcm9qZWN0SW5wdXRWYWx1ZSgpKTtcbn1cblxuY29uc3QgYWRkUHJvamVjdEJ0bkxpc3RlbmVyID0gYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkUHJvamVjdElucHV0VG9Qcm9qZWN0c0FycmF5KCk7XG4gICAgY2xlYXJQcm9qZWN0c0Rpc3BsYXlEaXYoKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgfVxuKTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXTtcbiAgICBwcm9qZWN0RGlzcGxheURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RzRGlzcGxheURpdigpIHtcbiAgd2hpbGUgKHByb2plY3REaXNwbGF5RGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHByb2plY3REaXNwbGF5RGl2LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5RGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RCdG5MaXN0ZW5lciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/addProjects.js\n\n}");

/***/ }),

/***/ "./src/createToDos.js":
/*!****************************!*\
  !*** ./src/createToDos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayOfToDoObjects: () => (/* binding */ arrayOfToDoObjects),\n/* harmony export */   submitBtnListener: () => (/* binding */ submitBtnListener)\n/* harmony export */ });\n/* harmony import */ var _displayToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayToDos.js */ \"./src/displayToDos.js\");\n\n\nlet arrayOfToDoObjects = [\n  {\n    priority: \"AAA\",\n    title: \"Movement\",\n    description: \"Some form of physical activity.\",\n    dueDate: \"every day\",\n    notes: \"Gradually increase intensity.\",\n    checklist: false,\n  },\n];\n\n// factory function to create toDoObjects\nfunction createToDoObject(\n  priority,\n  title,\n  description,\n  dueDate,\n  notes,\n  checklist\n) {\n  return { priority, title, description, dueDate, notes, checklist };\n}\n\n// test object\nconst toDo1 = createToDoObject(\n  \"AAA\",\n  \"Fart\",\n  \"A compression of air exiting the after thereby making a noticeable sound\",\n  \"01.01.0101\",\n  \"Only do the fart if the risk of a wet fart does not exceed 50%\",\n  false\n);\n\narrayOfToDoObjects.push(toDo1);\nconsole.log(arrayOfToDoObjects);\n\nfunction createToDoObjectFromInput() {\n  // Get the input elements\n  const priority = document.getElementById(\"priority\");\n  const title = document.getElementById(\"title\");\n  const description = document.getElementById(\"description\");\n  const dueDate = document.getElementById(\"dueDate\");\n  const notes = document.getElementById(\"notes\");\n  // Call the factory function and create a new instance of a to do object\n  const toDoObject = createToDoObject(\n    priority.value,\n    title.value,\n    description.value,\n    dueDate.value,\n    notes.value,\n    false\n  );\n  // return the to do object\n  return toDoObject;\n}\n\nfunction addToDoObjectFromInputToArray() {\n  arrayOfToDoObjects.push(createToDoObjectFromInput());\n}\n\nconst submitBtnListener = submitBtn.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  addToDoObjectFromInputToArray();\n  (0,_displayToDos_js__WEBPACK_IMPORTED_MODULE_0__.clearTable)();\n  (0,_displayToDos_js__WEBPACK_IMPORTED_MODULE_0__.displayToDos)();\n  console.log(arrayOfToDoObjects);\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3JlYXRlVG9Eb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBVTtBQUNaLEVBQUUsOERBQVk7QUFDZDtBQUNBLENBQUM7O0FBRWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2NyZWF0ZVRvRG9zLmpzPzRlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzcGxheVRvRG9zLCBjbGVhclRhYmxlIH0gZnJvbSBcIi4vZGlzcGxheVRvRG9zLmpzXCI7XG5cbmxldCBhcnJheU9mVG9Eb09iamVjdHMgPSBbXG4gIHtcbiAgICBwcmlvcml0eTogXCJBQUFcIixcbiAgICB0aXRsZTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgZm9ybSBvZiBwaHlzaWNhbCBhY3Rpdml0eS5cIixcbiAgICBkdWVEYXRlOiBcImV2ZXJ5IGRheVwiLFxuICAgIG5vdGVzOiBcIkdyYWR1YWxseSBpbmNyZWFzZSBpbnRlbnNpdHkuXCIsXG4gICAgY2hlY2tsaXN0OiBmYWxzZSxcbiAgfSxcbl07XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRvRG9PYmplY3RzXG5mdW5jdGlvbiBjcmVhdGVUb0RvT2JqZWN0KFxuICBwcmlvcml0eSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBub3RlcyxcbiAgY2hlY2tsaXN0XG4pIHtcbiAgcmV0dXJuIHsgcHJpb3JpdHksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbm90ZXMsIGNoZWNrbGlzdCB9O1xufVxuXG4vLyB0ZXN0IG9iamVjdFxuY29uc3QgdG9EbzEgPSBjcmVhdGVUb0RvT2JqZWN0KFxuICBcIkFBQVwiLFxuICBcIkZhcnRcIixcbiAgXCJBIGNvbXByZXNzaW9uIG9mIGFpciBleGl0aW5nIHRoZSBhZnRlciB0aGVyZWJ5IG1ha2luZyBhIG5vdGljZWFibGUgc291bmRcIixcbiAgXCIwMS4wMS4wMTAxXCIsXG4gIFwiT25seSBkbyB0aGUgZmFydCBpZiB0aGUgcmlzayBvZiBhIHdldCBmYXJ0IGRvZXMgbm90IGV4Y2VlZCA1MCVcIixcbiAgZmFsc2Vcbik7XG5cbmFycmF5T2ZUb0RvT2JqZWN0cy5wdXNoKHRvRG8xKTtcbmNvbnNvbGUubG9nKGFycmF5T2ZUb0RvT2JqZWN0cyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG9PYmplY3RGcm9tSW5wdXQoKSB7XG4gIC8vIEdldCB0aGUgaW5wdXQgZWxlbWVudHNcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuICAvLyBDYWxsIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGFuZCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSB0byBkbyBvYmplY3RcbiAgY29uc3QgdG9Eb09iamVjdCA9IGNyZWF0ZVRvRG9PYmplY3QoXG4gICAgcHJpb3JpdHkudmFsdWUsXG4gICAgdGl0bGUudmFsdWUsXG4gICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgZHVlRGF0ZS52YWx1ZSxcbiAgICBub3Rlcy52YWx1ZSxcbiAgICBmYWxzZVxuICApO1xuICAvLyByZXR1cm4gdGhlIHRvIGRvIG9iamVjdFxuICByZXR1cm4gdG9Eb09iamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb09iamVjdEZyb21JbnB1dFRvQXJyYXkoKSB7XG4gIGFycmF5T2ZUb0RvT2JqZWN0cy5wdXNoKGNyZWF0ZVRvRG9PYmplY3RGcm9tSW5wdXQoKSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJ0bkxpc3RlbmVyID0gc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgYWRkVG9Eb09iamVjdEZyb21JbnB1dFRvQXJyYXkoKTtcbiAgY2xlYXJUYWJsZSgpO1xuICBkaXNwbGF5VG9Eb3MoKTtcbiAgY29uc29sZS5sb2coYXJyYXlPZlRvRG9PYmplY3RzKTtcbn0pO1xuXG5leHBvcnQgeyBhcnJheU9mVG9Eb09iamVjdHMsIHN1Ym1pdEJ0bkxpc3RlbmVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/createToDos.js\n\n}");

/***/ }),

/***/ "./src/displayToDos.js":
/*!*****************************!*\
  !*** ./src/displayToDos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTable: () => (/* binding */ clearTable),\n/* harmony export */   displayToDos: () => (/* binding */ displayToDos)\n/* harmony export */ });\n/* harmony import */ var _createToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDos.js */ \"./src/createToDos.js\");\n\n\n// Selectors\nconst tableBody = document.querySelector(\"tbody\");\n\nfunction displayToDos() {\n  for (let i = 0; i < _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects.length; i++) {\n    let toDoElement = document.createElement(\"tr\");\n    // toDoElement.classList.add(`toDoEntity${i}`);\n    const tdCheckbox = document.createElement(\"td\");\n    toDoElement.appendChild(tdCheckbox);\n    const inputCheckbox = document.createElement(\"input\");\n    inputCheckbox.setAttribute(\"type\", \"checkbox\");\n    inputCheckbox.setAttribute(\"class\", \"checkbox\");\n    inputCheckbox.setAttribute(\"name\", \"checkbox\");\n    tdCheckbox.appendChild(inputCheckbox);\n    const tdPriority = document.createElement(\"td\");\n    tdPriority.textContent = _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[i].priority;\n    toDoElement.appendChild(tdPriority);\n    const tdTitle = document.createElement(\"td\");\n    tdTitle.textContent = _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[i].title;\n    toDoElement.appendChild(tdTitle);\n    const tdDescription = document.createElement(\"td\");\n    tdDescription.textContent = _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[i].description;\n    toDoElement.appendChild(tdDescription);\n    const tdDueDate = document.createElement(\"td\");\n    tdDueDate.textContent = _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[i].dueDate;\n    toDoElement.appendChild(tdDueDate);\n    const tdNotes = document.createElement(\"td\");\n    tdNotes.textContent = _createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[i].notes;\n    toDoElement.appendChild(tdNotes);\n    const tdEdit = document.createElement(\"td\");\n    toDoElement.appendChild(tdEdit);\n    const editPenImg = document.createElement(\"img\");\n    editPenImg.setAttribute(\"src\", \"img/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg\");\n    editPenImg.setAttribute(\"alt\", \"Edit pen SVG\");\n    editPenImg.setAttribute(\"id\", `editPen${i}`);\n    tdEdit.appendChild(editPenImg);\n\n    tableBody.appendChild(toDoElement);\n  }\n}\n\nfunction clearTable() {\n  const rowCount = tableBody.rows.length; // Get the number of rows\n  // Loop through rows in reverse and delete each one\n  for (let i = rowCount - 1; i >= 0; i--) {\n    // The deleteRow method removes rows based on their index.\n    // The loop starts from the last row and goes backwards. When we loop in forward, the position (index) of the remaining rows would change after each deletion. So to prevent this issue, we loop in reverse.\n    tableBody.deleteRow(i);\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzcGxheVRvRG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLCtEQUFrQixTQUFTO0FBQ2pEO0FBQ0EsOENBQThDLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrREFBa0I7QUFDL0M7QUFDQTtBQUNBLDBCQUEwQiwrREFBa0I7QUFDNUM7QUFDQTtBQUNBLGdDQUFnQywrREFBa0I7QUFDbEQ7QUFDQTtBQUNBLDRCQUE0QiwrREFBa0I7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQiwrREFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZGlzcGxheVRvRG9zLmpzPzQ5ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlPZlRvRG9PYmplY3RzIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb3MuanNcIjtcblxuLy8gU2VsZWN0b3JzXG5jb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mVG9Eb09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9Eb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgLy8gdG9Eb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgdG9Eb0VudGl0eSR7aX1gKTtcbiAgICBjb25zdCB0ZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRkQ2hlY2tib3gpO1xuICAgIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNoZWNrYm94XCIpO1xuICAgIGlucHV0Q2hlY2tib3guc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIHRkQ2hlY2tib3guYXBwZW5kQ2hpbGQoaW5wdXRDaGVja2JveCk7XG4gICAgY29uc3QgdGRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZFByaW9yaXR5LnRleHRDb250ZW50ID0gYXJyYXlPZlRvRG9PYmplY3RzW2ldLnByaW9yaXR5O1xuICAgIHRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRkUHJpb3JpdHkpO1xuICAgIGNvbnN0IHRkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgdGRUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5T2ZUb0RvT2JqZWN0c1tpXS50aXRsZTtcbiAgICB0b0RvRWxlbWVudC5hcHBlbmRDaGlsZCh0ZFRpdGxlKTtcbiAgICBjb25zdCB0ZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJheU9mVG9Eb09iamVjdHNbaV0uZGVzY3JpcHRpb247XG4gICAgdG9Eb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGREZXNjcmlwdGlvbik7XG4gICAgY29uc3QgdGREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkRHVlRGF0ZS50ZXh0Q29udGVudCA9IGFycmF5T2ZUb0RvT2JqZWN0c1tpXS5kdWVEYXRlO1xuICAgIHRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRkRHVlRGF0ZSk7XG4gICAgY29uc3QgdGROb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZE5vdGVzLnRleHRDb250ZW50ID0gYXJyYXlPZlRvRG9PYmplY3RzW2ldLm5vdGVzO1xuICAgIHRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRkTm90ZXMpO1xuICAgIGNvbnN0IHRkRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0b0RvRWxlbWVudC5hcHBlbmRDaGlsZCh0ZEVkaXQpO1xuICAgIGNvbnN0IGVkaXRQZW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRQZW5JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaW1nL2VkaXRfMjRkcF8xRjFGMUZfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCIpO1xuICAgIGVkaXRQZW5JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRWRpdCBwZW4gU1ZHXCIpO1xuICAgIGVkaXRQZW5JbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXRQZW4ke2l9YCk7XG4gICAgdGRFZGl0LmFwcGVuZENoaWxkKGVkaXRQZW5JbWcpO1xuXG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHRvRG9FbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhYmxlKCkge1xuICBjb25zdCByb3dDb3VudCA9IHRhYmxlQm9keS5yb3dzLmxlbmd0aDsgLy8gR2V0IHRoZSBudW1iZXIgb2Ygcm93c1xuICAvLyBMb29wIHRocm91Z2ggcm93cyBpbiByZXZlcnNlIGFuZCBkZWxldGUgZWFjaCBvbmVcbiAgZm9yIChsZXQgaSA9IHJvd0NvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAvLyBUaGUgZGVsZXRlUm93IG1ldGhvZCByZW1vdmVzIHJvd3MgYmFzZWQgb24gdGhlaXIgaW5kZXguXG4gICAgLy8gVGhlIGxvb3Agc3RhcnRzIGZyb20gdGhlIGxhc3Qgcm93IGFuZCBnb2VzIGJhY2t3YXJkcy4gV2hlbiB3ZSBsb29wIGluIGZvcndhcmQsIHRoZSBwb3NpdGlvbiAoaW5kZXgpIG9mIHRoZSByZW1haW5pbmcgcm93cyB3b3VsZCBjaGFuZ2UgYWZ0ZXIgZWFjaCBkZWxldGlvbi4gU28gdG8gcHJldmVudCB0aGlzIGlzc3VlLCB3ZSBsb29wIGluIHJldmVyc2UuXG4gICAgdGFibGVCb2R5LmRlbGV0ZVJvdyhpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBkaXNwbGF5VG9Eb3MsIGNsZWFyVGFibGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/displayToDos.js\n\n}");

/***/ }),

/***/ "./src/editPen.js":
/*!************************!*\
  !*** ./src/editPen.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editPen0: () => (/* binding */ editPen0),\n/* harmony export */   editPen0Listener: () => (/* binding */ editPen0Listener)\n/* harmony export */ });\n/* harmony import */ var _createToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDos.js */ \"./src/createToDos.js\");\n\n\nconst editPen0 = document.getElementById(\"editPen0\");\n\nconst editPen0Listener = editPen0.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    console.log(_createToDos_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfToDoObjects[0]);\n})\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// for (let i = 0; i < arrayOfToDoObjects.length; i++) {\n//     let dynamicVariable = `variable_${i}`\n// }\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZWRpdFBlbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQWtCO0FBQ2xDLENBQUM7O0FBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0QyxtQkFBbUIsK0JBQStCO0FBQ2xELHlDQUF5QyxFQUFFO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2VkaXRQZW4uanM/NmMwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheU9mVG9Eb09iamVjdHMgfSBmcm9tIFwiLi9jcmVhdGVUb0Rvcy5qc1wiO1xuXG5jb25zdCBlZGl0UGVuMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFBlbjBcIik7XG5cbmNvbnN0IGVkaXRQZW4wTGlzdGVuZXIgPSBlZGl0UGVuMC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9Eb09iamVjdHNbMF0pO1xufSlcblxuZXhwb3J0IHsgZWRpdFBlbjAsIGVkaXRQZW4wTGlzdGVuZXIgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlRvRG9PYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgbGV0IGR5bmFtaWNWYXJpYWJsZSA9IGB2YXJpYWJsZV8ke2l9YFxuLy8gfVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/editPen.js\n\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDos.js */ \"./src/createToDos.js\");\n/* harmony import */ var _displayToDos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayToDos.js */ \"./src/displayToDos.js\");\n/* harmony import */ var _addProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProjects.js */ \"./src/addProjects.js\");\n/* harmony import */ var _editPen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editPen.js */ \"./src/editPen.js\");\n// COMMENTED OUT FOR DEVELOPMENT\n// import \"./styles.css\"\n// import \"./toDoForm.css\"\n\n\n\n\n\n(0,_displayToDos_js__WEBPACK_IMPORTED_MODULE_1__.displayToDos)();\n_createToDos_js__WEBPACK_IMPORTED_MODULE_0__.submitBtnListener;\n_addProjects_js__WEBPACK_IMPORTED_MODULE_2__.addProjectBtnListener;\n// console.log(editPen0);\n_editPen_js__WEBPACK_IMPORTED_MODULE_3__.editPen0Listener;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ29EO0FBQ0g7QUFDUTtBQUNDOztBQUUxRCw4REFBWTtBQUNaLDhEQUFpQjtBQUNqQixrRUFBcUI7QUFDckI7QUFDQSx5REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzPzY4YjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09NTUVOVEVEIE9VVCBGT1IgREVWRUxPUE1FTlRcbi8vIGltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG4vLyBpbXBvcnQgXCIuL3RvRG9Gb3JtLmNzc1wiXG5pbXBvcnQgeyBzdWJtaXRCdG5MaXN0ZW5lciB9IGZyb20gXCIuL2NyZWF0ZVRvRG9zLmpzXCJcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gXCIuL2Rpc3BsYXlUb0Rvcy5qc1wiO1xuaW1wb3J0IHsgYWRkUHJvamVjdEJ0bkxpc3RlbmVyIH0gZnJvbSBcIi4vYWRkUHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGVkaXRQZW4wLCBlZGl0UGVuMExpc3RlbmVyIH0gZnJvbSBcIi4vZWRpdFBlbi5qc1wiO1xuXG5kaXNwbGF5VG9Eb3MoKTtcbnN1Ym1pdEJ0bkxpc3RlbmVyO1xuYWRkUHJvamVjdEJ0bkxpc3RlbmVyO1xuLy8gY29uc29sZS5sb2coZWRpdFBlbjApO1xuZWRpdFBlbjBMaXN0ZW5lcjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;