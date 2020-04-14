// Creating the radius
var radius = 10;

// Creating the x and y position, x and y speed and x and y direction
var xPosition, yPosition, xSpeed, ySpeed, xDirection, yDirection;

function setup() {
  
  // Creating the canvas
  createCanvas(400, 400);

  // Defining the x and the y position
  xPosition = width/2;
  yPosition = height/2;

  // Defining the x and the y speed
  xSpeed = 2.5;
  ySpeed = 1.5;

  // Defining the x and the y direction
  xDirection = -1;
  yDirection = -1;
}


// Main parti of the code called
function draw() {
  
  // Colouring the background
  background(220);

  // Changing the x and the y position
  xPosition = xPosition + xSpeed * xDirection;
  yPosition = yPosition + ySpeed * yDirection;

  // Changing the x direction so that it bounces off
  if (xPosition > width - radius || xPosition < radius) {
    xSpeed *= -1;
  }

  // Changing the y direction so that it bounces off
  if (yPosition > height - radius || yPosition < radius) {
    ySpeed *= -1;
  }

  // Creating the ellipse
  ellipse(xPosition, yPosition, radius, radius);

}