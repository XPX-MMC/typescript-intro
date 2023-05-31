namespace stu0_ut {
    const ex1 = () => {
        console.log('Exercise 1')
        let value: number | boolean;
        value = 10;
        console.log(value)
        value = true;
        console.log(value)
    }

    const ex2 = () => {
        console.log('Exercise 2')
        const total1 = calcTotal(10, 2)
        const total2 = calcTotal(30, 2, 10)
        console.log(total1, total2)
    }

    const ex3 = () => {
        console.log('Exercise 3')
        type User = {
            name: string,
            address?: string
        }

        const user1: User = { name: 'John' }
        const user2: User = { name: 'Mary', address: '123 Main St' }
        console.log(user1)
        console.log(user2)
    }

    const ex4 = () => {
        console.log('Exercise 4')
        const oopConcepts : string[] = []
        oopConcepts.push('Classes')
        oopConcepts.push('Interfaces')
        oopConcepts.push('Inheritance')
        oopConcepts.push('Polymorphism')
        oopConcepts.push('Encapsulation')
        oopConcepts.push('Abstraction')
        oopConcepts.sort()
        console.log(oopConcepts)
    }

    const ex5 = () => {
        console.log('Exercise 5')
        const paragraph : string = `
            A class is a blueprint or template for creating objects. 
            It defines the properties and behaviors that objects of that class should possess. 
            Objects are instances of a class.
        `
        console.log(paragraph.length)
    }


    //
    // YOUR FUNCTIONS HERE
    //

    const calcTotal = (price: number, qty: number, discount?: number) : number => {
        let total = price * qty;
        if (discount) {
            total -= discount;
        }
        return total;
    }
 
    const main = () : void => {
        ex3() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
