namespace stu0 {
    const main = () => {
        console.log("Hello World!")

        // Cannot assign a string to a number because x has been assigned 
        // a number type by the TypeScript compiler.
        // The TypeScript compiler infers the type of x to be a number.
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

        // JavaScript by default always returns undefined for a function.
        console.log(calcTax(1000))
    }

    const test = (message: string) => {
        console.log(message)
    }
    
    // Specify input types and output type.
    const calcTax = (income: number, taxYear = 2022): number => {
        if (taxYear < 2022)
            return income * 1.2
        return income * 1.3
    }


    // Objects, cannot dynamically add fields at runtime.
    // Declare and initialize.
    let person  = {
        name: "Marty",
        age: 5150
    }

    // Declare.
    let person2 : {
        name: string,
        age: number
    }

    // Declare and initialize.
    let person3  : {
        name: string,
        age: number,
    }
    

    // Type alias: Define the shape of an object.
    type Person = {
        readonly id: number,
        name: string,
        retire: (date: Date) => void  // signature
    }

    // Literal types
    type Metric = "cm" | "inch"
    type Quantity = 50 | 100 | 150
    let q:  Quantity = 100

    // Nullable types
    



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