// Set the date we're counting down to
var countDownDate = new Date("Jan 8, 2018 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    var preday = -10;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("day-digit").innerHTML = days;
    document.getElementById("day-name").innerHTML = "DAYS";

    document.getElementById("hour-digit").innerHTML = hours;
    document.getElementById("hour-name").innerHTML = "HOURS";
    
    document.getElementById("minute-digit").innerHTML = minutes;
    document.getElementById("minute-name").innerHTML = "MINUTES";

    document.getElementById("second-digit").innerHTML = seconds;
    document.getElementById("second-name").innerHTML = "SECONDS";

	document.getElementById("small").innerHTML = "ICO STARTS IN :  " + (days - preday) + "  DAYS  "+hours+" : "+minutes+" : "+seconds;
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
