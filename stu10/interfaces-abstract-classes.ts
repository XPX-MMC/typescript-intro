//
// Name: Interfaces-abstract-classes.ts
// Auth: Martin Burolla
// Date: 5/31/2023
//

namespace stu_10 {
    abstract class Shape {
      
    }

    class Circle extends Shape {
       
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
