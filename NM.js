let decimalRequired = 4;
let v = (x) => x * Math.log10(x);

function calculate(x1, x2) {
  let fx1 = v(x1) - 1.2;
  let fx2 = v(x2) - 1.2;

  let x0 = x1 - (fx1 * (x2 - x1)) / (fx2 - fx1);
  let fx0 = v(x0) - 1.2;

  const obj = {
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

let d = calculate(2, 3);

while (true) {
  let { x1, x2, x0, fx0 } = d;
  if (fx0 < 0) d = calculate(x0, x2);
  else d = calculate(x1, x0);
  if (isEqual(x0, d.x0)) {
    break;
  }
}

function isEqual(a, b) {
  a = a.toFixed(decimalRequired);
  b = b.toFixed(decimalRequired);

  return a === b;
}
