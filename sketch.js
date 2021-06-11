
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
  
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(400,350,400,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  var survivalTime  = 0
  stroke("white");
  textSize(20);
  fill("white")
  text("score"+score,500,50);
  
  
  
  
}


function draw() {

  background(255)
  
  
  
 if(ground.x<200)
 {
     ground.x = ground.width /2;
     
     }
  
  
  if(keyDown("space"))
  {
    monkey.velocityY = -10
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
    
  obstacles();
  food();
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time " +survivalTime, 100,50);
}

function food() {
 
  if (frameCount % 80 === 0) {
    banana = createSprite(350, Math.round(random(20,300)),20,20 )
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -4;
    banana.lifetime = 200;
    bananaGroup.add(banana)
  }
  
}


function obstacles() {
 
  if (frameCount % 300 === 0) {
    obstacle = createSprite(350,300,20,20 )
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
    
  }
  
  
}




