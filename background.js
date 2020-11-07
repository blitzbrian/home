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
  for(let i = 0; i < 10; i++) {
    logos[i] = {
      x: random(window.innerWidth),
      y: -10
    }
  }
  setInterval(function () {
    logos.push({
      x: random(window.innerWidth),
      y: -10
    });
    logos.splice(1,1);
  }, 1000)
}

function draw () {
  background('#2d2c3e');
  if(logos[i].y < window.innerHeight) {
    push();
    for(let i = 0; i < logos.length; i++) {
      image(logo,logos[i].x,logos[i].y,50,50);
      logos[i].y++;
    }
    pop();
  } else {
    logos.splice(i,1)
  }
}
