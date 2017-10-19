var Pollen = function (loc, vel) {
  //this.mass = m
  this.loc = loc.copy();
  this.vel = vel.copy();
  this.acc = createVector(0,0.1);
  this.size = 20;
  this.speedLimit = 100;
  this.lifespan = 1.5;
// initial calc
  this.lifespan = frameRate() * this.lifespan;
  this.timeAlive = this.lifespan;
}

Pollen.prototype.frame = function(){
    this.update();
    this.display();
    return this.isDead();
  };

  Pollen.prototype.display = function() {
    var alp = map(this.timeAlive, 0, this.lifespan, 0, 200 );

    push();
    noStroke();
    fill(255, 255, 6, alp);
    //this.size.x = 5;
    //this.size.y = 5;
    ellipse( this.loc.x, this.loc.y, this.size);
    pop();
    };

//this.applyForce = function(force) {
  //  var f = p5.Vector.div(force, this.mass);
    //this.accel.add(f);
//}
//  };
Pollen.prototype.update = function(){

      this.vel.add(this.acc);
      this.vel.limit(this.speedLimit);
      this.loc.add(this.vel);

      this.timeAlive--;
  };

  Pollen.prototype.isDead = function(){
      if (this.timeAlive < 0) {
          return true;
      } else {
          return false;
      }
  };
