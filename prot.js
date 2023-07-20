function Shape(color) {
    this.color = color;
  }
  
  Shape.prototype.getColor = function() {
    return this.color;
  };
  
  function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
  
  const myCircle = new Circle(5, "red");
  console.log(myCircle.getArea()); // Output: 78.53981633974483
  console.log(myCircle.getColor()); // Output: "red"
  