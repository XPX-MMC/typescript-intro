//
// Name: compiler-variables.ts
// Auth: Martin Burolla
// Date: 5/30/2023
// Desc: Example of using variables in TypeScript.
//

namespace stu_13 {
    type Person = {
        name: string,
        age: number
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

    const ex4 = () => {
        console.log('Exercise 4')
    }

    const ex5 = () => {
        console.log('Exercise 5')
    }

    const main = () : void => {
        ex5() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
