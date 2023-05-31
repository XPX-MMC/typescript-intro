namespace stu0_iac {

    abstract class Shape {
        protected color: string;
      
        constructor(color: string) {
          this.color = color;
        }
      
        abstract getArea(): number;
      
        getColor(): string {
          return this.color;
        }
    }

    class Circle extends Shape {
        private radius: number;
      
        constructor(color: string, radius: number) {
          super(color);
          this.radius = radius;
        }
      
        getArea(): number {
          return Math.PI * Math.pow(this.radius, 2);
        }
    }

    const ex1 = () => {
        console.log('Exercise 1')
        const calculator = new Calculator()
        console.log(calculator.add(1, 2))
        console.log(calculator.subtract(4, 2))
        console.log(calculator.multiply(4, 3))
        console.log(calculator.divide(10, 2))
    }   

    const ex2 = () => {
        console.log('Exercise 2')
        const catDataAccess = new CatDataAccess()
        const cat = catDataAccess.getCat()
        console.log(cat)
    }

    const ex3 = () => {
        console.log('Exercise 3')
        const square = new Square('blue', 5)
        console.log(square.getArea())
    }

    //
    // YOUR CODE HERE
    //

    interface Calculateble {
       add(num1: number, num2: number): number
       subtract(num1: number, num2: number): number
       multiply(num1: number, num2: number): number
       divide(num1: number, num2: number): number
    }

    class Calculator implements Calculateble {
        add(num1: number, num2: number): number {
            return num1 + num2
        }
        subtract(num1: number, num2: number): number {
            return num1 - num2
        }
        multiply(num1: number, num2: number): number {
            return num1 * num2
        }
        divide(num1: number, num2: number): number {
            return num1 / num2
        }
    }

    interface DataAccessable {
        getCat(): Cat
    }

    class Cat {
        public name: string
        public age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class CatDataAccess implements DataAccessable {
        getCat(): Cat {
            return new Cat('Fluffy', 2)
        }
    }

    class Square extends Shape {
        private length: number;
      
        constructor(color: string, length: number) {
          super(color);
          this.length = length;
        }
      
        getArea(): number {
          return this.length * this.length;
        }
    }

    const main = () : void => {
        ex3() // Change this to ex2(), ex3().
    }

    main()
}
