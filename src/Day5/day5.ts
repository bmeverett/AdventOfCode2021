import * as fs from 'fs';

function setLines(storedLines: Map<number, Map<number, number>>, x: number, y: number) {
  let xFound = storedLines.get(x);
  if (xFound) {
    let yFound = xFound.get(y);
    xFound.set(y, yFound ? yFound + 1 : 1);
  } else {
    storedLines.set(x, new Map<number, number>([[y, 1]]));
  }
}

export async function day5() {
  const input = await fs.readFileSync('./inputs/day5.txt');
  const rows = input.toString().split('\n');

  let count = 0;
  const storedLines = new Map<number, Map<number, number>>();

  for (let i = 0; i < rows.length; i++) {
    const lines = rows[i].split('->');
    const [x1, y1] = lines[0].split(',').map((n) => +n);
    const [x2, y2] = lines[1].split(',').map((n) => +n);

    if (x1 === x2) {
      if (y2 > y1) {
        for (let x = y1; x <= y2; x++) {
          setLines(storedLines, x1, x);
        }
      } else {
        for (let x = y1; x >= y2; x--) {
          setLines(storedLines, x1, x);
        }
      }
    } else if (y1 === y2) {
      if (x2 > x1) {
        for (let x = x1; x <= x2; x++) {
          setLines(storedLines, x, y1);
        }
      } else {
        for (let x = x1; x >= x2; x--) {
          setLines(storedLines, x, y1);
        }
      }
    }
  }

  for (const [key, value] of storedLines.entries()) {
    for (const [yKey, yValue] of value.entries()) {
      if (yValue >= 2) {
        count++;
      }
    }
  }

  console.log(count); //7297
  return count;
}

export async function day5Part2() {
  const input = await fs.readFileSync('./inputs/day5.txt');
  const rows = input.toString().split('\n');

  let count = 0;
  const storedLines = new Map<number, Map<number, number>>();

  for (let i = 0; i < rows.length; i++) {
    const lines = rows[i].split('->');
    const [x1, y1] = lines[0].split(',').map((n) => +n);
    const [x2, y2] = lines[1].split(',').map((n) => +n);

    if (x1 === x2) {
      if (y2 > y1) {
        for (let x = y1; x <= y2; x++) {
          setLines(storedLines, x1, x);
        }
      } else {
        for (let x = y1; x >= y2; x--) {
          setLines(storedLines, x1, x);
        }
      }
    } else if (y1 === y2) {
      if (x2 > x1) {
        for (let x = x1; x <= x2; x++) {
          setLines(storedLines, x, y1);
        }
      } else {
        for (let x = x1; x >= x2; x--) {
          setLines(storedLines, x, y1);
        }
      }
    } else {
      // populate diagonal lines
      if (x1 > x2 && y1 > y2) {
        let y = y1;
        for (let x = x1; x >= x2; x--) {
          setLines(storedLines, x, y);
          y--;
        }
      } else if (x1 > x2 && y1 < y2) {
        let y = y1;
        for (let x = x1; x >= x2; x--) {
          setLines(storedLines, x, y);
          y++;
        }
      } else if (x1 < x2 && y1 > y2) {
        let y = y1;
        for (let x = x1; x <= x2; x++) {
          setLines(storedLines, x, y);
          y--;
        }
      } else if (x1 < x2 && y1 < y2) {
        let y = y1;
        for (let x = x1; x <= x2; x++) {
          setLines(storedLines, x, y);
          y++;
        }
      }
    }
  }

  for (const [key, value] of storedLines.entries()) {
    for (const [yKey, yValue] of value.entries()) {
      if (yValue >= 2) {
        count++;
      }
    }
  }

  console.log(count); //
  return count;
}
