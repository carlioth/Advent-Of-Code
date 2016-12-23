import * as inpus from "./input";
import * as inputp2 from "./inputp2";

function GoUpOrDown(dir: string, counter: number): number {
    if (dir == '(')
        return ++counter;
    return --counter;
}

function findElevatorLevel(): void {
    const allIinstructions: string[] = inpus.input.split('');
    let level: number = 0;

    for (let instr of allIinstructions) {
        level = GoUpOrDown(instr, level)
    }
    console.log("Elevator stops at " + level);
}

function findBasement(): void {
    const allIinstructions: string[] = inputp2.inputp2.split('');
    let instruction: number = 1;
    let level: number = 0;

    for (let instr of allIinstructions) {
        level = GoUpOrDown(instr, level);
        if (level < 0)
            break;
        ++instruction;
    }
    console.log("Going to the basement at " + instruction);
}


findElevatorLevel();
findBasement();