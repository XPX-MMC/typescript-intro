//
// Name: CarParts.ts
// Auth: Martin Burolla
// Date: 5/31/2023
//

namespace stu_1_cp {
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

export { stu_1_cp }
