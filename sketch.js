var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100, 50, 50, 80);
  fixedRect.shapeColor="green"
  fixedRect.debug=true
  fixedRect.velocityY=2
  movingRect=createSprite(100,350,80,50)
  movingRect.shapeColor="green"
  movingRect.debug=true
  movingRect.velocityY=-2
}

function draw() {
  background(0);

  bounceOff(movingRect, fixedRect) 

  
  
  drawSprites();
}
