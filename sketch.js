
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}



function setup() {
	createCanvas(1100, 700);
    
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2, 650,width,20);
	leftSide = new Ground(700,575,20,120);
	rightSide= new Ground(1000, 575, 20,120);

	var ball_options={
		isStatic: false,
		restituition: 0.3,
		friction: 0,
		density: 1.2
	}

	ball= Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 20);
  fill("yellow");
keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.3,y:-0.3});
	}
}



