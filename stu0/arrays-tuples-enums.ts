namespace stu_0 {
    const ex1 = () => {
        console.log('Exercise 1')
        let array: number[] = [1, 2, 3]
        console.log(array[0])
        console.log(array[1])
        console.log(array[2])
    }

    const ex2 = () => {
        console.log('Exercise 2')
        const array1: string[] = ["one", "two", "three"]
        const array2: string[] = ["four", "five", "six"]
        const array3 = array1.concat(array2)
        console.log(array3)
    }

    const ex3 = () => {
        console.log('Exercise 3')
        const tuple1: [number, string] = [111, "Alice"]
        const tuple2: [number, string] = [222, "Bob"]
        const tuple3: [number, string] = [333, "Charlie"]
        const array1 = []
        array1.push(tuple1, tuple2, tuple3, "test")
        console.log(array1)
    }

    const ex4 = () => {
        console.log('Exercise 4')
        enum Color {
            Red   = "255, 0, 0", 
            Green = "0, 255, 0", 
            Blue  = "0, 0, 255"
        }
        console.log(Color.Green)
    }

    const ex5 = () => {
        console.log('Exercise 5')
        enum Color {
            Red   = "255, 0, 0", 
            Green = "0, 255, 0", 
            Blue  = "0, 0, 255"
        }
        const colors: Color[] = [Color.Red, Color.Green, Color.Blue]
        console.log(colors[0])
        console.log(colors[1])
        console.log(colors[2])
    }

    const main = () : void => {
        ex5() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
