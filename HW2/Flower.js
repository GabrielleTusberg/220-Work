var Flower = function(x, y) {
  this.position= createVector(x,y);
this.size = createVector(10, height/2);
this.petalSize = 80;
this.center = 32;


this.update = function() {
  this.show();
};

this.show= function() {
  fill(7, 158, 77);
//stroke(0);
//strokeWeight(5);
noStroke();
//stem
  rect(this.position.x -this.center/8, this.position.y, this.size.x, this.size.y);
//petals
fill(255);
rect(this.position.x-this.petalSize/2, this.position.y, this.petalSize, 10);
//flower
fill(210, 33, 128);
ellipse(this.position.x, this.position.y, this.center, 10);

};
};
