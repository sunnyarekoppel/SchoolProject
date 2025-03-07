function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomNumber(letters.length)];
  }
  return color;
}

function getRandomItem(arr) {
  return arr[getRandomNumber(arr.length)];
}

// Example usage:
const colors = ['red', 'green', 'blue'];
console.log(getRandomItem(colors)); // Output: "green"
