let txt = document.querySelector("#texted");
txt.addEventListener("input", gettext);
let dis = document.querySelector("#facts");
let fact = document.querySelector("#fact-txt");

function gettext() {
  var xhr = new XMLHttpRequest();
  let number = txt.value;
  xhr.open("GET", "http://numbersapi.com/" + number);

  xhr.onload = function () {
    if (xhr.status == 200) {
      if (number == "") {
        dis.style.display = "none";
      } else {
        dis.style.display = "block";
        fact.innerHTML = this.responseText;
      }
    }
  };
  xhr.send();
}
