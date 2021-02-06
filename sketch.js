var hammer;
var stone;
var rubber;
var ground; 
var box1;
var boom;
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(150,200,150,50);

	stone = new Stone(150,200,80,80);

	hammer1 = new Hammer(300,200,150,50);

	stone1= new Stone(300,200,80,80);

	hammer2 = new Hammer(450,300,150,50);

	stone2 = new Stone(450,300,80,80);

	hammer3 = new Hammer(600,300,150,50);

	stone3 = new Stone(600,390,80,80);

	hammer4 = new Hammer(750,400,150,50);

	stone4 = new Stone(750,400,80,80);

	hammer5 = new Hammer(900,400,150,50);

	stone5 = new Stone(900,400,80,80);

	hammer6 = new Hammer(1050,400,150,50);

	stone6 = new Stone(1050,400,80,80);

	ground = new Ground(10,height,14000,20);

	box1 = new Box(1500,30,60,1200);

	box2 = new Box(0,30,60,1200);

	rubber = new Rubber(300,150,50);

	rubber1 = new Rubber(600,80,90);

	rubber2 = new Rubber(900,100,40);

	rubber3 = new Rubber(750,50,30);

	//boom = new Boom (100,100,50);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  stone.display();
  hammer.display();
  ground.display();
  box1.display();
  rubber.display();
  stone1.display();
  hammer1.display();
  stone2.display();
  hammer2.display();
  stone3.display();
  hammer3.display();
  stone4.display();
  hammer4.display();
  box2.display();
  stone5.display();
  hammer5.display();
  stone6.display();
  hammer6.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  //boom.display();
  





  drawSprites();
 
}



