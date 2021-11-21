const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bg,fruiti,bunnyi;
let engine;
let world;
var ground;
var rope;
var fruit;
var fruitc;

function preload(){
bg=loadImage("background.png");
fruiti=loadImage("melon.png");
bunnyi=loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  
  rope=new Rope(6,{x:245,y:30});

  var fopt={density:0.001}
  fruit=Bodies.circle(300,300,15,fopt);
  Matter.Composite.add(rope.body,fruit);
  fruitc=new Link(rope,fruit);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER);

}

function draw() 
{
  background(51);
  image(bg,width/2,height/2,500,700);
  ground.show();
  rope.show();

  image(fruiti,fruit.position.x,fruit.position.y,60,60);
  
  Engine.update(engine);
  

 
   
}
