// arrays, funtions, and objects Class One 

var bubble = {
  //key value pairs (name value pairs) - seperated by COMMAS
  x:500,
  y:500,
  radius:10
}

var bubbles= [];


function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);

  for (var i=0; i<100; i++){
    //random width gives a random # between 0 and the width of the canvas
    bubbles.push(new Bubble(random(width), random(height)));
    }
}

function draw() {
  background(220, 0, 0);
  // drawCoolRect(100, 100, 7);
  // drawCoolRect (350, 350, 12);
for (var i=0; i<bubbles.length; i++){
  //get the ith bubble 
  bubbles[i].move();
  bubbles[i].display();
}
}

function mouseClicked(){
  //did i click any bubles 
  for (var i=0; i<bubbles.length; i++){
    bubbles[i].clicked();
  }
}

//bubble factory

class Bubble{
  //assembly line 
  //starting x pos. 
  //starting y pos. 
  constructor(x,y){
    //this. is person on assembly line assigning x value 
    this.posX = x;
    //this. is person on assembly line assigning y value 
    this.posY = y;
    this.radius = 40;
    this.col = color(0, 0, 255);
  }

  //functions inside of a class do not need the word function 
  display(){
    fill (this.col);
    circle(this.posX, this.posY, this.radius);
  }

  move(){
    //move left or right 
    this.posX += random (-3,3);

    //move up or down
    this.posY += random (-3,3);
  }

  //if bubble is clicked - do something 
  clicked(){
    //calculate distance b/w mouseX and mouseY and the center of our bubble
    //allows me to know if I clicked inside the circle or not
    var distance = dist(mouseX, mouseY, this.posX, this.posY);
    //if distance is less than our radius (i CLICKED on THIS bubble) do something
    if(distance < this.radius) {
      this.col = color('pink');
    }
  }
}















// function drawCoolRect(x,y, numOfRects){
//   for(var i=0; i<numOfRects; i++){
//   var blendColor = lerpColor (color(255, 0, 0), color(0, 0, 255), i * (1/numOfRects));
//   fill (blendColor);
//   rect (x, y, 200 - (i*15), 200 - (i*15))
//   }
// } 

  //lerpColor
  // 3 parameters - starting color, ending color, where are you b/w the colors
  // 0 -@ the starting point 
  // 1 - @ the ending point 