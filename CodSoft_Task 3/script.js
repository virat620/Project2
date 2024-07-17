let input = document.getElementById("inputBox");

let btn = document.querySelectorAll("button");

let ar = Array.from(btn);
let str = "";

ar.forEach((buttons) => {
  buttons.addEventListener("click", function (event) {
    if (event.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      input.value = str;
    } else if (event.target.innerHTML == "C") {
      str = "";
      input.value = str;
    } else if (event.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } else {
      str += event.target.innerHTML;
      input.value = str;
    }
  });
});
