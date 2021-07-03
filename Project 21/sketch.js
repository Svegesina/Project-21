
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	groundObj=new ground(width/2,670,width,20)
	leftside= new ground(1100,600,20,120)
	rightside=new ground(1100,600,100,120)

	balls_options={
	isStatic=false,
	restitution:0.3,
	friction:0,
	density:1.2
	}


	Engine.run(engine);
	Matter.Bodies.circle(30,30,15,ball_options)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  
  drawSprites();
 
}

function keypressed(){
if (keyCode===UP_ARROW){
matter.body.applyforce(circle,x+0,y+5)
}
}