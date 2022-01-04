var path;
var runner

function preload(){
runnerImg = loadImage("Runner-1.png");
pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  leftBoundary = createSprite(10,200,10,400);
  rightBoundary = createSprite (390,200,10,400);
  leftBoundary.visible=false;
  rightBoundary.visible=false;
  //create sprites here
  path=createSprite (200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  runner=createSprite(200,360);
  runner.addImage(runnerImg);
  runner.scale=0.08;
  
}

function draw() {
  background(0);
  if (path.y > 400) {
    path.y=height/2;
  }
  runner.x=World.mouseX;
  edges=createEdgeSprites();

  runner.collide (edges[3]);
  runner.collide (leftBoundary);
  runner.collide (rightBoundary);
  drawSprites();
}
