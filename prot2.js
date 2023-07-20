class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value <= 0) {
        throw new Error("Radius must be a positive number.");
      }
      this._radius = value;
    }
  }
  
  const myCircle = new Circle(5);
  console.log(myCircle.radius); // Output: 5
  
  myCircle.radius = 10; // Setting the radius using the setter
  console.log(myCircle.radius); // Output: 10
  
  myCircle.radius = -2; // Attempting to set an invalid negative radius
  // Throws an error: Radius must be a positive number