namespace Database {
    type User = {
        name: string,
        age: number
    }
    export const getData = () : User => {
        let retval: User = {
            name: 'John',
            age: 30
        }
        return retval
    }
}

namespace API {
    export const getData = () : string => {
        return "Hello"
    }
}

export { API ,Database }
