let decimalRequired = 3;
let v = (x) => Math.pow(x, 5) - (3 * Math.pow(x, 3)) - 1;

function calculate(x1, x2,iteration) {
  let fx1 = v(x1);
  let fx2 = v(x2);

  let x0 = x1 - (fx1 * (x2 - x1)) / (fx2 - fx1);
  let fx0 = v(x0);

  const obj = {
    iteration,
    x1,
    x2,
    fx1,
    fx2,
    x0,
    fx0,
  };

  console.table(obj);

  return obj;
}

let itr = 0;
let d = calculate(1, 2, itr++);

while (true) {
  let { x1, x2, x0, fx0 } = d;
  if (fx0 < 0) d = calculate(x0, x2, itr++);
  else d = calculate(x1, x0, itr++);
  if (isEqual(x0, d.x0)) {
    break;
  }
}

function isEqual(a, b) {
  a = a.toFixed(decimalRequired);
  b = b.toFixed(decimalRequired);

  return a === b;
}
