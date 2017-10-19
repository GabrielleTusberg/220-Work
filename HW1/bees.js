var Bee = function() {
  this.position = createVector(width/2, -100);
  this.velocity = createVector(0, 0);
  this.accel = 0.2;
  this.topspeed = 1;
  this.hitFlower = false;

  this.update = function(target) {
    var moveAmount;
    var mul = 1;
    var move = createVector(random);
    var dist;

    moveAmount = p5.Vector.sub(target.position, this.position);
    dist = moveAmount.mag();
    if (dist < 400 && !this.hitFlower) { //work in progress
      //var distance = moveAmount.mag();
      moveAmount.normalize();
      this.accel = moveAmount.copy();
      //move = moveAmount;
      //mul = constrain(map(distance, 0, 10, 0, 1), 0, 1);
    }  else if (this.hitFlower) {
      moveAmount.normalize();
      moveAmount.rotate(PI);
      this.accel = moveAmount.copy();


    } else {
      var angle = random(TWO_PI);
      this.accel = createVector(cos(angle), sin(angle));
      this.accel.mult(random(2));
      //move.mult(0.5);
    }

    //this.accel = move;
    this.velocity.add(this.accel);
    this.velocity.mult(mul);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

    /* CHECK FOR COLLISION */
    if(dist < 40 && !this.hitFlower){
      this.hitFlower = true;
      return true;
    } else {
      return false;
    }
  };
  //var x = this.position.x + cos(this.theta);
  //var y = this.position.y + sin(this.theta);
  //var spin = createVector(x,y);

  //var dir = p5.Vector.sub(target.position, this.position);
  //dir.normalize();
  //dir.mult(0.5);
  //this.accel = dir;

  //this.velocity.add(this.accel);
  //this.velocity.limit(this.topspeed);
  //this.position.add(this.velocity);
  //this.theta+=0.2;
  //};

  this.display = function() {
    var angle = this.velocity.heading();

    push();
    ellipseMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(angle);
    fill('rgb(242, 255, 133)');
    ellipse(0, 0, 40, 20);
    pop();

  }
  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.position.x = 0
      this.velocity.x *= -1;
    }
    if (this.position.y > height) {
      this.position.y = height;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.position.y = 0
      this.velocity.y *= -1;
    }
  }
}
