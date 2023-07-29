var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(btnTranslate);

function clickHandler() {
  console.log("clicked!");
  console.log(txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);
