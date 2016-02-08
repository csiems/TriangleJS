describe('Triangle', function() {
  var notATriangle = new Triangle(3,4,9);
  var equilateralTriangle = new Triangle (3,3,3);
  var isoscelesTriangle = new Triangle(3,4,4);
  var scaleneTriangle = new Triangle (3,4,5);

  it("Creates a new triangle", function() {
    expect(scaleneTriangle.side1).to.equal(3);
    expect(scaleneTriangle.side2).to.equal(4);
    expect(scaleneTriangle.side3).to.equal(5);
  });

  it("Tells you if its a triangle", function() {
    expect(scaleneTriangle.isATriangle()).to.equal(true);
    expect(notATriangle.isATriangle()).to.equal(false);
  });

  it("Checks if a triangle is an equilateral", function() {
    expect(equilateralTriangle.isEquilateral()).to.equal(true);
    expect(scaleneTriangle.isEquilateral()).to.equal(false);
  });

  it("Checks if a triangle is isosceles", function() {
    expect(isoscelesTriangle.isIsosceles()).to.equal(true);
    expect(equilateralTriangle.isIsosceles()).to.equal(false);
  });

  it("Checks if a triangle is scalene", function() {
    expect(scaleneTriangle.isScalene()).to.equal(true);
    expect(equilateralTriangle.isScalene()).to.equal(false);
  });
});
