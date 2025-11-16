class Wall {
   
    constructor(x, y) {
this.pos = createVector( 0+x, 50+y);
    
}

Show () {
rectMode(CENTER);
noStroke();
fill(150, 75, 0);
rect(this.pos.x, this.pos.y, 50, 50);

}




}