namespace stu0 {
    const main = () => {
        console.log("Hello World!")

        // Cannot assign a string to a number because x has been assigned 
        // a number type by the TypeScript compiler.
        // The TypeScript compile infers the type of x to be a number.
        let x = 5150 
  
        // Cannot assign a string to a number because y has been assigned 
        // a number type by the developer.
        let y: number = 5150 
    
        // x = "test" // Error
        // y = "test" // Error

        test("Marty")

        // Arrays
        let array1 = [1,2,3,4,"5"]
        let array2: number[] = [1,2,3,4,5] // Cannot add a string.

        // Tuples are fixed length arrays where each element has a type.
        // Handy for key-value pairs.  Anything more than three, make it a class.
        let tuple1: [string, number] = ["test", 1]
        tuple1[0] = "test2"
        tuple1[1] = 2

        // Enums
        enum Color {
            Red,   // 0
            Green, // 1
            Blue   // 2
        }
    
        enum Size {
            Small = 1,
            Medium = 2,
            Large = 3
        }




    }

    const test = (message: string) => {
        console.log(message)
    }
    
    // Specify input types and output type.
    const calcTax = (income: number, taxYear: number = 2022): number => {
        if (taxYear < 2022)
            return income * 1.2
        return income * 1.3
    }

    main()
}

// TypesScript Types:
// number, string, boolean, null, undefined, void, object.
// tuples
// enums
// any

// Types
// type aliases, interfaces, and classes.*/}

// Types
// type aliases, interfaces, and classes.