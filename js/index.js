// Cycle type function
const num = +prompt('Введіть число');

function calcFibNum(num) {
  let a = 1;
  let b = 1;
  let c = a + b;
  for (let i = 3; i < num; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}

document.write(calcFibNum(num));

// // Recursion type function
const numb = +prompt('Введіть число');

function calcFib(numb) {
  if (numb <= 1) {
  return numb
  } else {
  return calcFib(numb - 1) + calcFib(numb - 2);
    }
}

document.write(calcFib(numb));

// Array type function
const n = +prompt('Введіть число');

function calcFibNumber(n) {
  const array = [1, 1, 2];

  for (let i = 3; i < n; i++) {
    array[0] = array[1];
    array[1] = array[2];
    array[2] = array[0] + array[1];
  }

  return array[2];
}

document.write(calcFibNumber(n));










