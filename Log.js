class Log extends BaseClass{
  constructor(x,y,height,angle){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.05
  }
    super(x,y,20,height,options);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}