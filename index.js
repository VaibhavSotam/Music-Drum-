var drumNumber = document.querySelectorAll(".drum").length;


// For sound on clicking

for (var i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    animation(buttonPressed);
  });
}


document.addEventListener("keypress", function(event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  animation(keyPressed);
})

function makeSound(expression) {
  switch (expression) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}


function animation(Key) {
  var d = document.querySelector("." + Key);
  d.classList.add("pressed");
  setTimeout(function() {
    d.classList.remove("pressed");
  }, 100);

}
