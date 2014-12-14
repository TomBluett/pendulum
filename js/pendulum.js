function canvas () {
  var context = myCanvas.getContext('2d');
  var x = 0, y = 0, width = myCanvas.width, height = myCanvas.height;

  function drawRectangle(){
    context.fillStyle = 'LightSkyBlue'
    context.fillRect(x, y, width, height);
  }
  function drawManyRectangles() {
    var i = 0;
    var n = 10;
    width = 20;
    height = 20;
    while (i < n) {
      x = i/10 * myCanvas.width;
      y = i/10 * myCanvas.height;
      context.fillRect(x, y, width, height);
      i++;
    }
  }
  drawManyRectangles();
}
canvas();
