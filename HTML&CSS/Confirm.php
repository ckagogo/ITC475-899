<!DOCTYPE html>
    <?php
    $db = mysqli_connect('localhost', 'root', '', 'db_contact','3306') or die('error connecting to database');
    ?>

<html>

<head>
<link rel="stylesheet" type="text/css" href="styles.css"/>
</head>

<body>
    <!-- Header HTML -->
    <div id="Header">
    <img src= "Images/mega travel logo.png" width="420px" height="290px">
    </div>
    <div class="header_seperator"></div>
    

    <!-- Nav Links HTML -->
    <nav>
                    <ul>
                        <li><a href="Index.html">Home</a></li>
                        <li><a href="About Us.html">About Us</a></li>
                        <li><a href="Contact Agent.html">Contact Agent</a></li>
                    </ul>
                </nav>


    <!-- PHP -->
    <?php
    $firstName = $lastName = $email = $pNumber = $numAdult = $numChild = $date = $destination = $activity1 =
        $activity2 = $activity3 = $activity4 = $activity5 = "";

    $firstName = $_POST["fname"] ??'';
    $lastName = $_POST["lname"] ??'';
    $email = $_POST["email"] ??'';
    $pNumber = $_POST["phone"] ??'';
    $numAdult = $_POST["adults"] ??'';
    $numChild = $_POST["child"] ??'';
    $date = $_POST["date"] ??'';
    $destination = $_POST["destination"] ??'';

    $sql = "INSERT INTO `tbl_contact` (`fName`, `lName`, `eMail`, `phoneNumber`, `adultNumber`, `childNumber`, `tripDate`, `destinationName`) 
                                VALUES ('$firstName', '$lastName', '$email', '$pNumber', '$numAdult', '$numChild', '$date', '$destination')";
    $rs = mysqli_query($db, $sql);

    ?>
    
    <div id="Thank">
        <br> <p>Thank you for submitting your travel agent contact request! Here is the information you submitted:</p> <br><br>
    </div>

    <!-- Table HTML -->
    <div id="Table">
        
        <table>
            <tr>
                <td>First Name:</td>
                <td><?php echo $firstName ?></td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td><?php echo $lastName ?></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><?php echo $email ?></td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td><?php echo $pNumber ?></td>
            </tr>
            <tr>
                <td>Number of Adults:</td>
                <td><?php echo $numAdult ?></td>
            </tr>
            <tr>
                <td>Number of Children:</td>
                <td><?php echo $numChild ?></td>
            </tr>
            <tr>
                <td>Trip Date:</td>
                <td><?php echo $date ?></td>
            </tr>
            <tr>
                <td>Destination:</td>
                <td><?php echo $destination ?></td>
            </tr>
        </table>
    </div>

    <div id="Thank">
        <br><br> <p>An agent will be in touch with you soon!</p>
    </div>

    <!-- Footer HTML -->
    <footer> 
        <p>Copyright Protected. All rights reserved.</p><br>
        <p>Mega Travels</p>
        <p>mega@travels.com</p>
    </footer> 

</body>

</html>