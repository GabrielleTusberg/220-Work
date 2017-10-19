var Flowers = [];
var pollen = [];
var bee = [];
var emitter = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
    Flowers[i] = new Flower(random(width), height / 2);
  }
  //for (var p = 0; p < height/2; p++) {
  //  pollen[p] = new Pollen(10, random(width), 0);
  for (var b = 0; b < Flowers.length; b++) {
    bee[b] = new Bee();
  }

  loc = createVector(width / 2, height * 0.75);



}

function draw() {
  var time;
  time++;
  background(100, 100, 255);

  for (var i = 0; i < Flowers.length; i++) {
    Flowers[i].update();
    }

    //  for (var p = 0; p < pollen.length; p++){
    //var wind = createVector(-0.0001, 0);
    //var gravity = createVector(0,0.1*pollen[p].mass);
    //pollen[p].applyForce(wind);
    //pollen[p].applyForce(gravity);
    //pollen[p].update();
    //}

    for (var b = 0; b < bee.length; b++) {
      var collision = false;
      for (var c = 0; c < Flowers.length; c++) {
        collision = bee[b].update(Flowers[b]);
        if(collision){
          emitter.push(new Emitter(Flowers[b].position));
        }
      }
      bee[b].display();
      bee[b].checkEdges();


    }

    for (obj of emitter) {
      obj.frame();

    }

  }


function mousePressed() {
  loc = createVector(mouseX, mouseY);
  emitter.push(new Emitter(loc));
}
