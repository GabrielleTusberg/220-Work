var Flowers = [];
var pollen= [];

function setup() {
createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 6; i++) {
    Flowers[i] = new Flower(random(width) ,height/2);
  }
  for (var p = 0; p < height/2; p++) {
    pollen[p] = new Pollen(10, random(width), 0);

  }
}

function draw() {
  background(100, 100, 255);

  for (var i = 0; i < Flowers.length; i ++){
    Flowers[i].update();
  }
  for (var p = 0; p < pollen.length; p ++){

    var wind = createVector(-0.0001, 0);
    var gravity = createVector(0,0.1*pollen[p].mass);
    pollen[p].applyForce(wind);
    pollen[p].applyForce(gravity);
    pollen[p].update();
    }
  }
