function convertBinaryToDecimal(arr) {
  // flips the array (because binary is read from right to left)
  let binaryArray = [];
  let copyOfArr = [...arr];
  while (copyOfArr.length !== 0) {
    binaryArray.push(copyOfArr.pop());
  }

  // reqognises the 1's and and adds-up their decimal values
  let totalInDecimal = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    const digit = binaryArray[i];
    if (digit === 1) {
      // calculates the decimal value given the binary position
      totalInDecimal += Math.pow(2, i);
    } else if (digit !== 0) {
      totalInDecimal = 'Array is NOT binary!';
      break;
    }
  }

  return totalInDecimal;
}

function palindrom(param) {
  let cutPoint = parseInt(param.length / 2);
  let arr1 = [];
  let arr2 = [];

  // creates 2 equal halves of given parameter
  for (let i = 0; i < cutPoint; i++) {
    if (typeof param === 'object') {
      arr1.push(param[i]);
    } else {
      arr1.push(param.charAt(i));
    }
  }
  for (let i = cutPoint; i < param.length; i++) {
    if (typeof param === 'object') {
      arr2.unshift(param[i]);
    } else {
      arr2.unshift(param.charAt(i));
    }
  }
  if (arr1 < arr2) {
    arr2.pop();
  }

  // validates that both halves are the same
  let isValid = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

let arrayToConvert = [1, 0, 1, 1, 0, 1];
console.log(`Given binary array is: ${arrayToConvert}`);
console.log(`The decimal value is: ${convertBinaryToDecimal(arrayToConvert)}`);
console.log(`Is the array a palindrom: ${palindrom(arrayToConvert)}`);
