function Time()
{
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
    let t = setTimeout(function(){ Time() }, 1000);
}

function updateTime(k) 
{
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}

function Confirm()
{
    let fds = document.getElementById("frontDoorStart").value;
    let fde = document.getElementById("frontDoorEnd").value;

    let bds = document.getElementById("backDoorStart").value;
    let bde = document.getElementById("backDoorEnd").value;

    let gds = document.getElementById("garageDoorStart").value;
    let gde = document.getElementById("garageDoorEnd").value;

    let drls = document.getElementById("drLightStart").value;
    let drle = document.getElementById("drLightEnd").value;

    let lrls = document.getElementById("lrLampStart").value;
    let lrle = document.getElementById("lrLampEnd").value;

    let b1ls = document.getElementById("b1LampStart").value;
    let b1le = document.getElementById("b1LampEnd").value;

    let b2ls = document.getElementById("b2LampStart").value;
    let b2le = document.getElementById("b2LampEnd").value;

    let kfs = document.getElementById("kitchFanStart").value;
    let kfe = document.getElementById("kitchFanEnd").value;

    let bfs = document.getElementById("bathFanStart").value;
    let bfe = document.getElementById("bathFanEnd").value;

    let ws = document.getElementById("washerStart").value;
    let we = document.getElementById("washerEnd").value;

    let ds = document.getElementById("dryerStart").value;
    let de = document.getElementById("dryerEnd").value;

    
    let arrayData = [fds, fde, bds, bde, gds, gde, drls, drle, lrls, lrle, 
       b1ls, b1le, b2ls, b2le, kfs, kfe, bfs, bfe, ws, we, ds, de];

    window.localStorage.setItem("smartTimings", arrayData);
}

function statusIcons()
{
    let timings = window.localStorage.getItem("smartTimings");
    let tar = timings.split(',');

    var imgFD = document.createElement("img");
    var imgBD = document.createElement("img");
    var imgGD = document.createElement("img");
    var imgDRL = document.createElement("img");
    var imgLRL = document.createElement("img");
    var imgB1L = document.createElement("img");
    var imgB2L = document.createElement("img");
    var imgKF = document.createElement("img");
    var imgBF = document.createElement("img");
    var imgW = document.createElement("img");
    var imgD = document.createElement("img");

    let d = new Date;
    let hour = d.getHours();

// FRONT DOOR -----------------------------------------------------------------
    if(tar[0] <= hour < tar[1])
    {
        imgFD.src= "Images/FrontDoorUnlocked.jpg";
    }
    else
    {
        imgFD.src= "Images/DoorLocked.png";
    }

    var front = document.getElementById("front");
    front.appendChild(imgFD);

// BACK DOOR -----------------------------------------------------------------
    if(tar[2] <= hour < tar[3])
    {
        imgBD.src= "Images/BackDoorUnlocked.webp";
    }
    else
    {
        imgBD.src= "Images/DoorLocked.png";
    }

    var front = document.getElementById("back");
    front.appendChild(imgBD);

// GARAGE DOOR -----------------------------------------------------------------
    if(tar[4] <= hour < tar[5])
    {
        imgGD.src= "Images/GarageOpen.png";
    }
    else
    {
        imgGD.src= "Images/GarageClose.png";
    }

    var front = document.getElementById("garage");
    front.appendChild(imgGD);

// DINING ROOM LIGHT -----------------------------------------------------------------
    if(tar[6] <= hour < tar[7])
    {
        imgDRL.src= "Images/LightOn.jpg";
    }
    else
    {
        imgDRL.src= "Images/LightOff.jpg";
    }

    var front = document.getElementById("dining");
    front.appendChild(imgDRL);

// LIVING ROOM LAMP -----------------------------------------------------------------
    if(tar[8] <= hour < tar[9])
    {
        imgLRL.src= "Images/LightOn1.jpg";
    }
    else
    {
        imgLRL.src= "Images/LightOff.jpg";
    }

    var front = document.getElementById("living");
    front.appendChild(imgLRL);

// 1ST BEDROOM LAMP -----------------------------------------------------------------
    if(tar[10] <= hour < tar[11])
    {
        imgB1L.src= "Images/LightOn2.png";
    }
    else
    {
        imgB1L.src= "Images/LightOff.jpg";
    }

    var front = document.getElementById("bed1");
    front.appendChild(imgB1L);

// 2ND BEDROOM LAMP -----------------------------------------------------------------
    if(tar[12] <= hour < tar[13])
    {
        imgB2L.src= "Images/LightOn3.jpg";
    }
    else
    {
        imgB2L.src= "Images/LightOff.jpg";
    }

    var front = document.getElementById("bed2");
    front.appendChild(imgB2L);

// KITCHEN FAN -----------------------------------------------------------------
    if(tar[14] <= hour < tar[15])
    {
        imgKF.src= "Images/KitchenfanOn.png";
    }
    else
    {
        imgKF.src= "Images/FanOff.png";
    }

    var front = document.getElementById("kitchen");
    front.appendChild(imgKF);

// BATHROOM FAN -----------------------------------------------------------------
    if(tar[16] <= hour < tar[17])
    {
        imgBF.src= "Images/BathFanOn.png";
    }
    else
    {
        imgBF.src= "Images/FanOff.png";
    }

    var front = document.getElementById("bath");
    front.appendChild(imgBF);

// WASHER -----------------------------------------------------------------
    if(tar[18] <= hour < tar[19])
    {
        imgW.src= "Images/WasherOn.jpg";
    }
    else
    {
        imgW.src= "Images/WashDryOff.png";
    }

    var front = document.getElementById("washer");
    front.appendChild(imgW);

// DRYER -----------------------------------------------------------------
    if(tar[20] <= hour < tar[21])
    {
        imgD.src= "Images/DryerOn.webp";
    }
    else
    {
        imgD.src= "Images/WashDryOff.png";
    }

    var front = document.getElementById("dryer");
    front.appendChild(imgD);
}

function Run()
{
    Time();
    statusIcons();
}