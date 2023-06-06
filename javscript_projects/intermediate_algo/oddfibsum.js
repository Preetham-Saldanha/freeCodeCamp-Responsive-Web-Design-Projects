function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 1;
  let fib = 1;
  while (fib <= num) {
    if (fib % 2 === 1) {
      sum += fib;
    }
    prev = curr;
    curr = fib;
    fib = curr + prev;
  }
  console.log(sum);
  return sum;
}
