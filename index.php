<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Emilys+Candy&display=swap" rel="stylesheet">

<!-- Mine style -->
<link rel="stylesheet" href="css/main-style.css">


</head>
<body class="index-body">

<?php include 'inc/db.php'?>

<?php 
$output ="";

if(isset($_POST['submit'])){
    $userName = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $salt = "ldfjldjf34lksdf4kle" . $pass . "dkj2fldsjljf34elk";
    $hashed = hash('sha512', $salt);

    $sql = "SELECT * FROM `user` WHERE username = '$userName' AND password = '$hashed'";

    $result = mysqli_query($conn, $sql) or die ("Query virker ikke " . $sql);

    if(mysqli_num_rows($result) == 1){

        session_start();
        $_SESSION['username'] = $userName;
        $_SESSION['adgang'] = 'adgang';
        echo "<script>window.location.href='gamesite.php';</script>";


    } else {
        $output = "Wrong login";
    }
}
?>



<div class="container">
<div class="row">
<img class="col-3" src="img/logo.png" alt="">
</div>
</div>
<center>
<div class="container con-index">
    
        <h1 class="space-to-nav con-log">Login</h1>
        
        <form method="POST">
        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control col-4" name="username" placeholder="Username">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control col-4" name="password" placeholder="Password">
        </div>
            <button type="submit" class="btn btn-light" name="submit">Submit</button>
            <h3 class="space-to-nav"><?= $output ?></h3> <!-- = istedet for php echo -->
        </form>

        <p class="space-to-nav">Do not have an account? <a href="registrer.php">Create account here</a></p>
    
    </div>
    </center>  

<?php include 'inc/footer.php'?>
    