/* Counting down */
var countDownTime = new Date("Jan , 2023 24:00:00").getTime();

var x = setInterval(function () {
    // get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and count down date
    var distance = countDownTime - now;

    // Time calculators for days , hours , minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // if(distance < 0) {
    //     clearInterval(x);
    //     document.getElementById('')
    // }
});

