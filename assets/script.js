let min = 0
let sec = 0
let hou = 0
let intervalo;

function twoDigit(digit){
    if(digit< 10){
        return ('0'+digit)
    }else{
        return(digit)
    }
}


function start(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    }

    document.getElementById('pTime').innerText = twoDigit(hou) + ':' + twoDigit(min) + ':' + twoDigit(sec)
}

function iniciarTime(){
     intervalo = setInterval(start,1000)
     
}

function pausarTime(){
    clearInterval(intervalo)
}

function zerarTime(){
    clearInterval(intervalo)
    sec = 0
    min = 0
    hou = 0
    document.getElementById('pTime').innerText = '00' + ':' + '00' + ':' + '00'
}
