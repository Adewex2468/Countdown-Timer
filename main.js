let days = document.getElementById("dd");
let hours = document.getElementById("hr");
let minutes = document.getElementById("mm");
let seconds = document.getElementById("ss");

function showCountDown(){
    let now = new Date();
    days = now.getDate();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds= now.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }else{
        hours = hours;
    }
    if(minutes < 10){
        minutes= "0" + minutes;
    }else{
        minutes = minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }else{
        seconds = seconds;
    }
    if(days < 10){
        days = "0" + days;
    }else{
        days = days;
    }
    
    document.getElementById("hr").innerHTML = hours;
    document.getElementById("mm").innerHTML = minutes;
    document.getElementById("ss").innerHTML = seconds;
    document.getElementById("dd").innerHTML = days;
}
showCountDown();
setInterval(showCountDown, 1000);
