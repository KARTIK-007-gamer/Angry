class Rubber {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.5,
            'friction':0.9,
            'density':2
        }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("red");
      fill("green");
      ellipse(0, 0, this.radius);
      pop();
    }
  }
