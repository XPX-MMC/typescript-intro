# Type Assertion Functions & Objects
Update `type-assertion-functions-objects.ts` in your student directory for all exercises.

# Ex 1
Update `ex1()` to create a variable called myString of type: `unknown`.
Assign the value of 1 to this string, then assign the value of "Hello" to this string.  Use type assertion to convert myString to a string and determine the length of the string.  Display the length on the console.

Console output:
```
5
```

# Ex 2
Update `ex2()` to to call a strongly typed function named `substract()`.  This function takes two arguments, both of type number.  This function also returns a type of number.  This function subtracts the two numbers passed into it, and returns the result.  The `ex2()` function displays the result of the `subtract()` function to the console.

Example usage:
```
let result: number = 0
result = substract(10,2)
console.log(result)
```

Console output:
```
5
```

# Ex 3
Update `ex3()` to call a strongly function named `displayMessage()`.  This function accepts two arguments, one a string and the other a number.  This function returns nothing and displays the text passed into it for the number of times specified on the console.

Example usage:
```
displayMessage("Hello", 3)
```

Console output:
```
Hello
Hello
Hello
```

# Ex 4
Update `ex4()` to create two cars for the Car type that is specified in `type-assertions-functions-objects.ts` for the following cars:

|make|model|price    |
|----|-----|---------|
|Ford|Fiesta|20000   |
|Toyota|Corolla|30000|

Pass these two car objects into a strongly typed function called `add()`.  This function accepts two objects of type Car and returns a number type.  This function returns the total price of these two cars.  `Ex4()` displays the result on the console.

Console Output:
```
50000
```

# Ex 5
Update `ex5()` to call a strongly typed function called `createCats()`.  This function return an array of Cat types as defined in  `type-assertions-functions-objects.ts`.  

Example usage:
```
const cats = createCats()
console.log(cats)
```

Console output:
```
[ { name: 'Fluffy', age: 5 }, { name: 'Mittens', age: 2 } ]
```
