import * as fs from 'fs';

export async function day6() {
  const input = await fs.readFileSync('./inputs/day6.txt');
  const rows = input.toString().split('\n');

  let fishes = rows[0].split(',').map((x) => parseInt(x));

  let addFish = 0;
  for (let i = 1; i <= 80; i++) {
    for (let j = 0; j < fishes.length; j++) {
      if (fishes[j] === 0) {
        fishes[j] = 6;
        addFish++;
      } else {
        fishes[j] -= 1;
      }
    }

    for (let a = 1; a <= addFish; a++) {
      fishes.push(8);
    }

    addFish = 0;
  }

  console.log(fishes.length);
  return fishes.length;
}

export async function day6Part2() {
  const input = await fs.readFileSync('./inputs/day6.txt');
  const rows = input.toString().split('\n');

  let fishes = rows[0].split(',').map((x) => parseInt(x));

  let fish: number[] = new Array(9);
  fish.fill(0);

  for (let i = 0; i < fishes.length; i++) {
    fish[fishes[i]]++;
  }

  for (let t = 0; t < 256; t++) {
    let oldFish = fish[0];
    fish[0] = fish[1];
    fish[1] = fish[2];
    fish[2] = fish[3];
    fish[3] = fish[4];
    fish[4] = fish[5];
    fish[5] = fish[6];
    fish[6] = fish[7] + oldFish;
    fish[7] = fish[8];
    fish[8] = oldFish;
  }

  let answer = 0;
  for (let i = 0; i < 9; i++) {
    answer += fish[i];
  }
  console.log(answer); //1746710169834
  return answer;
}
