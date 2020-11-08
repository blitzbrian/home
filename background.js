let canvas;
let logo;
let logos = [];
let h;

function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  h = Math.max( document.body.scrollHeight, window.innerHeight);
  canvas = createCanvas(window.innerWidth,h);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
  for(let i = 0; i < (h/50); i++) {
    logos[i] = {
      x: random(window.innerWidth),
      y: random(0,h),
      s: random(3)
    }
  }
}

function draw () {
  background('#2d2c3e');
    push();
    for(let i = 0; i < logos.length; i++) {
      if(logos[i].y < h) {
        image(logo,logos[i].x,logos[i].y,50,50);
        logos[i].y+=logos[i].s;
    } else {
    logos.splice(i,1);
    logos.push({
      x: random(window.innerWidth),
      y: random(~h+1,-10),
      s: random(3)
    });
  }
   }
   pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, h);
}
