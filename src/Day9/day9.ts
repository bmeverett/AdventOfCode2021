import * as fs from 'fs';

export async function day9() {
  const input = await fs.readFileSync('./inputs/day9.txt');
  let grid: number[][] = [];

  input
    .toString()
    .split('\n')
    .forEach((line, row) => {
      grid[row] = [];
      line.split('').forEach((col, colIndex) => {
        grid[row][colIndex] = +col;
      });
    });
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const neighbors = [];
      if (row >= 1) {
        neighbors.push(grid[row - 1][col]);
      }
      if (col >= 1) {
        neighbors.push(grid[row][col - 1]);
      }
      if (row < grid.length - 1) {
        neighbors.push(grid[row + 1][col]);
      }
      if (col < grid[0].length - 1) {
        neighbors.push(grid[row][col + 1]);
      }
      if (Math.min(...neighbors) > grid[row][col]) {
        count += grid[row][col] + 1;
      }
    }
  }

  console.log(count);
  return count;
}

export async function day9Part2() {
  const input = await fs.readFileSync('./inputs/day9.txt');
}
