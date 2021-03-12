var time = 0;
var seconds = 0;
var minutes = 0;
var hours = 0 ;
var secondHand = document.querySelector('.second');
var minuteHand = document.querySelector('.minute');
var hourHand = document.querySelector('.hour');




//fetch current time data
function currentTime() {
    time = new Date();
    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getHours();
    console.log(seconds + 'seconds ' + minutes + 'minutes ' + hours + 'hours');
};

//set clock to current time
function initialTime() {
    var initialMinuteDegrees = ((minutes/60)*360)+90;
    minuteHand.style.transform = `rotate(${initialMinuteDegrees}deg)`;
    var initialSecondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${initialSecondDegrees}deg)`;
    //find solution to hour hand not moving until next hour?
    var initialHourdegrees = ((hours/12)*360)+ 90;
    hourHand.style.transform = `rotate(${initialHourdegrees}deg)`;
};

//function to fetch time and set clock
function startup() {
    initialTime();
    currentTime();
};

//call function every second
setInterval(startup, 1000);

