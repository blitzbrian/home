let canvas;
let logo;

function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
}

function draw () {
  background('#2d2c3e');
  fill(10);
  rect(mouseX-25,mouseY-25,50,50,25);
  image(logo,mouseX-25,mouseY-25,50,50);
}
