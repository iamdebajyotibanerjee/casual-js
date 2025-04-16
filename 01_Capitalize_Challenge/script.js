const targetText = document.querySelector("#target-text");
const capitalizeButton = document.querySelector("#capitalize-button");
const capitalizeOutput =
  document.querySelector("#capitalized-text").lastElementChild;
let capitalizedText = "";

capitalizeButton.addEventListener("click", capitalizeText);

function capitalizeText() {
  const text = targetText.value;
  const firstLetter = text.slice(0, 1).toUpperCase();
  const restLetters = text.slice(1);
  capitalizedText = firstLetter + restLetters;
  capitalizeOutput.innerText = capitalizedText;
  return console.log("Done");
}
