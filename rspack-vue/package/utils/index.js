export const add = (...arg) => {
  return arg.reduce((total, current) => total + current, 0) + 10;
};
