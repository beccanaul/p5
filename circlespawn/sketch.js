var circle = [];

function Circle(x, y){
  this.x = x;
  this.y = y;
  
  this.size = 10;
  
  this.display = function(){
    this.x++;
    this.size = this.size - random(.5, 1);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  for (var i = 0; i < circle.length; i++){
    circle[i].display();
    if (circle[i].x > width){
      circle.splice(i,1);
    }
  }
  if(mouseIsPressed){
    circle.push(new Circle(mouseX, mouseY));
  }
}