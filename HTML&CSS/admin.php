<!DOCTYPE html>

<?php
$db = mysqli_connect('localhost', 'root', '', 'db_contact') or die('error connecting to database');
$result = mysqli_query($db, "SELECT * FROM tbl_contact");
?>

<html>
    <head>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
    </head>

    <body>
    <div id="Header">
        <img src= "Images/mega travel logo.png" width="420px" height="290px">
    </div>
    <div class="header_seperator"></div>
    

    <nav>
                    <ul>
                        <li><a href="Index.html">Home</a></li>
                        <li><a href="About Us.html">About Us</a></li>
                        <li><a href="Contact Agent.html">Contact Agent</a></li>
                    </ul>
     </nav>


    <!-- PHP -->
    <?php
    if (mysqli_num_rows($result) > 0) {
    ?>
        <table>

            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Number of Adults</td>
                <td>Number of Children</td>
                <td>Trip Date</td>
                <td>Destination</td>
                <td>ID</td>
            </tr>

            <?php
            $i = 0;
            while ($row = mysqli_fetch_array($result)) {
            ?>
                <tr>
                    <td><?php echo $row["fName"]; ?></td>
                    <td><?php echo $row["lName"]; ?></td>
                    <td><?php echo $row["eMail"]; ?></td>
                    <td><?php echo $row["phoneNumber"]; ?></td>
                    <td><?php echo $row["adultNumber"]; ?></td>
                    <td><?php echo $row["childNumber"]; ?></td>
                    <td><?php echo $row["tripDate"]; ?></td>
                    <td><?php echo $row["destinationName"]; ?></td>
                    <td><?php echo $row["id"]; ?></td>
                </tr>
            <?php
                $i++;
            }
            ?>
        </table>
    <?php
    } else {
        echo "No result found";
    }
    ?>

    <!-- Footer HTML -->
    <footer> 
        <p>Copyright Protected. All rights reserved.</p><br>
        <p>Mega Travels</p>
        <p>mega@travels.com</p>
    </footer> 


    </body>


</html>