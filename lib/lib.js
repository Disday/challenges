export const repeat = (func, count) => {
  [...Array(count).keys()].forEach(func);
};
