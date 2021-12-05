import * as fs from 'fs';

class BingoCard {
  card: number[][];
  rowLength = 0;
  rows = 0;
  bingo = false;

  constructor(card: number[][]) {
    this.card = card;
    this.rowLength = this.card[0].length;
    this.rows = this.card.length;
  }

  checkNumber(val: number) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.rowLength; j++) {
        if (this.card[i][j] === val) {
          // "mark" by setting to 0
          this.card[i][j] = -1;
          this.bingo = this.checkForBingo(i, j);
          return;
        }
      }
    }
  }

  checkForBingo(row: number, col: number) {
    let bingo = false;

    // check for row bingo
    for (let i = 0; i < this.rowLength; i++) {
      if (this.card[row][i] === -1) {
        bingo = true;
      } else {
        bingo = false;
        break;
      }
    }
    // if we have a bingo we can return without checking
    if (bingo) {
      return true;
    }

    //check for column bingo
    for (let i = 0; i < this.rows; i++) {
      if (this.card[i][col] === -1) {
        bingo = true;
      } else {
        bingo = false;
        break;
      }
    }

    return bingo;
  }

  sumBingoCard(): number {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.rowLength; j++) {
        if (this.card[i][j] !== -1) {
          sum += this.card[i][j];
        }
      }
    }
    return sum;
  }
}

export async function day4() {
  const input = await fs.readFileSync('./inputs/day4.txt');
  const values = input.toString().split('\n');

  const numbers = values[0].split(',').map((num) => parseInt(num));
  let card: number[][] = [];
  let cardIndex = 6;
  const cards: BingoCard[] = [];
  let column = 0;

  for (let i = 2; i < values.length; i++) {
    card[column] = [];
    const row = values[i].split(' ').filter((item) => item);
    if (row.length === 0) {
      continue;
    }
    row.forEach((value, index) => {
      card[column][index] = parseInt(value);
    });

    if (i === cardIndex) {
      cards.push(new BingoCard(card));
      card = [];
      cardIndex += 6;
      column = 0;
    } else {
      column++;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let c = 0; c < cards.length; c++) {
      cards[c].checkNumber(numbers[i]);

      if (cards[c].bingo) {
        const ans = cards[c].sumBingoCard() * numbers[i];
        console.log(ans); //8580
        return ans;
      }
    }
  }

  return 0;
}

export async function day4Part2() {
  const input = await fs.readFileSync('./inputs/day4.txt');
  const values = input.toString().split('\n');

  const numbers = values[0].split(',').map((num) => parseInt(num));
  let card: number[][] = [];
  let cardIndex = 6;
  const cards: BingoCard[] = [];
  let column = 0;

  for (let i = 2; i < values.length; i++) {
    card[column] = [];
    const row = values[i].split(' ').filter((item) => item);
    if (row.length === 0) {
      continue;
    }
    row.forEach((value, index) => {
      card[column][index] = parseInt(value);
    });

    if (i === cardIndex) {
      cards.push(new BingoCard(card));
      card = [];
      cardIndex += 6;
      column = 0;
    } else {
      column++;
    }
  }

  let winners = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let c = 0; c < cards.length; c++) {
      cards[c].checkNumber(numbers[i]);

      if (cards[c].bingo) {
        winners.add(c);
        if (winners.size === cards.length) {
          const ans = cards[c].sumBingoCard() * numbers[i];
          console.log(ans); //9576
          return ans;
        }
      }
    }
  }

  return 0;
}
