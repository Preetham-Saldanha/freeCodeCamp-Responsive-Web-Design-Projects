var x = 10;
let y = 20;

console.log("Initial values:", x, y);

setTimeout(function () {
  x = 30;
  y = 40;
  console.log("Inside setTimeout:", x, y);
}, 2000);

console.log("After setTimeout:", x, y);
