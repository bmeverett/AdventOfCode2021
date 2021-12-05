import { day5, day5Part2 } from './day5';

it('compiles and returns', async () => {
  expect(await day5()).toBeDefined();
  expect(await day5Part2()).toBeDefined();
});
