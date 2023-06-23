
import { stu_0_cp } from './CarParts'


namespace stu0_mne {
    const ex1 = () => {
        console.log('Exercise 1')
        // const engine = new Engine(200, 2.5)
        // const battery = new Battery(12)
        // console.log(engine)
        // console.log(battery)
    }

    const ex2 = () => {
        console.log('Exercise 2')
        const engine = new stu_0_cp.Engine(200, 2.5)
        const battery = new stu_0_cp.Battery(12)
        console.log(engine)
        console.log(battery)
    }

    const ex3 = () => {
        console.log('Exercise 3')
        try {
            const battery = new stu_0_cp.Battery(-2)
        }
        catch (e) {
            console.log()
        }
    }

    const main = () : void => {
        ex3() // Change this to ex2(), ex3(), ex4(), or ex5() to run the desired exercise.
    }

    main()
}
