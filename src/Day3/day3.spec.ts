import { day3, day3Part2 } from './day3';

it('compiles and returns', async () => {
  expect(await day3()).toBeDefined();
  expect(await day3Part2()).toBeDefined();
});
