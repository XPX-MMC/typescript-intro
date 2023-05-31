# Classes Access Modifiers Inheritence
Update `class-access-inheritence.ts` in your student directory for all exercises.

# Ex 1
Update `ex1()` to to instaniate a `Person` object.  The `Person` object has the following characteristics:

- Private name of type string
- Private age of type number
- Constructor
- Public `speak()` method

The speak() method return a string that contains the name of the person and the age.

Example usage:
```
const person = new Person('Alice', 32)
console.log(person.speak())
```

Output:
```
Hello, my name is Alice and my age is: 32.
```

# Ex 2
Update `ex2()` to instaniate a `Person` object.  Update the person object to have a public method called `getName()` which returns the name of this person.

Example usage:
```
console.log('Exercise 2')
const person = new Person('Bob', 33)
console.log(person.getName())
```

Output:
```
Bob
```

# Ex 3
Update `ex3()` to call a strongly typed function called `createCats()`.  This function returns an array of `Cat` objects.  A `Cat` object has the following characteristics:

- Public name
- Public age
- Constructor

Display the cats on the console.

Example usage:
```
let catArray = createCats()
console.log(catArray)
```
Output:

```
[
  Cat { name: 'Tigger', age: 10 },
  Cat { name: 'Gypsy', age: 6 },
  Cat { name: 'Lily', age: 12 }
]
```

# Ex 4
Update `ex4()` to instaniate a `Person` object.  Update the `Person` object to contain a strongly typed array of `Cat` objects.  Add a metho to the Person object called `addCat()`.  `AddCat()` accepts one argument of type `Cat`, and adds this cat to the cat array.

Display this person on the console:

Example usage:
```
const person = new Person('Charlie', 33)
person.addCat(new Cat('Tiger', 3))
person.addCat(new Cat('Lion', 5))
console.log(person)
```

Output:
```
Person {
  cats: [ Cat { name: 'Tiger', age: 3 }, Cat { name: 'Lion', age: 5 } ],
  name: 'Charlie',
  age: 33
}
```

# Ex 5
Update `ex5()` to instaniate a `Student` object.  The `Student` extends the `Person` object.  The `Student` object has one public method called `speak()` which returns a `string` that contains the name of the person and the school this person is attending.

Example usage:
```
const student = new Student('Bob', 25, 'University of California')
console.log(student.speak())
```

Output
```
Hello, my name is Bob and I am attending University of California.
```
