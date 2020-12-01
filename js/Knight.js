class Knight {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.1,
          'friction':0.1,
          //'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/knight.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  