import * as file from "fs";
import * as path from "path";


function getInput(): Array<string> {
    let input: Array<string> = file.readFileSync("dist/input/day2.txt").toString().split("\r\n");
input.forEach(word => console.log(word));
return input;
}

getInput();