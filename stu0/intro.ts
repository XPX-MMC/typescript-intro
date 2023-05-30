function divide(a: number, b: number) {
    let retval = 0
    if (b === 0) {
        throw new Error("Divide by zero exception");
    } else {
        retval =  a / b;
    }
    return retval
}

const main = () => {
    try {
        let result = divide(1,0)
        console.log(result)
    }
    catch(error: any) {
        console.log(error.message)
    }
}

main()
