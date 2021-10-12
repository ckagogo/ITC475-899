const form = document.getElementById("travelForm");
const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const phone = document.getElementById("phone").value;
const adult = document.getElementById("adults").value;
const child = document.getElementById("child").value;

var text;

function validateForm() {
    if (!isNaN(fname))
    {
        text = "Please enter a valid name";
        document.getElementById("valid").innerHTML = text;
        return false;
    }

    else if (!isNaN(lname))
    {
        text = "Please enter a valid name";
        document.getElementById("valid").innerHTML = text;
        return false;
    }

    else if (isNaN(phone))
    {
        text = "Please enter a valid phone number";
        document.getElementById("valid").innerHTML = text;
        return false;
    }

    else if (adult < 0)
    {
        text = "Please enter a valid number of adults";
        document.getElementById("valid").innerHTML = text;
        return false;
    }

    else if (child < 0)
    {
        text = "Please enter a valid number of children";
        document.getElementById("valid").innerHTML = text;
        return false;
    }

    else
    {
        return true;
    }
}