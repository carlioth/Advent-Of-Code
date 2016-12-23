import * as inpus from "./input";

function GoUpOrDown(dir: string, counter: number): number {
    if (dir == '(')
        return ++counter;
    return --counter;
}

function read(): void {
    const allIinstructions: string[] = inpus.input.split('');
    let level: number = 0;

    for(let instr of allIinstructions) {
        level = GoUpOrDown(instr, level)
    }
    console.log(level);
}

read();