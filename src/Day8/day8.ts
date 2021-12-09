import * as fs from 'fs';

export async function day8() {
  const input = await fs.readFileSync('./inputs/day8.txt');
  const outputs = input
    .toString()
    .split('\n')
    .map((line) => {
      return line.split('|')[1];
    });

  const one = 'cf';
  const four = 'bcdf';
  const seven = 'acf';
  const eight = 'abcdefg';
  const digitLengths = [one.length, four.length, seven.length, eight.length];
  let count = 0;

  const found = new Set();
  outputs.forEach((output) => {
    output.split(' ').forEach((digits) => {
      if (!digits) return;
      count = digitLengths.includes(digits.length) ? count + 1 : count;
    });
  });

  console.log(count);
  return count;
}

export async function day8Part2() {
  const input = await fs.readFileSync('./inputs/day8.txt');
}
