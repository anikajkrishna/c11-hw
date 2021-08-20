var path;


function preload(){
path = loadImage("path.png");
path=createSprite (200,200);
path.velocityY=4;
path.scale=1.2;

if (path.y > 400) {
  path.y=height/2;
}

runner = loadImage("Runner-1.png");
runner=createSprite()
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);

}
