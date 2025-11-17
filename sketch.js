let walls = [];
let system;
let w =20;
let p =0;
function setup() {
  createCanvas(400, 400);
  system = new ParticleSystem(createVector(0, 0));
  for (let y = 0; y < height; y += w) {
    for (let x = 0; x < width; x += w) {
      walls.push(new Wall(x, y, w));
    }
  }

}

function draw() {
  background(255,255,255);
  for (let wall of walls) {
    if (wall.m == 0){
    wall.Show();
    }else{
      wall.remove();
    }
  }
system.run();
  if (p > 17){
  p = 0;
  } else if (p > 1 && p <= 17){
    p++;
    system.addParticle();
  }
}


function mousePressed() {
  system.place();
  p = 2;
  for (let wall of walls) {
    if (dist(wall.pos.x, wall.pos.y, mouseX, mouseY)<wall.w/2){
        wall.m = 1;
    } 
  }
   

}