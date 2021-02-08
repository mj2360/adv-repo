//practice 
//create a class of bubbles with black fill and white stroke
//create an array of objects which are the bubbles 
//make many of those bubbles appear in a grid formation on the screen 
    //using algorithm that spaces out the x, y values of the bubbles

var bubbles = [];

function setup(){
    createCanvas(900, 900);
//don't use bubble.length here because the array is empty
    for(var i= 0; i<100; i++){
        bubX = 40 + 90* i;
        // bubY = ???
        bubbles.push(new Bubble(bubX, 50));
        bubbles.push(new Bubble(bubX, 150));

        //there's probably an algorithm I can use for y value to continue the grid?
    }
}

function draw(){
    background(0);
    for(var i=0; i<bubbles.length; i++){
     bubbles[i].render();
    }

//draws one bubble
    // var bub = new Bubble(500, 500);
    // bub.render();
}

class Bubble {
    constructor(bubX, bubY){ //tells what the bubble will look like 
        this.x = bubX; 
        this.y = bubY;
        this.size = 50; 
        this.col = color(0);

    }

    render(){
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.size, this.size);
    }

}