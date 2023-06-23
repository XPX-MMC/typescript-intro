//
// Name: modules-namespaces-exceptions.ts
// Auth: Martin Burolla
// Date: 5/31/2023
//

import { stu_7_cp } from './CarParts'

namespace stu_1 {
    const ex1 = () => {
        console.log('Exercise 1')
    }

    const ex2 = () => {
        console.log('Exercise 2')
    }

    const ex3 = () => {
        console.log('Exercise 3')
    }

    const main = () : void => {
        ex3() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
