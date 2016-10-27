var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dionysus.jpg') {
      myImage.setAttribute ('src','images/treatsjenniferfisher.jpg');
    } else {
      myImage.setAttribute ('src','images/dionysus.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Dionysus is cool, ' + myName;
}
myButton.onclick = function() {
  setUserName();
}