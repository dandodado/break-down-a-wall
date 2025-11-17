class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 100;
    this.mass = 8;
  }

  run() {
    this.update();
    this.display();
  }
  addForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  // 위치 업데이트를 위한 메소드
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
    this.lifespan -= 2;
  }

  // 화면에 보이기 위한 메소드
  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(150, 75, 0, this.lifespan);
    ellipse(this.position.x, this.position.y, this.mass,this.mass);
  }


  // 파티클이 여전히 쓸만한가요?
  isDead(){
    return this.lifespan < 0;
  }
}

