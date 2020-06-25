var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  G1 = createSprite(800,400,80,30);
  G1.shapeColor = "green";
  G1.debug = true;
  G2 = createSprite(-100,400,80,30);
  G2.shapeColor = "green";
  G2.debug = true;
  G2.velocityX=+5
  G1.velocityX=-5
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  collisionbounce(movingRect,fixedRect,);
  drawSprites();
}