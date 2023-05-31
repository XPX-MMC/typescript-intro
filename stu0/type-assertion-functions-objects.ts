namespace stu0_tafo {

    type Car = {
        make: string,
        model: string,
        price: number
    }

    type Cat = {
        name: string,
        age: number,
    }

    const ex1 = () => {
        console.log('Exercise 1')
        let myString : unknown;
        myString = 1
        myString = "Hello"
        let myStringLength : number = (myString as string).length
        console.log(myStringLength)
    }

    const ex2 = () => {
        console.log('Exercise 2')
        let result: number = 0
        result = substract(10,2)
        console.log(result)
    }

    const ex3 = () => {
        console.log('Exercise 3')
        displayMessage("Hello", 3)
    }

    const ex4 = () => {
        console.log('Exercise 4')
        const c1 = {make: "Ford", model: "Fiesta", price: 20000}
        const c2 =  {make: "Toyota", model: "Corolla", price: 30000}
        const r = add(c1, c2)
        console.log(r)
    }

    const ex5 = () => {
        console.log('Exercise 5')
        const cats = createCats()
        console.log(cats)
    }

    //
    // YOUR FUNCTIONS HERE
    //

    const substract = (a: number, b: number) : number => {
        return a - b
    }

    const displayMessage = (message: string, numTimes: number) : void => {
        for (let i = 0; i < numTimes; i++) {
            console.log(message)
        } 
    }

    const add = (car1: Car, car2: Car) : number => {
        return car1.price + car2.price
    }

    const createCats = () : Cat[] => {
        return [
            {name: "Fluffy", age: 5},
            {name: "Mittens", age: 2}
        ]
    }

    const main = () : void => {
        ex5() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
