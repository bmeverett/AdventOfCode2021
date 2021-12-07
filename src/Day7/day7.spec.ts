import { day7, day7Part2 } from './day7';

it('compiles and returns', async () => {
  expect(await day7()).toBeDefined();
  expect(await day7Part2()).toBeDefined();
});
