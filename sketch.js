var monkey,monkey_running;
var bananaGroup,bananaImage;
var back,backImage;
var ground,invisibleGround;
var stoneGroup,stoneImage;
var score;

function preload(){
  monkey_running = loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
  
  bananaImage=loadImage("banana.png");
  backImage=loadImage("jungle2.jpg");
  stoneImage=loadImage("stone.png")
}

function setup() {
  createCanvas(600,400);
  score = 0;
  ///background
  back = createSprite(0,0);
  back.addImage("back",backImage)
  back.scale = 1.7;
  back.x = back.width /2;
  back.velocityX = -2;
  ///monkey
  monkey = createSprite(60,320,20,50);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.1;
  
  ///invisibleGround
  invisibleGround = createSprite(0,340,1200,20);
  invisibleGround.visible = false;
  
  stoneGroup = new Group();
  bananaGroup = new Group();
}

function draw() {
 background(220);  
  
  if(keyDown("space")){
    monkey.velocityY = -10; 
  }
   monkey.velocityY = monkey.velocityY +0.8;
  
  if (back.x < 0){
    back.x = back.width/2;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  
  ///var score = Math.round(random(1,6));
     switch (score){
       case 10: monkey.scale=0.12;
         break;
       case 20: monkey.scale=0.14;
         break;
       case 30: monkey.scale=0.16;
         break;
       case 40: monkey.scale=0.18;  
         break;
       default: break;
     }
  
  if(stoneGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }
  
  monkey.collide(invisibleGround)
  
  ///mention banana
  food();
  ///mention obstacle
  obstacle();
  
  drawSprites();
  
  fill("gold");
  textSize(20);
  text("Score:"+score,450,50);
  
}

function food(){
  if(frameCount % 200 === 0){
     var banana = createSprite(530,200);
     banana.velocityX = -9;
     banana.addImage("banana",bananaImage);
     
    
     banana.scale = 0.05;
     banana.lifetime = 180;
     bananaGroup.add(banana);
  }
  
}

function obstacle(){
  if(frameCount % 100 === 0){
    var stone = createSprite(500,315);
    
      stone.addImage("stone",stoneImage);
      stone.scale = 0.2;
      stone.velocityX = -5;
      stone.lifetime = 180;  
      stoneGroup.add(stone);
   
  }
  
}