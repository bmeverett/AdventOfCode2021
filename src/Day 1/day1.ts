import * as fs from 'fs';

export async function day1(part2 = false) {
  const input = await fs.readFileSync('./inputs/day1.txt');

  const values = input.toString().split('\n');
  let increases = 0;
  let previous = 0;

  if (part2) {
    const sums: number[] = [];
    let i = 0;
    while (i + 3 <= values.length) {
      const newSum = parseInt(values[i]) + parseInt(values[i + 1]) + parseInt(values[i + 2]);
      sums.push(newSum);
      i++;
    }

    for (let j = 0; j < sums.length; j++) {
      if (sums[j + 1] > sums[j]) {
        increases++;
      }
    }
    console.log(increases);
    return increases;
  }
  values.forEach((val, index) => {
    const num = parseInt(val);
    if (previous === 0) {
      previous = num;
      return;
    }

    if (num > previous) {
      increases++;
    }

    previous = num;
  });

  console.log(increases);
  return increases;
}
