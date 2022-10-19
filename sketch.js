let canvasWidth = 400;
let canvasHeight = 400;
let x = 0;
let fillColor = "black";

function setup() {
  createCanvas(400, 400);
  canvasWidth += 1;
  canvasWidth++; // adds one to variable
  //frameRate(12); // changes the speed that it draws on the canvas;
}

function draw() {
  background(125);

  //fill(fillColor);
    //ect(200,200,40,40);

  //if (mouseIsPressed){ //draws rect if mouse is pressed
    //rect (100,100,50,50);
 // }
  fill(map(mouseX, 0, canvasWidth, 0, 225))
  for (let n=0; n<4; n++){
    rect(40*n,mouseY,34,40);
  }
}

//function keyPressed() { //any key pressed
  //if (fillColor == "black") {
    //fillColor = "white";
 // } 
  //else {
    //fillColor = "black";
 /// }
//}

//create the circle function
//function circle(x,y,circleSize) {
  //ellipse(x,y,circleSize, circleSize);
//}
