var myParticles = [];

function setup() {
  createCanvas(1000, 1000);
  var cButton = select('#clear_button');
cButton.mousePressed(clearParticles);
//something is up with the clear button 
//omg I just deleted the parenthesis and it worked, wowww so intuitive (7)
}

function draw() {
  background(220);

  for(var i=0; i < myParticles.length; i++){
      //added .length so the for loop will know to stop looping at the end of array (3)
    myParticles[i].move();
        //added the parameter parenthesis next to move function (6) 
    myParticles[i].render();
  }

}

function clearParticles(){
  myParticles = [];
  //this checks out and is apparently how you empty an array (good to know)
}

function mouseDragged() {
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

class Particle {
  constructor(mX,mY) {
    this.x = mX;
    //changed from x to mX as defined in the parameters of the constructor (1)
    this.y = mY;
    //changed from y to mY as defined in the parameters of the constructor (2)
    this.speedX = random(-3,3);
    this.speedY = random(-3,3);
    this.col = color(random(255), random(255), random(255));
    this.diameter = random(3,15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if the particles approaches the 'wall' change direction
    if (this.x > width || this.x < 0) this.speedX *= -1;
    if (this.y > height || this.y < 0) this.speedY *= -1;
  }

  render() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //was missing this. for the x and y (4,5)
  }
}
//wow I actually know stuff about programming, feeling #awesome !