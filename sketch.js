
var sword, microbe, fruits;
var Play=1;
var End=0;
var gamestate=1;
var score;
var gameover;
function preload(){
 
  fruit_s1=loadImage("fruit1.png");
  fruit_s2=loadImage("fruit2.png");
  fruit_s3=loadImage("fruit3.png");
  fruit_s4=loadImage("fruit4.png");
  sword_s=loadImage("sword.png")
  microbe_s=loadImage("alien1.png");
 endgame=loadImage("gameover.png")
  
  cuttingsound=loadSound("knifeSwooshSound.mp3");
  
  endsound=loadSound("gameover.mp3");
  
  
  
}
function setup() {
  createCanvas(600,600);
   

  
  //creating score
   score=0;
  
    //creating sword
  sword=createSprite(40,40,300,300)
  sword.addImage("goodsword",sword_s);
  sword.scale=0.7;
  
  fruitla= new Group();
  
  enemity= new Group();
  
}

function draw(){
 background("lightblue");
 
  
 
  
 
  

  
  //displaying score
  textSize(18);
  text("score:"+score,520,20);
  
   if(gamestate===1){
      fruitsall();
  enemy();
    
      if(score===50){
        
        background("lightgreen");
        textSize(18);
        text("doing well",300,500);
        
        
        
      }
  if(score===100){
    
    background("yellow");
    textSize(18);
    text("century",300,500);
  }
     
     if(score===120||score===125||score===130||score===135||score===140){
    
    background("white");
    textSize(18);
    text("awesome you are close to win",300,500);
  }
     
     
      sword.x=mouseX;
  sword.y=mouseY;
     
  }
  
  if(gamestate===0){
    sword.visible=false;
    fruitla.destroyEach();
    enemity.destroyEach();
    
    gameover=createSprite(300,300,40,40)
    gameover.addImage(endgame)
    gameover.scale=1.5;
  }
  
  if(sword.isTouching(fruitla)){
    fruitla.destroyEach();
    score=score+5;
    cuttingsound.play();
  }
  
  if(sword.isTouching(enemity)){
    gamestate=0;
    enemity.destroyEach();
    endsound.play();
  }
  if(score===150){
  textSize(60);
    fill("red");
    text("you win",240,300)
    fruitla.destroyEach();
    enemity.destroyEach();
    sword.destroy();
  }
  // to draw everything that I create
  drawSprites();
}






function fruitsall(){
 // creating fruits 
  if(frameCount%80===0){
  fruits=createSprite(590,30,300,300);
   
  fruits.scale=0.2;
    
     r=Math.round(random(1,4))
    if(r==1){
      fruits.addImage(fruit_s1);
    }
    else if
 (r==2){
   fruits.addImage(fruit_s2);
 }
  else if
    (r==3){
      fruits.addImage(fruit_s3)
    }
  else
    {
      fruits.addImage(fruit_s4)
    }
  
    fruits.y=Math.round(random(50,550));
    
  // fruits.velocityX=-10;
  
  fruits.lifetime=90;
    fruitla.add(fruits);
    
   //creating fruits  from both sides
    position=Math.round(random(1,2));
    if (position===1){
      
      fruits.x=590;
      fruits.velocityX=-(7+score/10);
     
    }
    else
      {
      
      fruits.x=10;
      fruits.velocityX=(7+score/10);
     
    }
    
    
  }
}

function enemy(){
  
  if(frameCount%200===0){
    
    microbe=createSprite(590,80,250,390);
    microbe.addImage(microbe_s);
   // microbe.velocityX=-10;
    
    microbe.y=Math.round(random(40,560));
    
    microbe.lifetime=120;
    
    enemity.add(microbe);
    
     //creating microbe  from both sides
    position=Math.round(random(1,2));
    if (position===1){
      
    
      microbe.x=590;
      microbe.velocityX=-(6+score/10);
    }
    else
      {
      

      microbe.x=10;
      microbe.velocityX=6+score/10
    }
    
  }
}