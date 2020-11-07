let canvas;
let logo;
let logos = [];


function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
  angleMode(DEGREES);
  for(let i = 0; i < 10; i++) {
    logos[i] = {
      x: random(window.innerWidth),
      y: 0,
      r: random(180)
    }
  }
  setInterval(function () {
    logos.push({
      x: random(window.innerWidth),
      y: 0,
      r: random(180)
    })
  }. 1000)
}

function draw () {
  background('#2d2c3e');
  for(let i = 0; i < logos.length; i++) {
    rotate(logos[i].r);
    image(logo,logos[i].x,logos[i].y,50,50);
    logos[i].y++;
//     logos[i].r++;
  }
}
