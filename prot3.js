class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  }
  
  const myCircle = new Circle(5);
  console.log(myCircle.diameter); // Output: 10