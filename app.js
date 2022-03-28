function welcomeUser() {
    var welcome = alert("Hello and Welcome to My Temperature Converter program.");
}

function nam() {
    var name = prompt("Please Enter Your Name:");
    return name
}

function greet(x) {
    alert(`Hello ${x}.`)
}

function temp() {
    do {
        var tempNum = prompt("Please enter your temperature.");
    } while( isNaN(tempNum) == true);
    console.log(`User's temperature is ${tempNum}`);
    return tempNum
}

function convertQuestion() {
    var choiceConvert = prompt("Would you like to convert F to C or C to F?");
    return choiceConvert
}

function mathFtoC() {
    var cc = convertQuestion()
    var tn = temp()
    if (cc == "F to C") {
        var C = (((tn - 32 ) * 5 ) / 9 );
        console.log(`User's temp was ${tn}F. Now the number is ${C}C`);
    }
}

function mathCtoF() {
    var cc = convertQuestion()
    var tn = temp()
    if (cc == "C to F") {
        var F = (((tn * 9 ) / 5) + 32 );
        console.log(`User's temp was ${tn}C. Now the number is ${F}F.`);
    } 
}


welcomeUser()
greet(nam())
mathFtoC()
mathCtoF()


