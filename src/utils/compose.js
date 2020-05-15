const compose = (...func) => (component) => {
  return func.reduceRight((wrapped, f) => f(wrapped), component);
};

export default compose;

// const arr = ["1", "2", "2", "3"];
// const res = arr.reduceRight((previousValue, value) => previousValue + value, 3);
// console.log(res);
