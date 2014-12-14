var interval;

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
    var time = 0;
    var redraw = function () {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (i=0; i < n; i++) {
      //while (i < n) {
        x = i/10 * myCanvas.width + time;
        y = i/10 * myCanvas.height;
        context.fillRect(x, y, width, height);
        //i++;
      }
      time ++;
    }
    interval = setInterval(redraw, 2);
  }
  drawManyRectangles();
}
canvas();
