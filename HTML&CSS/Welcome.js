function Greeting() {
    var date = new Date();
    var hours = date.getHours();
    var time = date.toLocaleTimeString();
    let timeOfDay;

    if (hours < 12) {
        document.write("Morning");
    } else if (hours >= 12 && hours < 17) {
        document.write("Afternoon");
    } else {
        document.write("Evening");
    }
    
}

function Icon() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();

    if ((hours >= 6 && hours < 18) || (hours = 18 && min == 0)) {
        
            document.createElement("img", {
                src: "/Icons/sunIcon.png",
                width: "24px",
                alt: "day",
            });
    } else {
       
            document.createElement("img", {
                src: "/Icons/MoonIcon.png",
                width: "24px",
                alt: "night"
            });
    }

}


