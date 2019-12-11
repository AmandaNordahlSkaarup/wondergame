<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Emilys+Candy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main-style.css">
    <title>Profile</title>
</head>
<body class="profile-body">
    
<?php include 'inc/db.php'?>
<?php include 'inc/nav.php'?>
<?php include 'inc/config.php'?>

<?php 

$userName = $_SESSION['username'];

$sql = "SELECT * FROM `user` WHERE username = '$userName'";
$result = mysqli_query($conn, $sql) or die("query virker ikke");
$user = mysqli_fetch_assoc($result);
$infoUser = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>


<center>  
<div class="container">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            
            <img class="profile-frame" src="img/framee.png" alt="">
                <div class="profile-text">
                    <h1>Profile</h1>
                    <p>Username: <span><?php echo $user['username']; ?></span></p>
                    <p>Firstname: <span><?php echo $user['fornavn']; ?></span></p>
                    <p>Lastname: <span><?php echo $user['efternavn']; ?></span></p>
                    <p>Email: <span><?php echo $user['email']; ?></span></p>
                    <p>Street: <span><?php echo $user['vejnavn']; ?></span></p>
                    <p>zip code: <span><?php echo $user['postnummer']; ?></span></p>
                    <p>City: <span><?php echo $user['postby']; ?></span></p>
                </div>  
        </div>   
    </div>   
</div>

</center>


<?php include 'inc/footer.php'?>

