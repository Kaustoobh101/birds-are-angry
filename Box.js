class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.05
  }
    super(x,y,width,height,options);
    this.image = loadImage("sprites/wood1.png");
  }

};
