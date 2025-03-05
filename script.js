function Togglem(){
    let html = document.getElementsByTagName('html')
    html[0].classList.toggle('theme-dark')
    document.getElementById('måne').style.display = "none"
    document.getElementById('sol').style.display = "block"
}

function Toggles(){
    let html = document.getElementsByTagName('html')
    html[0].classList.toggle('theme-dark')
    document.getElementById('måne').style.display = "block"
    document.getElementById('sol').style.display = "none"
}

//Spel

let point = 0;

function Clicker(){
    point++
    document.getElementById("score").innerHTML = "Score: " + point
}