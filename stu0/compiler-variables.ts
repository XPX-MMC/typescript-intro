//
// Name: compiler-variables.ts
// Auth: Martin Burolla
// Date: 5/30/2023
// Desc: Example of using variables in TypeScript.
//

namespace cv {
    const ex1 = () => {
        console.log('Exercise 1')
        let message: string = 'Hello World'
        let totalSales: number = 51.50
        let isLoggedIn: boolean = true
        let numWheels: number = 4

        console.log(message)
        console.log(totalSales)
        console.log(isLoggedIn)
        console.log(numWheels)  
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
        ex1() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
