const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pole1;

function setup() {
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  pole1= new building(50,50,60,200);
}

function draw() {
  background(0);  
  Engine.update(engine);
  pole1.display();
  
}