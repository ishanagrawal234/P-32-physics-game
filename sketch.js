const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var can, can1, can_;
var ball_img;

function preload(){
  can_=loadImage("can.jpg");
  ball_img=loadImage("paperball.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(350,300,250,10);
  stand2 = new Stand(665,200,200,10);
  stand3 = new Stand(900,200,20,400)
  stand4 = new Stand(0,200,10,400)

  can  = new Can(320,275,80,140);
  can1 = new Can(610,175,80,140);


  //ball holder with slings
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the MAN...",80,30);

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  can.display();
  can1.display();
  strokeWeight(2);
  stroke(15);

  imageMode(CENTER)
  image(ball_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}