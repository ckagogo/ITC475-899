var p1slot = document.getElementById("player1slot");
var p2slot = document.getElementById("player2slot");
p1slot.style.left = "15px";
p2slot.style.left = "15px";

//let stoplightBTN = document.getElementById("stoplightBtn");
let stoplightIMG = document.getElementById("stoplight");
stoplightIMG.width = 125;
stoplightIMG.height = 50;

let winner = 0;
let pageTitle = document.getElementById("pageTitle");
let winnerBox = document.getElementById("winnerBox");
winnerBox.src = "Images/Winner.png";
winnerBox.width = 130;
winnerBox.height = 50;

//select racer 1
//----------------------------------------------------------------------------------------
function setP1()
{
    let r1selected = document.getElementById("r1select"); 
    let r1 = r1selected.options[r1selected.selectedIndex].text;

    var Racer1IMG = document.createElement("img");

    if(r1 == "Sonic")
    {
        Racer1IMG.src = "Images/sonic.jpg";
        Racer1IMG.height = 50;
        Racer1IMG.width = 130;
    } 
    else if(r1 == "SpeedyG")
    {
        Racer1IMG.src = "Images/SpeedyG.jpg";
        Racer1IMG.height = 50;
        Racer1IMG.width = 130;
    }
    else if(r1 == "RR")
    {
        Racer1IMG.src = "Images/RR.jpg";
        Racer1IMG.height = 50;
        Racer1IMG.width = 130;
    }
    else if(r1 == "Flash")
    {
        Racer1IMG.src = "Images/Flash.jpg";
        Racer1IMG.height = 50;
        Racer1IMG.width = 130;
    }
    else
    {
        Racer1IMG.src = "Images/Winner.png";
        Racer1IMG.height = 50;
        Racer1IMG.width = 130;
    }

    p1slot.appendChild(Racer1IMG);
}
//select racer 2
//----------------------------------------------------------------------------------------
function setP2()
{
    let r2selected = document.getElementById("r2select");
    let r2 = r2selected.options[r2selected.selectedIndex].text;

    var Racer2IMG = document.createElement("img");

    if(r2 == "Sonic")
    {
        Racer2IMG.src = "Images/sonic.jpg";
        Racer2IMG.height = 50;
        Racer2IMG.width = 130;
    } 
    else if(r2 == "SpeedyG")
    {
        Racer2IMG.src = "Images/SpeedyG.jpg";
        Racer2IMG.height = 50;
        Racer2IMG.width = 130;
    }
    else if(r2 == "RR")
    {
        Racer2IMG.src = "Images/RR.jpg";
        Racer2IMG.height = 50;
        Racer2IMG.width = 130;
    }
    else if(r2 == "Flash")
    {
        Racer2IMG.src = "Images/Flash.jpg";
        Racer2IMG.height = 50;
        Racer2IMG.width = 130;
    }
    else
    {
        Racer2IMG.src = "Images/Winner.png";
        Racer2IMG.height = 50;
        Racer2IMG.width = 130;
    }

    p1slot.appendChild(Racer2IMG);
}

//start the race, move the cars
//----------------------------------------------------------------------------------------
function race()
{
    pageTitle.innerText = "AND THEY'RE OFF!";

    stoplightIMG.src = "Images/greenLight.png";
    stoplightIMG.width = 125;
    stoplightIMG.height = 50;

    function tick()
    {
        let player1Speed = Math.floor(Math.random() * 20) * 0.001;
        let player2Speed = Math.floor(Math.random() * 20) * 0.001;

        p1slot.style.left = (parseFloat(p1slot.style.left)/100 + player1Speed).toLocaleString("en", {style: "percent"});
        p2slot.style.left = (parseFloat(p2slot.style.left)/100 + player2Speed).toLocaleString("en", {style: "percent"});

        if(parseFloat(p1slot.style.left) > 90)
        {
            winner = 1;
        }
        if(parseFloat(p2slot.style.left) > 90)
        {
           winner = 2;
        }

        if(winner != 0)
        {
            clearInterval(timer);
            callWinner();
        }
    }

    let timer = setInterval(tick, 15);
}

//announce the winner, end the race
//----------------------------------------------------------------------------------------
function callWinner()
{
    stoplightIMG.src = "Images/redLight.png";
    stoplightIMG.width = 125;
    stoplightIMG.height = 50;

    pageTitle.innerText = "AND THE WINNER IS... RACER NUMBER " + winner + "!";

    var winnerIMG = document.createElement("img");

    if(winner == 1)
    {
        let r1selected = document.getElementById("r1select"); 
        let r1 = r1selected.options[r1selected.selectedIndex].text; 

        if(r1 == "Sonic")
        {
            winnerIMG.src = "Images/sonic.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        } 
        else if(r1 == "SpeedyG")
        {
            winnerIMG.src = "Images/SpeedyG.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r1 == "RR")
        {
            winnerIMG.src = "Images/RR.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r1 == "Flash")
        {
            winnerIMG.src = "Images/Flash.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else
        {
            winnerIMG.src = "Images/Winner.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
    
        winnerBox.appendChild(winnerIMG);
    }

    if (winner == 2)
    {
        let r2selected = document.getElementById("r2select"); 
        let r2 = r2selected.options[r2selected.selectedIndex].text; 

       
        if(r2 == "Sonic")
        {
            winnerIMG.src = "Images/sonic.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        } 
        else if(r2 == "SpeedyG")
        {
            winnerIMG.src = "Images/SpeedyG.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r2 == "RR")
        {
            winnerIMG.src = "Images/RR.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r2 == "Flash")
        {
            winnerIMG.src = "Images/Flash.jpg";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else
        {
            winnerIMG.src = "Images/Winner.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
    
        winnerBox.appendChild(winnerIMG);
    }
}