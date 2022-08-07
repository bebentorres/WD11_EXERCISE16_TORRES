function secondsConverter(num){
    document.getElementById("secMinutes").innerHTML = num / 60;
    document.getElementById("secHours").innerHTML = num / 3600;
    document.getElementById("secDays").innerHTML = num / 86400;
}

function minutesConverter(num){
    document.getElementById("minSeconds").innerHTML = num * 60;
    document.getElementById("minHours").innerHTML = num / 60;
    document.getElementById("minDays").innerHTML = num / 1440;
}

function hoursConverter(num){
    document.getElementById("hrSeconds").innerHTML = num * 3660;
    document.getElementById("hrMinutes").innerHTML = num * 60;
    document.getElementById("hrDays").innerHTML = num / 24;
}

function daysConverter(num){
    document.getElementById("daysSeconds").innerHTML = num * 86400;
    document.getElementById("daysMinutes").innerHTML = num * 3600;
    document.getElementById("daysHours").innerHTML = num * 24;
}