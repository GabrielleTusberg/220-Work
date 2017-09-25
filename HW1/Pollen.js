var Pollen = function (m, x, y) {
  this.mass = m
  this.position = createVector (x,y);
  this.velocity = createVector(0,0);
  this.accel = createVector(0,0);
  this.size = createVector(0,0);


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.accel.add(f);
  };

  this.update = function() {
    var angle = random(TWO_PI);
    this.accel = createVector (cos(angle), sin(angle));
    this.accel.mult(random(2));
    this.velocity.add(this.accel);
    this.velocity.limit(2);
    this.position.add(this.velocity);
    this.accel.mult(0);
    this.show();
    this.checkEdges();
  };
  this.show = function() {
    fill(255, 255, 6);
    this.size.x = 5;
    this.size.y = 5;
    ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
  };

  this.checkEdges = function() {
    if(this.position.x > width) {
      this.position.x < 0;
    } else if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.y > height){
      this.position.y = height;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.position.y =0;
      this.velocity.y *= -1;
    }



  }


}
