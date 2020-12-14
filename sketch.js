const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var loadingpage;
var background1;
var stars = 0;
var gamestate ;
var level = 1;
var bgImage,logoImage;

function preload()
{
  bgImage = loadImage("IMAGES/Background.png");
  logoImage = loadImage("IMAGES/Gamelogo.png");
}

function setup() {
	createCanvas(800, 600);
  gamestate = 0;

	engine = Engine.create();
  world = engine.world;
  
  button1 = createButton("PLAY");
  button1.position(500,100);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  if (gamestate===0){
    image(logoImage,0,0,800,600)
    
    button1.mousePressed(function(){
      gamestate=1;
      
    })
  }

  if (gamestate===1){
    button1.hide();
    image(bgImage,0,0,800,600)
    subform = new Subform();
    subform.display();
  }
  
  

}




