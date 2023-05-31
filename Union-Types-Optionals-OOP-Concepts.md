# Union Types, Optionals, OOP Concepts
Update `union-types-optionals-oop-concepts.ts` in your student directory for all exercises.

# Ex 1
Update `ex1()` to declare a variable named `value` of type `number` or `boolean`.  Initialize the `value` variable to a value of 10 and display the results to the console.  Next, set the value of the `value` variable to `true` and display the results to the console.

Console output:
```
10
true
```

# Ex 2
Update `ex2()` to call a function named `calcTotal()`.  This function has the following arguments:

|Arg name|type  |required|
|--------|------|--------|
|price   |number|yes     |
|qty     |number|yes     |
|discount|number|no      |


`CalcTotal()` calculates the total price based on the price and the qty.  Discount is a dollar amount and is subtracted from the total.

Example usage:
```
const total1 = calcTotal(10, 2)
const total2 = calcTotal(30, 2, 10)
console.log(total1, total2)
```
Output:
```
20 50
```

# Ex 3
Update `ex3()` to to create a type called `User`.  The User type has the following fields:

|name    |type  |required|
|--------|------|--------|
|name    |string|yes     |
|address |string|no      |

Create two users, one with an address and one without and display these objects to the console.

Example output:
```
{ name: 'John' }
{ name: 'Mary', address: '123 Main St' }
```

# Ex 4
Update `ex4()` to create a strongly typed array of type `strings` named `oopConcepts`.  Use the `push()` function to push the six characteristics of OOP and display this list on the console.

# Ex 5
Update `ex5()` to delcare and initialize a string called `paragraph`.  This paragraph will contain the full paragraph of one of the OOP concepts.  Hint: use the backtick (\`) symbol to create multiline strings in TypeScript and JavaScript.  Use the `.length` property to display the length of this paragraph on the console.
