function fibonacci(num1, num2, targetNum) {
  let positionOfTarget = 2;
  let nextNumber;

  while (nextNumber !== targetNum) {
    nextNumber = num1 + num2;
    num1 = num2;
    num2 = nextNumber;
    positionOfTarget++;
  }

  console.log(positionOfTarget);
}

// 2, 5, 19 -> 5
fibonacci(2, 5, 19);
