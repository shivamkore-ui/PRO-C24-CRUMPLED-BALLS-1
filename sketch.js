
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1, d2, d3;

function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,648,10)

	ground = new Ground(400,680,800,15)

	d1 = new Dustbin(485,635,15,72)
	d2 = new Dustbin(615,635,15,72)
	d3 = new Dustbin(550,668,143,15)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(0);
  
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:13, y:-13})
	}
}


