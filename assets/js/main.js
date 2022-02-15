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


/* Classification */
const navBestSeller = document.querySelector('.js-nav-best-sellers');
const bestSeller = document.querySelector('.js-best-seller');

const navNewArrival = document.querySelector('.js-nav-new-arrival');
const newArrival = document.querySelector('.js-new-arrival');

const navTopRated = document.querySelector('.js-nav-top-rate');
const topRated = document.querySelector('.js-top-rate');

navBestSeller.addEventListener('click' , function() {
    navBestSeller.classList.add('active');
    bestSeller.classList.remove('non-active');
    newArrival.classList.add('non-active');
    navNewArrival.classList.remove('active');
    topRated.classList.add('non-active');
    navTopRated.classList.remove('active');
});

navNewArrival.addEventListener('click' , function() {
    navNewArrival.classList.add('active');
    newArrival.classList.remove('non-active');
    bestSeller.classList.add('non-active');
    navBestSeller.classList.remove('active');
    topRated.classList.add('non-active');
    navTopRated.classList.remove('active');
});

navTopRated.addEventListener('click' , function() {
    navTopRated.classList.add('active');
    topRated.classList.remove('non-active');
    bestSeller.classList.add('non-active');
    navBestSeller.classList.remove('active');
    newArrival.classList.add('non-active');
    navNewArrival.classList.remove('active');
});



