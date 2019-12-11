<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Emilys+Candy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main-style.css">
    <title>register</title>
</head>
<body class="general-body">
<?php include 'inc/db.php'?>
<?php include 'inc/nav.php'?>

<?php 

if(isset($_SESSION['adganginfo'])){
    $userform =
    '<form name="myForm" action="userinfo.php" method="POST" onsubmit="return checkformupdate()" id="checkformupdate"> 
    <div class="form-group">
        <label>First name</label>
        <input type="text" class="form-control" name="firstname" placeholder="First name" id="firstname" required>
    </div>
    <div class="form-group">
        <label>Last name</label>
        <input type="text" class="form-control" name="lastname" placeholder="Last name" id="lastname" required>
    </div>
    <div class="form-group">
        <label>E-mail</label>
        <input type="email" class="form-control" name="email" placeholder="E-mail" id="email" required>
    </div>
    <div class="form-group">
        <label>Street</label>
        <input type="text" class="form-control" name="street" placeholder="Street" id="street" required>
    </div>
    <div class="form-group">
        <label>Zip code</label>
        <input type="text" class="form-control" name="postcode" placeholder="Post code" id="postcode" required>
    </div>
    <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" name="city" placeholder="City" id="city" required>
    </div>
    <button type="submit" id="validate" class="btn btn-light" name="submit">Submit</button>
    </form>'
    ;
} else{
    echo "<script>window.location.href='registrer.php';</script>";
}


if(isset($_POST["submit"])){
    $userName = $_SESSION['username'];
    $password = $_SESSION['password'];
    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $street = mysqli_real_escape_string($conn, $_POST['street']);
    $postcode = mysqli_real_escape_string($conn, $_POST['postcode']);
    $city = mysqli_real_escape_string($conn, $_POST['city']);

    $sql = "INSERT INTO `user`(username, password, tm, fornavn, efternavn, email, vejnavn, postnummer, postby)
    VALUES('$userName', '$password', CURRENT_TIMESTAMP, '$firstname', '$lastname', '$email', '$street', '$postcode', '$city')";

   $result = mysqli_query($conn, $sql)  or die("Query virker ikke - henter");

   echo "<script>window.location.href='gamesite.php';</script>";


}





?>

    <div class="container info-footer">
        <h2 class="space-to-nav">Your information</h2>
        <div><?= $userform ?></div>

        <p class="space-to-nav">Do you have an account? <a href="index.php">login here</a></p>
    </div>

    <?php include 'inc/footer.php'?>
