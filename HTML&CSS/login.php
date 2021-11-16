<?php
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: admin.php");
    exit;
}
 
$servername='localhost';
$username='root';
$password='';
$dbname = "db_contact";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
if($_SERVER["REQUEST_METHOD"] = "POST"){
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    $username = $_POST['username'] ??'';
    $password = $_POST['password'] ?? '';

    if ($result !== false && $result->num_rows > 0) {
        $found = false;
            while($row = $result->fetch_assoc()) {
                if($row["username"] == $username){
                    if($row["password"] == $password){
                        session_start();
                        $_SESSION["loggedin"] = true;     
                        header("location: admin.php");
                        mysqli_close($conn);
                    } else {
                        echo '<script>alert("Wrong username or password")</script>';
                        $found = true;
                    }
                }
            }
            if(!$found){
                echo '<script>alert("That Username doesn\'t exist.")</script>';
            }
    }
    
}
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
   

    <!-- Footer HTML -->
    <footer> 
        <p>Copyright Protected. All rights reserved.</p><br>
        <p>Mega Travels</p>
        <p>mega@travels.com</p>
    </footer> 

</body>

</html>