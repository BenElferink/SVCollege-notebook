function varifyPassword() {
  // fetching required data from password
  let password = document.getElementById('pass').value;
  let passwordLength = password.length;
  let firstDivision = password.substring(0, 2);
  let secondDivision = password.substring(2, 5);
  let thirdDivision = password.substring(5, 7);

  // algorithm for the sum of 'secondDivison'
  let a, b, c;
  a = secondDivision % 10;
  b = parseInt(secondDivision / 10);
  c = parseInt(b / 10);
  b %= 10;
  secondDivision = a + b + c;

  // checking password vs requirments
  if (passwordLength == 7) {
    if (firstDivision == 'ab') {
      if (secondDivision == 9) {
        if (thirdDivision == 'cc') {
          alert('password approved');
        } else {
          alert('password denied');
        }
      } else {
        alert('password denied');
      }
    } else {
      alert('password denied');
    }
  } else {
    alert('password denied');
  }
}
