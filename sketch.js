
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    ground= new Ground(200,390,500,20)

    ball1= new Ball(300,250,40,40);
    ball2= new Ball(250,100,80,40);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);


    ball1.display();
    ball2.display();
    ground.display();
}

