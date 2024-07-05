// function Box(x, y, w, h) {
//   var options = {
//     friction: 0,
//     restitution: 1.8,
//     // density: 1.0,
//     // isStatic: false,
//     // label: "Box"
//   };
//   this.body = Bodies.rectangle(x, y, w, h, options);
//   this.w = w;
//   this.h = h;
//   Composite.add(world, this.body);

//   this.show = function () {
//     var pos = this.body.position;
//     var angle = this.body.angle;

//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     rectMode(CENTER);
//     strokeWeight(1);
//     stroke(255);
//     fill(27);
//     // rect(0, 0, this.w, this.h);
//     drawStar(0, 0, this.w / 2, this.h / 2, 5);
//     pop();
//   };
// }

// var Engine = Matter.Engine,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;

// var engine;
// var world;
// var boxes = [];
// var ground;

// function setup() {
//     createCanvas(1536, 864);
//     engine = Engine.create();
//     world = engine.world;
//     Engine.run(engine);
  
//     var option = {
//       isStatic: true,
//     }
//     ground = Bodies.rectangle(768, height, width, 10, option);
//     Composite.add(world, ground);
  
//     stars = [];
//   }
// function mouseMoved() {
//     // Generate random sizes for the star
//     let radius1 = random(2.5, 7.5);
//     let radius2 = random(5, 15);
    
//     // let radius1 = random(2, 6);
//     // let radius2 = random(4, 12);

//     let star = new Star(mouseX, mouseY, radius1, radius2, 5);
//     stars.push(star);
//   }

// function draw() {
//     background(0);
//     for (let star of stars) {
//       star.show();
//     }
  
//     // Draw ground
//     noStroke();
//     fill(170);
//     rectMode(CENTER);
//     rect(ground.position.x, ground.position.y, width, 10);
//   }

//   function Star(x, y, radius1, radius2, npoints) {
//     var options = {
//       friction: 0,
//       restitution: 1.8,
//     }
//     this.body = Bodies.rectangle(x, y, radius2 * 2, radius2 * 2, options);
//     this.radius1 = radius1;
//     this.radius2 = radius2;
//     this.npoints = npoints;
//     Composite.add(world, this.body);
  
//     this.show = function () {
//       var pos = this.body.position;
//       var angle = this.body.angle;
  
//       push();
//       translate(pos.x, pos.y);
//       rotate(angle);
//       strokeWeight(1);
//       stroke(255);
//       fill(255);
//       drawStar(0, 0, this.radius1, this.radius2, this.npoints);
//       pop();
//     };
//   }

//   function drawStar(x, y, radius1, radius2, npoints) {
//     var angle = TWO_PI / npoints;
//     var halfAngle = angle / 2.0;
//     beginShape();
//     for (var a = 0; a < TWO_PI; a += angle) {
//       var sx = x + cos(a) * radius2;
//       var sy = y + sin(a) * radius2;
//       vertex(sx, sy);
//       sx = x + cos(a + halfAngle) * radius1;
//       sy = y + sin(a + halfAngle) * radius1;
//       vertex(sx, sy);
//     }
//     endShape(CLOSE);
//   }


// Matter.js module aliases
var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

var engine;
var world;
var stars = [];
var ground;

// Box class
function Box(x, y, w, h) {
  var options = {
    friction: 0,
    restitution: 1.8,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  Composite.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(27);
    drawStar(0, 0, this.w / 2, this.h / 2, 5);
    pop();
  };
}

// Setup function to initialize canvas and Matter.js
function setup() {
  // Create canvas and attach it to the div with id 'page2'
  let canvas = createCanvas(1536, 864);
  canvas.parent('page2'); // Attach canvas to the div

  // Setup Matter.js engine and world
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  // Create static ground
  var option = {
    isStatic: true,
  };
  ground = Bodies.rectangle(768, height, width, 10, option);
  Composite.add(world, ground);
}

// Draw function to render the stars and ground
function draw() {
  background(0);
  for (let star of stars) {
    star.show();
  }

  // Draw ground
  // noStroke();
  // fill(170);
  // rectMode(CENTER);
  // rect(ground.position.x, ground.position.y, width, 10);
}

// Function to handle mouse movement and create a new star at mouse position
function mouseMoved() {
  // Generate random sizes for the star
  let radius1 = random(2.5, 7.5);
  let radius2 = random(5, 15);

  // Create a new star at the mouse position with random sizes
  let star = new Star(mouseX, mouseY, radius1, radius2, 5);
  stars.push(star);
}

// Star class
function Star(x, y, radius1, radius2, npoints) {
  var options = {
    friction: 0,
    restitution: 1.8,
  };
  this.body = Bodies.rectangle(x, y, radius2 * 2, radius2 * 2, options);
  this.radius1 = radius1;
  this.radius2 = radius2;
  this.npoints = npoints;
  Composite.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(1);
    stroke(255);
    fill(27);
    drawStar(0, 0, this.radius1, this.radius2, this.npoints);
    pop();
  };
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
