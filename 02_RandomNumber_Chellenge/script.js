const varX = document.getElementById("var1");
const varY = document.getElementById("var2");
const output = document.getElementById("output");
const button = document.getElementById("new-game");

button.addEventListener("click", function () {
  let X = Math.floor(Math.random() * 100) + 1;
  let Y = Math.floor(Math.random() * 50) + 1;
  let result = `The value of X is ${X} and the value of Y is ${Y}. The value of X x Y is ${
    X * Y
  }.`;
  var1.innerHTML = X;
  var2.innerHTML = Y;
  output.innerHTML = result;
});
