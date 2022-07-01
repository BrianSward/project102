let userPref1;
let userPref3;

function hi1(){

    alert("hello!");
            userPref1 = prompt("Please Enter a positive even number, greater than zero");
            userPref3 = userPref1
            let modCheck = userPref1 %= 2;
            while (modCheck !== 0){
                userPref1 = prompt("That's not even! Please Enter a positive even number, greater than zero");
                modCheck = userPref1 %= 2;
            }
        return userPref1;
}

function nachoRepeater(){
    for (let i = 1; i <= userPref3; i++){

        document.write("<img src='https://www.fillmurray.com/g/140/100'>"+i);
    }
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
