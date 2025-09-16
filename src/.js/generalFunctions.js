function clearChildNotes(parentNode) {
  while (parentNode.hasChildNodes()) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

function clearTable() {
  const rowCount = tableBody.rows.length; // Get the number of rows
  // Loop through rows in reverse and delete each one
  for (let i = rowCount - 1; i >= 0; i--) {
    // The deleteRow method removes rows based on their index.
    // The loop starts from the last row and goes backwards. When we loop in forward, the position (index) of the remaining rows would change after each deletion. So to prevent this issue, we loop in reverse.
    tableBody.deleteRow(i);
  }
}

function getValuesOfObjectArrayKey(inputArray, key) {
  let outputArray = [];
  for (let i=0; i<inputArray.length; i++) {
    outputArray.push(inputArray[i][key]);
  }
  return outputArray
}

function removeDuplicateElementsFromArray(array) {
  let uniqueElementsArray = array.filter((item, index) => array.indexOf(item) === index);
  console.log(uniqueElementsArray);
  return uniqueElementsArray;
}

export {clearChildNotes, getValuesOfObjectArrayKey, removeDuplicateElementsFromArray};