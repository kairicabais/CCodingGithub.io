// to make the shape marble effect on the dots
const circleDetail = 10; //10 vertices to make the dot round and smooth


// Create a vector and a constantly changing center of the circle dots
class Drop {
  constructor(x, y, r,col) {
    this.center = createVector(x, y);
    this.r = r;
    this.col = col;

    this.vertices = []; // to store the vertices of the drop.
    this.goTo = []; // to store the target positions of the vertices for animation.

    //start loop running the circleDetail shape
    for (let i = 0; i < circleDetail; i++) {
      let a = map(i, 0, circleDetail, 0, TWO_PI);
      let v = createVector(cos(a), sin(a));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = this.center.copy();
      this.goTo[i] = v.copy();
    }
    //
    this.speed = 0.5;
  }
  show() {
    fill(this.col);
    noStroke();
    beginShape();
    for (let i = 0; i < this.vertices.length * 2; i++) {
      let index = i % this.vertices.length;
      curveVertex(this.vertices[index].x, this.vertices[index].y);
    }
    endShape();

    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].lerp(this.goTo[i], this.speed);
      // this.vertices[i].y = lerp(this.vertices[i].y,this.goTo[i].y, this.speed);
    }
  }

  marble(other) {
    for (let i = 0; i < this.vertices.length; i++) {
      let c = other.center;
      let r = other.r;
      let p = this.vertices[i].copy();
      p.sub(c);
      let m = p.mag();
      let root = sqrt(1 + (r * r) / (m * m));
      p.mult(root);
      p.add(c);
      this.goTo[i].set(p);
    }
  }
}
