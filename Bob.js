class bob{

    constructor(x,y,r){
      var options={
       resitution:1,
       isStatic:false,
       friction:0,
       density:0.8
      }
    this.r=r;
    this.body = Bodies.circle(x,y,this.r/2,options);
    World.add(world,this.body)
    }
  
  
     display(){
     var position = this.body.position
     var angle = this.body.angle
     push();
     translate(position.x,position.y);
     //rotate(angle);
     fill(255, 20, 147);
     stroke(5);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
     pop();
     }
  
  }