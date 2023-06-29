# Arrays Tuples & Enums
Update `arrays-tuples-enums.ts` in your student directory for all exercises.

# Ex 1
Update `ex1()` to create a strongly typed array that only contains items of type: number.  The array will have three numbers: 1,2,3.  Ouput each element of the array to the console.

Console ouput:
```
1
2
3
```

# Ex 2
Update `ex2()` to create two strongly typed arrays that only contains items of type string.

Array 1 has the following items:
- "one"
- "two"
- "three"

Array 2 has the following items:
- "four"
- "five"
- "six"

Use the `concat()` function to merge these two arrays together and display the contents of this array on the console:

```
[ 'one', 'two', 'three', 'four', 'five', 'six' ]
```

# Ex 3
Update `ex3()` to build three tuples for the following items:

|id |name   |
|---|-------|
|111|Alice  |
|222|Bob    |
|333|Charlie|

Add these items to a weakly typed array using the `push()` function and display this array in the console.

Console output:
```
[ [ 111, 'Alice' ], [ 222, 'Bob' ], [ 333, 'Charlie' ] ]
```

# Ex 4
Update `ex4()` to build an enum named Color that stores the RGB values for red, green and blue:

|Color |RGB        |
|------|-----------|
|Red   |"255,0,0"  |
|Green |"0,255,0"  |
|Blue  |"0,0,255"  |

Display the Green color on the console:

Console output:
```
0, 255, 0
```

# Ex 5
Update `ex5()` to include the Color enum that was built in Ex 4.  Create a strongly typed array named colors that contains a Red, Green and Blue color and display their values to the console:

Console output:

```
255, 0, 0
0, 255, 0
0, 0, 255
```
