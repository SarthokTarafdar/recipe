class Log{
    constructor(x,y,height,angle){
       var ball_options ={
           restitution: 0
       }
       this.width=20;
       this.height=height;
       this.body = Bodies.rectangle(x,y,20,height, ball_options);
       Matter.Body.setAngle(this.body,angle)
       World.add(world,this.body);
       
    }
      display(){
       rectMode(CENTER);
       var angle=this.body.angle;
       push ();
       translate(this.body.position.x,this.body.position.y);
       rotate (angle)
       fill("brown");
       rect(0,0,this.width,this.height); 
       pop ();
      }
   }