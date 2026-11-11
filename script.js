const helloButton = document.getElementById("helloButton");
const output = document.getElementById("output");

helloButton.addEventListener("click", function () {
  output.textContent = "Hello, world! 🎉 You just ran JavaScript.";
});
