var thingy = [];

function setup() {
 createCanvas(windowWidth, windowHeight); 
 
   for(var i = 0; i < 10; i++){
     thingy[i]={
       x : random(0, width),
       y : random(0, height),
       size: 30,
       display : function(){
         fill(255);
         ellipse(this.x, this.y, this.size, this.size);
        }
      };
    }
}

function draw() {
  background(0);
  for (var i = 0; i < thingy.length; i++){
    if(mouseIsPressed){
     thingy[i].display();
    }
  }
}