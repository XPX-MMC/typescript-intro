# Modules Namespaces Exceptions
Update `modules-namespaces-exceptions.ts` in your student directory for all exercises.

# Ex 1
Create a file in your student directory called `CarParts.ts.`  This file contains two classes (`Engine` and `Battery`) with the following properties:

- Engine: 
  - Horsepower
  - Displacement

- Battery:
  - Voltage

Update `modules-namespaces-exceptions.ts` and `ex1()` to import the `Engine` and `Battery` objects and consume them in the following manner:

Example usage:
```
const engine = new Engine(200, 2.5)
const battery = new Battery(12)
console.log(engine)
console.log(battery)
```

Output:
```
Engine { horsePower: 200, displacement: 2.5 }
Battery { voltage: 12 }
```

# Ex 2  
Wrap the `Engine` and `Battery` objects in a namespace called `CarParts` in your `CarParts.ts` file. Update the
`modules-namespaces-exceptions.ts` file and consume these objects.

Example usage:
```
const engine = new CarParts.Engine(200, 2.5)
const battery = new CarParts.Battery(12)
console.log(engine)
console.log(battery)
```

Output:
```
Engine { horsePower: 200, displacement: 2.5 }
Battery { voltage: 12 }
```

# Ex 3
Update the Battery class in the `CarPart.ts` module to throw an "Invalid Voltage" `Error` in the constructor when a negative or zero voltage is passed into the constructor. Catch the error in `ex3()` and log it to the console.
