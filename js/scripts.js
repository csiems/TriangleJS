function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.sideArray = [this.side1, this.side2, this.side3].sort();
}

Triangle.prototype.isATriangle = function() {
  return this.sideArray[0] + this.sideArray[1] > this.sideArray[2];
}

Triangle.prototype.isEquilateral = function() {
  return this.side1 === this.side2 && this.side1 === this.side3;
}

Triangle.prototype.isIsosceles = function() {
  return !this.isEquilateral() ? this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3 : false;
}

Triangle.prototype.isScalene = function() {
  return this.isATriangle() ? this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3 : false;
}
