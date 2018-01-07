function setup() {


  // var canvas = createCanvas(displayWidth, displayHeight);
  var canvas = createCanvas(windowWidth, windowHeight);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  // createCanvas(windowWidth, windowHeight);
  background(255);
    colorEllipse = color(0, 51, 255);
    colorRect = color(255, 0, 208);

     frameRate(30);
}

function draw() {
  noStroke();
  // rectMode(CENTER);
  fill(255, 10);
  rect(0, 0, windowWidth, windowHeight);
  // rect(0, 0, 720, 500);

    if(mouseX != 0 && mouseY !=0){
      noFill();
      strokeWeight(0.3);
      stroke(colorRect);
      rect(mouseX-100, mouseY-100, 200, 200);
      // rect(mouseX-50, mouseY-50, 100, 100);
    }
}

function windowResized() {
  centerCanvas();
}
