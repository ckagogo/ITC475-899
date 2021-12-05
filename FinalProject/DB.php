<html>
 

<head>
    <title>Search Speedster Racers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<style>
    body{background-color: #4f6634;}
    header{background-color: white; width: 100%;}
    nav{font-family: Arial, Helvetica, sans-serif; height: 6%;}
    ul{display: flex; list-style: none; padding: 15px;}
    #title{color: #a61919; text-decoration: none; font-weight: bold; 
        font-size: 120%; margin-top: -0.8%;}
    a{color: #a61919; text-decoration: none; font-weight: bold; font-size: 120%;
        position: relative; top: 0; transition: top 0.5s, color 0.5s;}
    a:hover{color: black; text-decoration: none; top: -3px;}
    
    h1{font-family: Arial, Helvetica, sans-serif; color: white; padding: 1.5%; font-size: 160%;}
    .statsDisplay{background-color: white; color: black; padding: 1.5%;
        font-family: Arial, Helvetica, sans-serif; font-weight: normal;
        font-size: 95%; border: black; border-width: thick; 
        border-style: double; position: relative;}
    table{width: 100%;}
    th, td{padding-top: 0.5%; padding-bottom: 0.5%; padding-left: 0.5%;}

    form{margin-top: 5%;}
    label{font-family: Arial, Helvetica, sans-serif; color: white; font-size:140%;
        padding: 1%; margin-right: 2%; font-weight: bold;}
    .search{height: 30px; width: 30%; margin-right: 2%;}
    #submit{height: 30px; background-color: white; color:#a61919; padding: 0.5%;}
</style>

<body>
<header>
        <nav style="margin:auto">
            <ul style="display:table; margin: auto;"> 
                <a href="race.html">Speedster RACERS</a>
            </ul>        
        </nav>
    </header>

    <h1>Comparing Racer Stats</h1>

    <p class="statsDisplay"><?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "demoDB";

    $searchR1 = $_POST["searchR1"];
    $searchR2 = $_POST["searchR2"];

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
    {
        die('error connecting to database');
    };

    $result = mysqli_query($conn,"SELECT id, raceTime, racer1, racer2, winner FROM demoRaces 
    WHERE racer1 = '".$searchR1."' && racer2 = '".$searchR2."' ORDER BY id DESC LIMIT 10");

    echo "<table border=1>
    <tr>
        <th>Race #:</th>
        <th>Start Time:</th>
        <th>Racer 1:</th>
        <th>Racer 2:</th>
        <th>Winner:</th>
    </tr>";

    {
        while($row = mysqli_fetch_array($result))
        {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['raceTime'] . "</td>";
        echo "<td>" . $row['racer1'] . "</td>";
        echo "<td>" . $row['racer2'] . "</td>";
        echo "<td>" . $row['winner'] . "</td>";
        echo "</tr>";
        } 
        echo "</table>";   
    }

    mysqli_close($conn);
    ?></p>
<br><br>
<a href="race.html" style="color:white; font-family: Arial, Helvetica, sans-serif; 
margin-left:1%; font-size:110%;">Back to the Race!</a>

</body>
</html>