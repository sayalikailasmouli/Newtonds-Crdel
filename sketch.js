
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,ground,chain1,chain2,chain3,chain4,chain5;
var diameter,startx;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

   diameter=40
   startx=width/2
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground=new Ground(width/2,height/4,width/7,20);

   bob1=new bob(startx-diameter*2,400,20); 
   bob2=new bob(startx-diameter,400,20);
   bob3=new bob(startx,400,20);
   bob4=new bob(startx+diameter,400,20);
   bob5=new bob(startx+2*diameter,400,20);
   
   chain1=new Chain(bob1.body,ground.body,-2*diameter,0);
   chain2=new Chain(bob2.body,ground.body,-diameter,0);
   chain3=new Chain(bob3.body,ground.body,0,0);
   chain4=new Chain(bob4.body,ground.body,diameter,0);
   chain5=new Chain(bob5.body,ground.body,+2*diameter,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(127, 255, 212);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  console.log(bob1.x);
  console.log(chain1);

}

function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10})

  }

}

