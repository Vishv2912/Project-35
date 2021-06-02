var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
var database

function setup() {
  createCanvas(1500,700);
  database=firebase.database();


  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  database.ref("position").on("value",readPosition,showError)

  textSize(20); 
}

// function to display UI


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    changePosition(1,0);
    
  
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    changePosition(0,-1);
 
  
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    changePosition(0,+1);
    
  
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readPosition(data){
  var pos=data.val();
  balloon.x=pos.x,
  balloon.y=pos.y
  
  
  
  }
  function showError(){
  console.log("ERROR");
  
  
  }
  
  
  
  function changePosition(x,y){
      balloon.x = balloon.x + x;
      balloon.y = balloon.y + y;
  
  database.ref("position").set(
      {
  x:balloon.x,
  y:balloon.y
  
      }
  )    
  }