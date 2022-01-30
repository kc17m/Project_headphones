let first = document.getElementById(firstName);
console.log(first.value);
let last = document.getElementById(lastName);
console.log(last);
let thanks = document.getElementById(thankMessage);

function showName() {
    thanks.innerHTML += 'You are almost done,  ' + firstName.value + ' ' + 'lastName' + '. Please check your inbox for our email and confirm the link provided with our message. Please also check your junk mail in case you have trouble to locate our email. Thank you!'
}


