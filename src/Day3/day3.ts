import * as fs from 'fs';

export async function day3() {
  const input = await fs.readFileSync('./inputs/day3.txt');

  const values = input.toString().split('\n');

  const numbers = values[0].toString().length;
  let gama = '';
  let eps = '';
  for (let i = 0; i < numbers; i++) {
    let zeros = 0;
    let ones = 0;

    values.forEach((value) => {
      if (value[i] === '0') {
        zeros++;
      } else if (value[i] === '1') {
        ones++;
      }
    });

    if (zeros > ones) {
      gama += '0';
      eps += '1';
    } else {
      gama += '1';
      eps += '0';
    }
  }

  const gInt = parseInt(gama, 2);
  const eInt = parseInt(eps, 2);
  const product = gInt * eInt;
  console.log(product);
  return product;
}

export async function day3Part2() {
  const input = await fs.readFileSync('./inputs/day3.txt');
  let values = input.toString().split('\n');
  let co2Values = [...values];
  let index = 0;
  while (values.length > 1) {
    let zeros = 0;
    let ones = 0;
    const zeroVals: string[] = [];
    const oneVals: string[] = [];
    values.forEach((value) => {
      if (value[index] === '0') {
        zeros++;
        zeroVals.push(value);
      } else if (value[index] === '1') {
        ones++;
        oneVals.push(value);
      }
    });

    if (zeros > ones) {
      values = zeroVals;
    } else if (ones > zeros || zeros === ones) {
      values = oneVals;
    }
    index++;
  }

  index = 0;
  while (co2Values.length > 1) {
    let zeros = 0;
    let ones = 0;
    const zeroVals: string[] = [];
    const oneVals: string[] = [];
    co2Values.forEach((value) => {
      if (value[index] === '0') {
        zeros++;
        zeroVals.push(value);
      } else if (value[index] === '1') {
        ones++;
        oneVals.push(value);
      }
    });

    if (zeros < ones || zeros === ones) {
      co2Values = zeroVals;
    } else if (ones < zeros) {
      co2Values = oneVals;
    }
    index++;
  }

  const oxGen = values[0];
  const co2 = co2Values[0];

  console.log(parseInt(oxGen, 2) * parseInt(co2, 2));
  return values;
}
