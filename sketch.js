const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImg;
var alien,alien2,alien3,alienImg,alien2Img,alien3Img;
var astroid,astroidImg; 
var aGroup, astroidGroup;
var ground;
var Score;
function preload()
{
	playerImg=loadImage("41845911-a-cartoon-child-astronaught-with-a-ray-gun.jpg");
alienImg=loadImage("images(1).jpeg");
alien2Img=loadImage("images.jpeg");
alien3Img=loadImage("spaceship-clipart-6.jpg");	
astroidImg=loadImage("download.png");
}

function setup() {
	createCanvas(windowWidth, 700);
player=createSprite(100,350,20,10)
player.addImage("player",playerImg);
player.scale=0.05;
ground=createSprite(400,410,900,10)
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
aGroup=new Group();
aGroup= new Group();
Score=0

}


function draw() {
  rectMode(CENTER);
  background(0);
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(keyDown("space")) {
      player.velocityY = -10;
    }
      
    player.velocityY = player.velocityY + 0.8
      
       player.collide(ground);
      if (aGroup.isTouching(player)){
        Score=Score+2;
      aGroup.destroyEach();
    }
    if(astroidGroup.isTouching(player)){
      aGroup.destroyEach();
          ground.velocityX = 0;
    player.velocityY = 0;
    astroidGroup.setVelocityXEach(0);
    aGroup.setVelocityXEach(0);
    astroidGroup.setLifetimeEach(-1);
    aGroup.setLifetimeEach(-1);
	}
	spawnAstroids();
	spawnAlien
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ Score,500,50);
     
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

}
function spawnAstroids() {
	if(frameCount % 300 === 0) {
	  astroid = createSprite(800,360,10,40);
	  astroid.velocityX = -6;
	  
	  astroid.addImage(astroidImage);
	  astroid.scale=0.05;
		  
	  astroid.lifetime = 300;
	 astroidGroup.add(astroid);
	}
  }
  function spawnAlien() {
	if (frameCount % 80 === 0) {
	  alien = createSprite(600,250,40,10);
	  alien.y = random(155,320);    
	  alien.velocityX = -5;
  
	  alien.lifetime = 300;
	  lion.depth = alien.depth + 1;
  
	   alien.addImage(alienImage);
	  alien.scale=0.1;
  
	  aGroup.add(alien);
	}
  }



