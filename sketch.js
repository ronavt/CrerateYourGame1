
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var defender1Img,defender1
var blakeImg,blake
var field1Img,field1
var goalImg
var ballImg, ball
var edges
var gameState = "intro"
var invisGround
var instructions,instructionsImg
var start, startImg

function preload()
{
	defender1Img = loadImage('images/defender.png');
	blakeImg = loadImage('images/Blake.png');
	field1Img = loadImage('images/field.png');
	goalImg = loadImage('images/goal.png');
	ballImg = loadImage('images/ball.png');
	instructionsImg = loadImage('images/instructions.png')
	startImg = loadImage('images/button.png')
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	field1 = createSprite(400,350,800,700)
	field1.addImage('feild',field1Img)
	field1.scale = 5;
	defender1 = createSprite(400,350)
	defender1.addImage('defender',defender1Img)
	blake = createSprite(400,100)
	blake.addImage('blake',blakeImg)
	ball = createSprite(400, 200)
	ball.addImage('ball',ballImg)
	ball.scale = 0.5
	edges = createEdgeSprites()
	blake.debug = true
	ball.debug = true
	ball.setCollider("circle",0,0,45)
	ball.velocityX = 5
	ball.velocityY = 5
	invisGround = createSprite(400,700,500,10)
	instructions = createSprite(400,350.)
	instructions.addImage('instructions',instructionsImg)
	instructions.visible = false
	start = createSprite(400,430)
	start.addImage('start',startImg)
	
	
	//goalImg = createSprite()

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  //if(gameState == 1){
	if(ball.isTouching(blake)){
		ball.bounceOff(blake)	
	}
	if(ball.isTouching(invisGround)){
		background(goalImg)
	}
	if(gameState === "intro"){
		instructions.visible = true
		if(mousePressedOver(start)){
			instructions.destroy()
			start.destroy()
			gameState = "level1"
		}
		
	}
	if(gameState === "level1"){
		playerMovement()
	}
	ball.bounceOff(edges)
	defender1.x = ball.x
	//defender1.y = ball.y

  }

  function playerMovement(){
	if(keyDown("UP_ARROW")){
		blake.y = blake.y-5
	}
	if(keyDown("DOWN_ARROW")){
		blake.y = blake.y+5
	}
	if(keyDown("LEFT_ARROW")){
		blake.x = blake.x-5
	}
	if(keyDown("RIGHT_ARROW")){
		blake.x = blake.x+5
	}
	
  }






