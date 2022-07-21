var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
let screenValue = "";
// var check=false;
for (var item of buttons) {
  item.addEventListener("click", (e) => {
    var buttonText = e.target.innerText;
    console.log(e);
    console.log("Button text is ", buttonText);
    if (buttonText === "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText === "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
