import * as fs from 'fs';

export async function day10() {
  const input = await fs.readFileSync('./inputs/day10.txt');
  let count = 0;

  const pairs = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>'],
  ]);
  const invalidChars = new Map<string, number>();
  input
    .toString()
    .split('\n')
    .forEach((line) => {
      const stack: string[] = [];
      line.split('').forEach((char) => {
        if (pairs.get(char)) {
          stack.push(char);
        } else {
          const last = stack.pop();
          if (last && pairs.get(last) !== char) {
            const found = invalidChars.get(char);
            invalidChars.set(char, found ? found + 1 : 1);
          }
        }
      });
    });

  for (const [key, value] of invalidChars) {
    if (key === ')') {
      count += value * 3;
    }
    if (key === ']') {
      count += value * 57;
    }
    if (key === '}') {
      count += value * 1197;
    }
    if (key === '>') {
      count += value * 25137;
    }
  }
  console.log(count);
  return count;
}

export async function day10Part2() {
  const input = await fs.readFileSync('./inputs/day10.txt');
}
