let container = document.createElement("div");
let msgBtn = document.createElement("button");
let textAlertInput = document.querySelector("#text-alert-input");
let textAlertBtn = document.querySelector("#text-alert-btn");
let hoverColor = document.querySelector("#hover-color");
let colorPara = document.createElement("paragraph");
let nameBtn = document.querySelector("#name-btn");
let nameDiv = document.querySelector("#name-div");
let friendBtn = document.querySelector(".friend-btn");
let friends = [
  "Tristan",
  "Chris",
  "Rosemary",
  "Andrea",
];
let counter = 0;

colorPara.textContent =
  "I think I actually got this...well, maybe!";
container.appendChild(colorPara);
container.id = "container";
msgBtn.innerText = "Click to alert a message!";
msgBtn.id = "msg-btn";
hoverColor.style.height = "150px";

document.body.appendChild(container);
container.appendChild(msgBtn);

msgBtn.addEventListener("click", function () {
  alert("What's upper");
});

textAlertBtn.addEventListener("click", function () {
  alert(textAlertInput.value);
});

hoverColor.addEventListener("mouseover", function () {
  hoverColor.style.backgroundColor = "red";
});

hoverColor.addEventListener("mouseout", function () {
  hoverColor.style.backgroundColor = "";
});

colorPara.addEventListener("click", function () {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  colorPara.style.color = color;
});

nameBtn.addEventListener("click", function () {
  let span = document.createElement("span");
  span.style.float = "left";
  span.innerText = "KyeJuana Avery";
  span.style.width = "100vw";
  container.appendChild(span);
  container.appendChild(document.createElement("br"));
});

friendBtn.addEventListener("click", function () {
  if (counter < friends.length) {
    let li = document.createElement("li");
    li.innerText = friends[counter];
    document.querySelector("ul").appendChild(li);

    counter++;
  }
});