const fn = (zeros, ones, current) => {
  const next0 = () => fn(zeros - 1, ones, '0');
  const next1 = () => fn(zeros, ones - 1, '1');

  if (!zeros) {
    return ones ? next1() : 1;
  }

  if (current === '0') {
    return ones ? next1() : 0;
  }

  return ones ? next0() + next1() : next0();
};

export default fn;
