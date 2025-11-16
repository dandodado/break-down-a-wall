let walls = [];
let system;
let w =20;
function setup() {
  createCanvas(400, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  for (let y = 0; y < height; y += w) {
    for (let x = 0; x < width; x += w) {
      walls.push(new Wall(x, y, w));
    }
  }

}

function draw() {
  background(220);
  for (let wall of walls) {
    wall.Show();
  }
  system.addParticle();
  system.run();
}
