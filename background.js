let canvas;
let logo;
let logos = [];


function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  canvas = createCanvas(document.body.scrollWidth,document.body.scrollHeight);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
  for(let i = 0; i < (document.body.scrollHeight/50); i++) {
    logos[i] = {
      x: random(document.body.scrollHeight),
      y: random(~document.body.scrollHeight+1,-10)
    }
  }
}

function draw () {
  background('#2d2c3e');
    push();
    for(let i = 0; i < logos.length; i++) {
      if(logos[i].y < document.body.scrollHeight) {
        image(logo,logos[i].x,logos[i].y,50,50);
        logos[i].y++;
    } else {
    logos.splice(i,1);
    logos.push({
      x: random(document.body.scrollHeight),
      y: random(~document.body.scrollHeight+1,-10)
    });
  }
   }
   pop();
}
