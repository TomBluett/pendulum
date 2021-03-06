var myForm, widthField, heightField, frequencyField, colorButton, userData;
myForm = document.querySelector('form');
heightField = myForm.elements.height;
widthField = myForm.elements.width;
frequencyField = myForm.elements.frequency;

function getValues(ev) {
  ev.preventDefault();
  drawManyRectangles();
}

var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');
var x = 0, y = 0, width = myCanvas.width, height = myCanvas.height;
var interval;

function stop() {
  clearInterval(interval);
}

function drawManyRectangles() {
  var n = 100;
  width = parseFloat(heightField.value);
  height = parseFloat(widthField.value);
  
  var time = parseFloat(frequencyField.value);
  var redraw = function () {
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for (var i=0; i < n; i++) { // while (i < n) {
      x = myCanvas.width / 2 + Math.sin(time * i) *20;
      y = i/n * myCanvas.height;
      // var sin = Math.sin(i / 20 * time) / 2 + 0.5;
      // var cos = Math.cos(i / 20 * time) /2 + 0.5;
      // x = sin * (myCanvas.width - width);
      // y = cos * (myCanvas.height - height);
      context.fillRect(x, y, width, height);
      //i++; // same as `i = i+1` and `i += 1`
    }
    time += 0.02;
  };
  interval = setInterval(redraw, 20);
}

myForm.onsubmit = getValues;
