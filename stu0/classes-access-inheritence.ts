//
// Name: classes-access-inheritence.ts
// Auth: Martin Burolla
// Date: 5/31/2023
// Desc: Demonstrates classes and access modifiers.
//

namespace stu0_cami {
    const ex1 = () => {
        console.log('Exercise 1')
        const person = new Person('Alice', 32)
        console.log(person.speak())
    }

    const ex2 = () => {
        console.log('Exercise 2')
        const person = new Person('Bob', 33)
        console.log(person.getName())
    }

    const ex3 = () => {
        console.log('Exercise 3')
        let catArray = createCats()
        console.log(catArray)
    }

    const ex4 = () => {
        console.log('Exercise 4')
        const person = new Person('Charlie', 33)
        person.addCat(new Cat('Tiger', 3))
        person.addCat(new Cat('Lion', 5))
        console.log(person)
    }

    const ex5 = () => {
        console.log('Exercise 5')
        const student = new Student('Bob', 25, 'University of California')
        console.log(student.speak())
    }

    //
    // YOUR CLASSES HERE
    //

    class Cat {
        public name: string
        public age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class Person {
        private name: string
        private age: number
        private cats: Cat[] = []

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        public speak() : string {
            return `Hello, my name is ${this.name} and my age is: ${this.age}.`
        }

        public getName() : string {
            return this.name
        }

        public addCat(cat: Cat) {
            this.cats.push(cat)
        }

        public getCats() : Cat[] {
            return this.cats
        }
    }

    class Student extends Person {
        private school: string

        constructor(name: string, age: number, school: string) {
            super(name, age)
            this.school = school
        }

        public speak() : string {
            return `Hello, my name is ${this.getName()} and I am attending ${this.school}.`
        }
    }

    //
    // YOUR FUNCTIONS HERE
    //

    const createCats = () : Cat[] => {
        const retval: Cat[] = []
        retval.push(new Cat('Tigger', 10))
        retval.push(new Cat('Gypsy', 6))
        retval.push(new Cat('Lily', 12))
        return retval
    }

    const main = () : void => {
        ex5() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
