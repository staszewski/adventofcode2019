import * as fs from 'fs';
import * as path from 'path';

const readFile = () => {
 try {
   return fs.readFileSync(path.join(__dirname, '../../../src/day1/input.txt'), "utf-8").split("\n")
 } catch (e) {
   return e
 }
}

const massModulesData: string[] = readFile()

const calculateFule = (module: string) => {
  return Math.floor(Number(module) / 3) - 2
}

const fuelData = massModulesData.map(calculateFule)

const sum = (input: number[]) => {
  return input.reduce((a: number, b: number) => {
    return a + b;
  });
}

console.log(sum(fuelData))
