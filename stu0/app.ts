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