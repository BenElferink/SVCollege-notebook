function register(uname, email, newPass, againPass, over18){
    let trueCounter = 0;
    // verifies if 'username' is at least 2 characters
    if(uname.length >= 2){
        trueCounter++;
    } else{
        let addToName = `Must contain at least 2 characters!`;
        document.getElementById('addToName').innerText = addToName;
    }
    // verifies if 'new password' is between 6-8 characters
    if(newPass.length >= 6 && newPass.length <= 8){
        trueCounter++;
    } else{
        let addToNewPass = `Must be between 6-8 characters!`;
        document.getElementById('addToNewPass').innerText = addToNewPass;
    }
    // checks if passwords match eachother
    if(againPass == newPass){
        trueCounter++;
    } else{
        let addToAgainPass = `Passwords don't match!`;
        document.getElementById('addToAgainPass').innerText = addToAgainPass;
    }
    // checks if email has a '@'
    if(email.indexOf('@') != -1){
        trueCounter++;
    } else{
        let addToMail = `Email must contain '@'!`;
        document.getElementById('addToMail').innerText = addToMail;
    }
    // check if over 18
    if(over18 == true){
        trueCounter++;
    } else{
        let addTo18 = `You must be over 18!`;
        document.getElementById('addTo18').innerText = addTo18;
    }
    // checks if all inputs are valid
    if(trueCounter == 5){
        window.alert(`Welcome to Pornhub.com! Registration complete.`)
        window.location.replace("./success.html");
    }
}