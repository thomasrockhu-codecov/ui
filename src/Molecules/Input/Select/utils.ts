export const noop = (_: any) => _;
export function createCounter(init = 0, step = 1) {
  let x = init;
  return {
    next: () => {
      const retVal = { value: x };
      x += step;
      return retVal;
    },
  };
}
