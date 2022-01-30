let first = document.getElementById("firstName");
console.log(first.value);
let last = document.getElementById("lastName");
console.log(last);
let country = document.getElementById("country")
let thanks = document.getElementById("thankMessage");

function showName() {
    console.log("test");
    thanks.innerHTML = 'Thank you ' + first.value + ' ' + last.value + ', your are almost done. Please open your inbox and confirm the link provided. In case you cannot find our message please also check your junk mail. We are happy to keep you updated on all major events in ' + country.value + '.';
}


