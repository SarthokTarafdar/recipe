const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,650,800,10);
    box1=new Box(600,600,50,50);
    box2=new Box(400,600,50,50);
    box5=new Bird(500,400,50,50);
    pig1=new Pig(500,600,40,40); 
    bird1=new Box(100,600,50,50);  
    box3=new Box(600,500,50,50);
    box4=new Box(400,500,50,50);
    pig2=new Pig(500,500,40,40);
    log1=new Log(500,550,400,PI/2);
    log2=new Log(500,450,400,PI/2);
    log3=new Log(600,350,200,PI/-7);
    log4=new Log(400,350,200,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box1.display()
    box2.display()
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    box5.display()
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    bird1.display()
}