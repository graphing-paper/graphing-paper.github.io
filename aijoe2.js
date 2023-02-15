var joe = document.getElementById("joe");
var hand = document.getElementById("hand");
var hamburger = document.getElementById("hamburger");
var voidElement = document.getElementById("void");
var message = document.getElementById("message");
var hamburgerSound = document.getElementById("hamburger-sound");

hand.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", "hand");
});

hamburger.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", "hamburger");
});

voidElement.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", "void");
});

joe.addEventListener("dragover", function(event) {
  event.preventDefault();
});

joe.addEventListener("drop", function(event) {
  event.preventDefault();
  var item = event.dataTransfer.getData("text");
  if (item === "hand") {
    joe.classList.add("shake");
    message.innerHTML = "You pet Joe!!!!!";
    message.style.display = "block";
  } else if (item === "hamburger") {
    joe.style.transition = "all 2s";
    joe.style.transform = "translate(200px, -200px)";
    message.innerHTML = "Joe hamburger!";
    message.style.display = "block";
    hamburgerSound.play();
  } else if (item === "void") {
    document.body.style.background = "black";
    message.innerHTML = "Joe hamburger";
    message.style.display = "block";
  }
});

joe.addEventListener("animationend", function() {
  joe.classList.remove("shake");
});

message.addEventListener("click", function() {
  message.style.display = "none";
  joe.style.transition = "none";
  joe.style.transform = "translate
