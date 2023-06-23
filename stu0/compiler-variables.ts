//
// Name: compiler-variables.ts
// Auth: Martin Burolla
// Date: 5/30/2023
// Desc: Example of using variables in TypeScript.
//

namespace stu_0 {
    type Person = {
        name: string,
        age: number
    }

    const ex1 = () => {
        console.log('Exercise 1')
        const message: string = 'Hello World'
        const totalSales: number = 51.50
        const isLoggedIn: boolean = true
        const numWheels: number = 4

        console.log(message)
        console.log(totalSales)
        console.log(isLoggedIn)
        console.log(numWheels)  
    }

    const ex2 = () => {
        console.log('Exercise 2')
        let catName = 'Gypsy'
        let numGuitars = 4
        let isAlive = true
        let displacement = 2.5

        console.log(catName)
        console.log(numGuitars)
        console.log(isAlive)
        console.log(displacement)   
    }

    const ex3 = () => {
        console.log('Exercise 3')
        const dogName = 'Jones'
        const numGlasses = 12
        const isWater = false
        const weight = 198.2

        console.log(dogName)
        console.log(numGlasses)
        console.log(isWater)
        console.log(weight)
    }

    const ex4 = () => {
        console.log('Exercise 5')
        const numDaysInYear = 365
        const gravity = 9.81
        let shippingAddress = '123 Main St'
        const firstName = 'Marty'
        const hasAcceptedTermsAndConditions = true
        const speedLimit = 65

        console.log(numDaysInYear)
        console.log(gravity)
        console.log(shippingAddress)
        console.log(firstName)
        console.log(hasAcceptedTermsAndConditions)
        console.log(speedLimit)
    }

    const ex5 = () => {
        console.log('Exercise 5')
        let p1: Person = { name: "John", age: 20 } 
        let p2: Person = { name: 'Jane', age: 30 }
        let p3: Person = { name: 'Joe',  age: 40 }

        let array = []
        array.push(p1)
        array.push(p2)
        array.push(p3)
      
        let avg = averageAge(array)
        console.log(`Average age is ${avg}.`)
    }

    //
    // YOUR FUNCTIONS HERE
    //

    const averageAge = (people: Person[]) => {
        let total = 0
        let count = 0
        people.forEach(p => {
            count++
            total += p.age
        })
        return total / count
    }

    const main = () : void => {
        ex5() // Change this to ex2(), ex3(), ex4(), ex5(), ex6() to run the target exercise.
    }

    main()
}
