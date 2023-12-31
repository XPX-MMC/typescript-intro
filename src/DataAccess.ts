//
// Name: DataAccess.ts
// Auth: Martin Burolla
// Date: 5/31/2023
//

namespace src {
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

export { API, src }
