
var monkey , monkey_running, obstacle
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0, survivalTime = 0;
var ground
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,140,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.125
  
  ground = createSprite(400,180,99999999999999999999999999999999999999,10);
  ground.velocityX = -4;
   ground.x = ground.width/2;
  console.log(ground.x);
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("White");
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.collide(ground);
  stroke("black")
  textSize(20);
  fill("black");
  text("Score: "+score, 500,50);
  
  stroke("Black");
  textSize(20);
  fill("Black")
  text("Survival Time: "+survivalTime, 100,50);
  
  
  spawnFood();
  drawSprites();
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
  banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.0625;
    banana.velocityX = -3;
    if (monkey.isTouching(banana)){
     score = score+1
     survivalTime = survivalTime+30
     bananaGroup.destroyEach();
    }
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each food to the group
    FoodGroup.add(banana);
  }
  
}

function spawnObstcles() {
  //write code here to spawn the obstcles
  if (frameCount % 80 === 0) {
    obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(120,200));
    obstacle.addImage(bananaImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}


