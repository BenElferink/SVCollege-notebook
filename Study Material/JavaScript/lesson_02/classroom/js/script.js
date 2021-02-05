function checkGmail() {
  let email = document.getElementById('email').value;
  let index = email.indexOf('@');
  let emailType = email.substring(index, email.length);
  if (emailType == '@gmail.com') {
    let elementIdTitle = document.getElementById('title');
    elementIdTitle.style.color = 'green';
  } else {
    let elementIdTitle = document.getElementById('title');
    elementIdTitle.style.color = 'red';
  }
  checkFirstLetter(email);
}

function checkFirstLetter(email) {
  let firstLetter = email.charAt(0);
  if (firstLetter == 'd') {
    window.location.href = './../thanks.html';
  } else {
    window.location.href = './../fail.html';
  }
}
