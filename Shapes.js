class Cube {
  constructor(n) {
    this.length = n;
  }
  area() {
    return this.length * this.length;
  }
  volume() {
    return (this.length * this.length * this.length);
  }
}

function Cube(n) {
  this.length = n;
  this.area = functon() {
    return this.length * this.length;
  }
  this.volume = function() {
    return (this.length * this.length * this.length);
  }
}

/////////////////////////////////////////////////////////

class Sphere {
  constructor(diameter) {
    this.diameter = diameter;
    this.radius = diameter / 2;
  }
  area() {
    return this.area;
  }
  volume() {
    // 4/3 pi r cubed
    let pi = 3.14;
    let x = 1.333333333333333;
    let y = (x * pi) *  (this.radius() * this.radius() * this.radius());
    return y;
  }
  radius() {
    this.radius();
  }
  circumphrence() {
    return (2 * Math.PI * this.radius());
  }
}

function Sphere() {

}






















