// getCelcius function
let celcius = 0,
  farenheit = 38;
function getCelcius(F) {
  celcius = (5 * (F - 32)) / 9;
  return console.log(`Celcius = ${celcius}`);
}
getCelcius(farenheit);
