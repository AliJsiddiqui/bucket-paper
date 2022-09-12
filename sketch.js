
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, ball, ground, bucket1, bucket2, bucket3; 
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

	var ball_options={
        isStatic:false,
        restitution:0.3,
        friction:0.2,
        density:1.2}


		ball=Bodies.circle(20,20,20,ball_options)
    World.add(world,ball)
    ellipseMode(RADIUS);
    rectMode(CENTER);
    Engine.run(engine);


    //Create the Bodies Here.
	ball= new Ball(700,600,10)
    ground = new Ground(800,680,1600,20);
    bucket1 = new Bucket(1300,660, 100, 20);
	bucket2 = new Bucket(1240,620,20,100);
    bucket3 = new Bucket(1350,620,20,100)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
 
    
  ball.display();

  ground.display();

  bucket1.display();
  bucket2.display();
  bucket3.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(ball.body, ball.body.position, {x: 15,y: -15})
    }
  }




