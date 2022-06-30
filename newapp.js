function alloAllo(){

    alert("A PopUp! What year is it?");
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
