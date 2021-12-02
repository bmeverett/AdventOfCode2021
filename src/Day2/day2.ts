import * as fs from 'fs';

export async function day2() {
  const input = await fs.readFileSync('./inputs/day2.txt');

  const values = input.toString().split('\n');
  let horz = 0;
  let depth = 0;

  values.forEach((value) => {
    const instr = value.split(' ');
    const val = parseInt(instr[1]);
    switch (instr[0]) {
      case 'forward':
        horz += val;
        break;
      case 'down':
        depth += val;
        break;
      case 'up':
        depth -= val;
        break;
    }
  });

  console.log(horz * depth);
  return horz * depth;
}

export async function day2Part2() {
  const input = await fs.readFileSync('./inputs/day2.txt');

  const values = input.toString().split('\n');
  let horz = 0;
  let depth = 0;
  let aim = 0;

  values.forEach((value) => {
    const instr = value.split(' ');
    const val = parseInt(instr[1]);
    switch (instr[0]) {
      case 'forward':
        horz += val;
        depth += aim * val;
        break;
      case 'down':
        aim += val;
        break;
      case 'up':
        aim -= val;
        break;
    }
  });
  console.log(horz * depth);
  return horz * depth;
}
