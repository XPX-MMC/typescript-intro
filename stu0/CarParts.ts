namespace CarParts {
    export class Engine {
        constructor(public horsePower: number, public displacement: number) {
    
        }
    }
    
    export class Battery {
        public voltage: number;

        constructor(theVoltage: number) {
            if (theVoltage <= 0) {
                throw new Error("Invalid Voltage");
            }
            this.voltage = theVoltage;
        }
    } 
}

export { CarParts }
