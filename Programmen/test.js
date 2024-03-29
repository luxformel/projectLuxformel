function isArrayContained2D(array2D, targetArray) {
  for (let row of array2D) {
    if (JSON.stringify(row) === JSON.stringify(targetArray)) {
      return true;
    }
  }
  return false;
}

// Example usage:
const array2D = [
  [1, 2, 3],
  [4, 6, 6],
  [7, 8, 9],
];
const targetArray = [4, 5, 6];
console.log(isArrayContained2D(array2D, targetArray)); // Output: true
