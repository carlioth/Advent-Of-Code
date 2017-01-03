import { input } from "./input"


function readImport(): packageSize[] {
    let c = input.split(/\s+/);

    let b = c.forEach(b => b.split("x").map(parcel => new packageSize(Number(parcel[0]), Number(parcel[1]), Number(parcel[2]))));
}

class packageSize {
    constructor(public width: number, public height: number, public depth: number) { }
}

let b = readImport().
    b.forEach(vald => console.log(vald));