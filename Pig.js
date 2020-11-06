class Pig extends BaseClass {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.05
  }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/enemy.png");
  }

};