
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var bin1,bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(750,100,50);
	bin1 = new Bin(400, 625, 200, 20);
	bin2 = new Bin(300, 600, 20, 100);
	bin3 = new Bin(500, 600, 20, 100);
	ground = new Ground(400,680,800,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paperball.display();
	bin1.display();
	bin2.display();
	bin3.display();
	ground.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-235,y:-285});

    }
} 