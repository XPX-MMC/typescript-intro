# Interfaces, Abstract Classes
Update `interfaces-abstract-classes` in your student directory for all exercises.

# Ex 1
Update `ex1()` to instantiate a `Calculator` object.  The `Calculator` object must implement the `Calculateble` interface as defined here:

```
    interface Calculateble {
       add(num1: number, num2: number): number
       subtract(num1: number, num2: number): number
       multiply(num1: number, num2: number): number
       divide(num1: number, num2: number): number
    }
```

Example usage:
```
const calculator = new Calculator()
console.log(calculator.add(1, 2))
console.log(calculator.subtract(4, 2))
console.log(calculator.multiply(4, 3))
console.log(calculator.divide(10, 2))

```

Output:
```
3
2
12
5
```

# Ex 2
Update `ex2()` to to instantiate a `CatDataAccess()` object.  This class implements an interface that contains one public method called `getCat()` which returns a `Cat` object.

Example usage:
```
const catDataAccess = new CatDataAccess()
const cat = catDataAccess.getCat()
console.log(cat)
```

Output:
```
Cat { name: 'Fluffy', age: 2 }
```

# Ex 3
Update `ex3()` to instantiate a `Square` object.  The Square object extends the abstract `Shape` class.  As a reference these items have been included in `interfaces-abstract-classes.ts`

Example usage:
```
const square = new Square('blue', 5)
console.log(square.getArea())

```

Output:
```
25
```
