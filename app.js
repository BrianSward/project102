alert("Pop ups! What year is it?");

var today = new Date();
var time = today.getHours();

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