var time = new Date();

var hour = time.getHours();

var minute = time.getMinutes();

var message = "hello";

var date = hour + ":" + minute;

var icon;

var sun = document.createElement("img");
sun.setAttribute("src", "Icons/sunIcon.png");
sun.setAttribute("width", "100");
sun.setAttribute("height", "100");
sun.setAttribute("alt", "sun.png");
sun.setAttribute("class", "center-time");

var moon = document.createElement("img");
moon.setAttribute("src", "Icons/moonIcon.png");
moon.setAttribute("width", "100");
moon.setAttribute("height", "100");
moon.setAttribute("alt", "moon.png");
moon.setAttribute("class", "center-time");

if (new Date().getHours() < 12)
{
    message = "Good Morning"
}
else if (new Date().getHours() < 17)
{
    message = "Good Afternoon";
}
else
{
    message = "Good Evening";
}

if (new Date().getHours() > 6 && new Date().getHours() < 18)
{
    document.body.appendChild(sun);
}
else
{
    document.body.appendChild(moon);
}

document.getElementById("greeting").innerHTML=message;

document.getElementById("time").innerHTML=date;
