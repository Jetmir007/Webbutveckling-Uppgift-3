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
let add = 1;
let price = [10, 100, 1000, 10000, 100, 1000, 10000, 100000];


function Clicker(){
    point += add
    Supdate()
}

function AddScore(){
    if(point>=price[0]){
        add++
        point -= price[0]
        price[0] *= 1.1
    }
    Pupdate('add', 0)
    Supdate()
    SCupdate()
}

function Multiplier(){
    if(point>=price[1]){
        add *= 1.1
        point -= price[1]
        price[1] *= 1.1
    }
    Pupdate('mult', 1)
    Supdate()
    SCupdate()
}

function AddScore10(){
    if(point>=price[4]){
        add += 10
        point -= price[4]
        price[4] *= 1.1
    }
    Pupdate('add10', 4)
    Supdate()
    SCupdate()
}

function Multiplier10(){
    if(point>=price[5]){
        multiplier *= 2
        point -= price[5]
        price[5] *= 1.1
    }
    Pupdate('mult10', 5)
    Supdate()
    SCupdate()
}

function Supdate(){
    document.getElementById("score").innerHTML = "Score: " + Math.floor(point*10)/10
}

function Pupdate(id, arrnums){
    document.getElementById(id).innerHTML = Math.floor(price[arrnums]*10)/10 + " Score"
}

function SCupdate(){
    document.getElementById('s/c').innerHTML = "Score/Click: " + Math.floor(add*10)/10
}
