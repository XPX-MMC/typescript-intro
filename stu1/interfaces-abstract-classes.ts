//
// Name: Interfaces-abstract-classes.ts
// Auth: Martin Burolla
// Date: 5/31/2023
//

namespace stu_1 {
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
    }   

    const ex2 = () => {
        console.log('Exercise 2')
    }

    const ex3 = () => {
        console.log('Exercise 3')
    }

    //
    // YOUR CODE HERE
    //

    const main = () : void => {
        ex3() // Change this to ex2(), ex3().
    }

    main()
}
