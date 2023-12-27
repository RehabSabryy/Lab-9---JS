
// Part 1

class Shape {
    constructor(name , sides , sideLength) {
        this.name = name ;
        this.sides =sides;
        this.sideLength = sideLength;
    }
    calcPerimeter(){
      var perimeter =  this.sides * this.sideLength;
      console.log(`The perimeter of the ${this.name} is ${perimeter}.`);   
    }
}
// create instance square
const square = new Shape("square" , 4 ,5);
square.calcPerimeter();

// create instance triangle
const triangle = new Shape("Triangle",3,3);
triangle.calcPerimeter();

// // Part 2

class Square extends Shape {
    constructor(sideLength) {
        super('square' , 4, sideLength);
    }
    calcArea() {
        var squareArea= this.sideLength * this.sideLength;
        console.log(`The area of the square is ${squareArea}.`);
        return this.calcArea;
    }

}
const squareInstance = new Square (5);
squareInstance.calcPerimeter();
squareInstance.calcArea();

// Part 3

class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide" ;
    static calculate(n=1) {
        return n * 3;    }
}
class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide" ;
    static calculate(n) {
       return super.calculate(n) * super.calculate(n);
    }
}
// Example test
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); 


