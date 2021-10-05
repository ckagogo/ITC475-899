function Greeting() {
    var date = new Date();
    var hours = date.getHours();
    var time = date.toLocaleTimeString();
    var greeting;
    

    if (hours > 12){
        greeting = "Morning";
    } else if(hours >= 12 && hours <17){
        greeting = "Afternoon";
    } else {
        greeting = "Evening";
    }

    return (
        document.write("h3", {id: "Welcome"}, " Good ", greeting, "! ", document.createElement("p", {id: "WelcomeTime"}), time));
    
}

function Icon() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();

    if ((hours >= 6 && hours < 18) || (hours = 18 && min == 0)) {
        
            document.createElement( "img" ,{
                src = "Icons/sunIcon.png",
                width: "24px",
                alt: "day",
            });
    } else {
       
            document.createElement( "img", {
                src: "Icons/moonIcon.png",
                width: "24px",
                alt: "night"
            });
    }

}


