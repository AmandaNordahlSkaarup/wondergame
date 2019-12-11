<?php 

//CONNECTS TO YOU DATABASE

$servername ="skaarup.one.mysql"; //
$username = "skaarup_one_wonder_game";
$password = "K02Dans";
$db = "skaarup_one_wonder_game";

$conn = mysqli_connect($servername,$username,$password,$db);

if(mysqli_connect_errno()){
    echo "Connection failed: " + mysqli_connect_errno();
}

?>