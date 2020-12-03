class Box{
 constructor(x,y,width,height){
    var ball_options ={
        restitution: 0
    }
    this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x,y,width,height, ball_options);
    World.add(world,this.body);
  
 }
   display(){
    rectMode(CENTER);
    var angle=this.body.angle;
    push ();
    translate(this.body.position.x,this.body.position.y);
    rotate (angle)
    fill("yellow");
    rect(0,0,this.width,this.height); 
    pop ();
   }
}