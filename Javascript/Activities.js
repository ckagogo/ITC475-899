var option1, option2, option3, option4, option5;

var maldives = false;
var mexico = false;
var newZealand = false;
var venice = false;

hidden();

document.getElementsByTagName("maldives").onclick = function() { // maldives
    option1 = "Museums";
    option2 = "Sailing";
    option3 = "Beach";
    option4 = "Hiking";
    option5 = "Boating";
    
    document.getElementById("activity-title").innerHTML = "Activities Available for Maldives Resort";
    uncheck();
    hidden();
    displayOptions(6)
};

document.getElementsByTagName("mexico").onclick = function() { // mexico
    option1 = "Parks and Rec";
    option2 = "Beaches";
    option3 = "Boating";
    option4 = "Snorkeling";
    option5 = "";
    document.getElementById("activity-title").innerHTML = "Activities Available for Mexico Resort";
    uncheck();
    hidden();
    displayOptions(5);
};

document.getElementsByTagName("newzealand").onclick = function() { // new-zealand
    option1 = "City Tour";
    option2 = "Sports";
    option3 = "Cycling";
    option4 = "Museums";
    option5 = "Boating";
    document.getElementById("activity-title").innerHTML = "Activities Available for New Zealand Trek";
    uncheck();
    hidden();
    displayOptions(6);
};

document.getElementsByTagName("venice").onclick = function() { // Venice
    option1 = "Museums";
    option2 = "Theatre";
    option3 = "Parks and Rec";
    option4 = "City Tours";
    option5 = "";
    document.getElementById("activity-title").innerHTML = "Activities Available for Venice Italy";
    uncheck();
    hidden();
    displayOptions(5);
};

document.getElementById("reset").onclick = function() {
    option1 = "";
    option2 = "";
    option3 = "";
    option4 = "";
    option5 = "";
    hidden();
    uncheck();
    displayOptions(0);
};

function displayOptions(num) 
{
    
    document.getElementById("opt1label").innerHTML = option1;
    document.getElementById("opt2label").innerHTML = option2;
    document.getElementById("opt3label").innerHTML = option3;
    document.getElementById("opt4label").innerHTML = option4;
    document.getElementById("opt5label").innerHTML = option5;

    var check;
    for (var i = 1; i < num; i++)
    {
        check = "option" + String(i);
        document.getElementById(check).style.visibility = "visible";
    }
    document.getElementById("submit").style.visibility = "visible";
}

function uncheck()
{
    var option;
    for (var i = 1; i < 6; i++)
    {
        option = "option" + String(i);
        let inputs = document.getElementById(option);
        inputs.checked = false;
    }
}

function hidden()
{
    var check;
    for (var i = 1; i < 6; i++)
    {
        check = "option" + String(i);
        document.getElementById(check).style.visibility = "hidden";
    }
    document.getElementById("submit").style.visibility = "hidden";  
}