// Answer to Q1
function palindrom(num){
    let cutPoint = parseInt(num.length/2);
    let arr1 = [];
    let arr2 = [];
    // creates 2 equal halves of input number
    for(let i=0; i < cutPoint; i++){
        arr1.push(parseInt(num.charAt(i)));
    } for(let i=cutPoint; i < num.length; i++){
        arr2.unshift(parseInt(num.charAt(i)));
    } if(arr1 < arr2){
        arr2.pop();
    }
    // validates that both halves are the same
    for(let i=0; i < arr1.length; i++){
        if(arr1[i] == arr2[i]){
            document.getElementById('q1-addTo').innerText = 'TRUE';
            document.getElementById('q1-addTo').style.color = 'green';
            document.getElementById('q1-addTo').style.fontWeight = 'bold';
        } else{
            document.getElementById('q1-addTo').innerText = 'FALSE';
            document.getElementById('q1-addTo').style.color = 'red';
            document.getElementById('q1-addTo').style.fontWeight = 'bold';
        }
    }
}

// Answer to Q2
function checkEmail(email){
    let count = 0;
    // if over 5 characters
    if(email.length > 5){
        // if @ exists
        let shtrudel = email.indexOf('@');
        if(shtrudel != -1){
            // if letter before @ exists
            if(
                (email.charCodeAt(shtrudel-1) >= 65 && email.charCodeAt(shtrudel-1) <= 90)
                ||
                (email.charCodeAt(shtrudel-1) >= 97 && email.charCodeAt(shtrudel-1) <= 122)){
                    count++;
            } else{
                reusltEmail(false);
                return;
            }
            // if letter after @ exists
            if(
                (email.charCodeAt(shtrudel+1) >= 65 && email.charCodeAt(shtrudel+1) <= 90)
                ||
                (email.charCodeAt(shtrudel-1) >= 97 && email.charCodeAt(shtrudel-1) <= 122)){
                    count++;
            } else{
                reusltEmail(false);
                return;
            }
            // if point after @ exists
            let fromShtrudel = email.slice(shtrudel);
            let point = fromShtrudel.indexOf('.');
            if(point != -1){
                let fromPoint = fromShtrudel.slice(point);
                // checks characters of ending
                if(fromPoint.length > 2){
                    for(let i=1; i < fromPoint.length; i++){
                        if(
                            (fromPoint.charCodeAt(i) >= 65 && fromPoint.charCodeAt(i) <= 90)
                            ||
                            (fromPoint.charCodeAt(i) >= 97 && fromPoint.charCodeAt(i) <= 122)
                            ||
                            fromPoint.charCodeAt(i) == 45){
                                // SUCCESS!!
                                if(count == 2){
                                    reusltEmail(true);
                                }
                        } else{
                            reusltEmail(false);
                            return;
                        }
                    }
                } else{
                    reusltEmail(false);
                    return;
                }
            } else{
                reusltEmail(false);
                return;
            }
        } else{
            reusltEmail(false);
            return;
        }
    } else{
        reusltEmail(false);
        return;
    }
}
// displays result
function reusltEmail(data){
    if(data == true){
        document.getElementById('q2-addTo').innerText = 'VALID';
        document.getElementById('q2-addTo').style.color = 'green';
        document.getElementById('q2-addTo').style.fontWeight = 'bold';
    } else if(data == false){
        document.getElementById('q2-addTo').innerText = 'INVALID';
        document.getElementById('q2-addTo').style.color = 'red';
        document.getElementById('q2-addTo').style.fontWeight = 'bold';
    }
}

// Answer to Q3
function addDays(num){
    // get date-data
    let day = document.getElementById('q3-day').value;
    let month = document.getElementById('q3-month').value;
    let year = document.getElementById('q3-year').value;
    // add inserted days to date
    for(let i=0; i < num; i++){
        day++;
        if(day > 30){
            month++;
            day=1;
        }
        if(month > 12){
            year++;
            month=1;
        }
    }
    // display new date
    window.alert(`After adding ${num} days, the date is: ${day}/${month}/${year}`);
}

// Answer to Q4
function createSquare(num){
    if(num >= 3 && num <= 10){
        console.log(`note: enable "show timestamp" to display properly.`)
        // loop per row
        for(let r=1; r <= num; r++){
            let rowArray = [];
            // loop per index of row
            for(let i=0; i < num; i++){
                // create content
                if(r == 1 || r == num){
                    rowArray.push('*');
                } else if(i == 0 || i == (num-1)){
                    rowArray.push('*');
                } else{
                    rowArray.push(' ');
                }
            }
            // display content (log note applies here)
            let rowDisplay = '';
            for(let i=0; i < num; i++){
                rowDisplay += rowArray[i];
            }
            console.log(rowDisplay);
        }
    }
}

// Answer to Q5
function createTriangle(num){
    if (num%2 != 0) {
        // loop per row
        for (let r = 0; r < num; r++) {
            let rowArray = [];
            // loop per index
            for (let i = 0; i < num; i++) {
                // create content
                if (r <= parseInt(num/2)) {
                    // if (r == 0) {
                    //     rowArray.push('*');
                    // } else if (i == r) {
                    //     rowArray.push('*');
                    // } else if (i == ((num-1)-r)) {
                    //     rowArray.push('*');
                    // } else {
                    //     rowArray.push(' ');
                    // }
                    if (i >= r && i <= (num-1)-r) {
                        rowArray.push('*');
                    } else {
                        rowArray.push(' ');
                    }
                }
            }
            // display content
            if ( r <= parseInt(num/2)) {
                let rowDisplay = '';
            for (let i = 0; i < num; i++) {
                rowDisplay += rowArray[i];
            }
            console.log(rowDisplay);
            }
            
        }
    } else {
        console.log(`!! Number must be odd !!`);
    }
}