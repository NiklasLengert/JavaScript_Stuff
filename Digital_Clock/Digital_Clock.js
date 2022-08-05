function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10)


function displayTimePST(){
    let dateTime = new Date();
    let hrs = dateTime.getHours() - 9;
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('sessionPST');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hoursPST').innerHTML = hrs;
    document.getElementById('minutesPST').innerHTML = min;
    document.getElementById('secondsPST').innerHTML = sec;
}

setInterval(displayTimePST, 10)

function displayTimeUTC(){
    let dateTime = new Date();
    let hrs = dateTime.getHours() - 2;
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('sessionUTC');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hoursUTC').innerHTML = hrs;
    document.getElementById('minutesUTC').innerHTML = min;
    document.getElementById('secondsUTC').innerHTML = sec;
}

setInterval(displayTimeUTC, 10)