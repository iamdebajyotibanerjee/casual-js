// getCelcius function
let celcius = 0,
  farenheit = 38;
function getCelcius(F) {
  celcius = (5 * (F - 32)) / 9;
  return console.log(`Celcius = ${celcius}`);
}
getCelcius(farenheit);

// minMax function
const numbers = [21, 36, 77, 878, 52, 95, 61, 327, 12, 45];
let min = 0,
  max = 0;
const minMax = (arr) => {
  min = arr[0];
  max = arr[0];
  arr.forEach((item) => {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  });
  return {
    minimum: min,
    maximum: max,
  };
};

console.log(minMax(numbers));

// minMax using spread operator and Math object properties

const numbers2 = [21, 36, 77, 878, 52, 95, 61, 327, 12, 45];
function minMax2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    minimum: min,
    maximum: max,
  };
}
const { minimum, maximum } = minMax2(numbers2);
console.log(`Minimum: ${minimum}, Maximum: ${maximum}`);
