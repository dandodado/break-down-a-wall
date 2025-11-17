class Wall {
   
    constructor(x, y, w) {
this.pos = createVector( x, y);
this.w = w;
    this.m = 0;
}

Show () {
rectMode(CENTER);
noStroke();
fill(150, 75, 0);
rect(this.pos.x, this.pos.y, this.w, this.w);

}
remove () {
    rectMode(CENTER);
noStroke();
fill(255,255,255);
rect(this.pos.x, this.pos.y, this.w, this.w);
   

}



}