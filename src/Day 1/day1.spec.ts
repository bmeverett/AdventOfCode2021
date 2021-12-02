import { day1 } from './day1';

it('compiles and returns', async () => {
  expect(await day1()).toBeDefined();
});

it('day 1 part 2', async () => {
  expect(await day1(true)).toBeDefined();
});
