

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  var a = map(mouseX, 0, width, 0, 255);
  
  fill(a);
  ellipse(width/2, height/2, 80, 80);
  
}