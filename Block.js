class Block {

  constructor(x, y, width, height){

      var options = {
          'restitution': 0.4,
          'friction': 0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(myworld,this.body);

  }

  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();//Save current setting & transformation
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);

      strokeWeight(1);
      stroke(53, 54, 56);
      rect(0,0,this.width,this.height);
      pop();//restore the settings

  }

}

