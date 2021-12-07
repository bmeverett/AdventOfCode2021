import * as fs from 'fs';

export async function day7() {
  const input = await fs.readFileSync('./inputs/day7.txt');
  const crabs = input
    .toString()
    .split(',')
    .map((x) => +x)
    .sort((a, b) => a - b);

  let fuel = 0;
  const midPoint = crabs.length / 2;
  const firstHalf = crabs.slice(0, midPoint);
  const secondHalf = crabs.slice(midPoint);
  for (let i = 0; i < firstHalf.length; i++) {
    fuel += midPoint - firstHalf[i];
  }

  for (let i = 0; i < secondHalf.length; i++) {
    fuel += secondHalf[i] - midPoint;
  }

  console.log(fuel); //335330
  return fuel;
}

export async function day7Part2() {
  const input = await fs.readFileSync('./inputs/day7.txt');
  const crabs = input
    .toString()
    .split(',')
    .map((x) => +x)
    .sort((a, b) => a - b);

  let fuel = Number.MAX_SAFE_INTEGER;
  let min = crabs[0];
  let max = crabs[crabs.length - 1];

  for (let i = min; i <= max; i++) {
    let calcFuel = 0;
    for (let j = 0; j < crabs.length; j++) {
      const distance = Math.abs(i - crabs[j]);
      for (let k = 1; k <= distance; k++) {
        calcFuel += k;
      }
    }
    fuel = Math.min(fuel, calcFuel);
  }

  console.log(fuel); // 92439766
  return fuel;
}
