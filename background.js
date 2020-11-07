let canvas;

function setup () {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
}

function draw () {
//   background(0,0,0,0);
  rectMode(CENTER);
  rect(mouseX,mouseY,50,50,25);
}
