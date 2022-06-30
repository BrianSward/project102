function hi1(){

    alert("hello!");
    let userPref1 = prompt("Please Enter an even number");
            let modCheck = userPref1 %= 2;
            while (modCheck !== 0){
                userPref1 = prompt("Please Enter an even number");
                modCheck = userPref1 %= 2;
            }
    document.write(modCheck);
    return userPref1;
}

function nachoRepeater(x){

}

function hi2(){

    let userPref2 = prompt("Please Enter a new userPref");
    return userPref2;
}

function autoTime(){

    var today = new Date();
    var time = today.getHours();
    var message = "Blah!"

    if (time < "6"){
        message = "Oh my its early!";
    } else if (time < "12"){
        message = "Good Morning!";
    } else if (time < "18"){
        message = "Good Afternoon!";
    } else if (time < "24"){
        message = "Good Night!";
    }
    document.write(message);
    return message;
}

function weightConverter(valNum) {
    document.getElementById("outputOunces").innerHTML = valNum / 28.35;
}
