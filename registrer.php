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



//Dette er en boolian. Er det sandt eller falsk. Ja/nej. 0=false 1=true
$flag = false;
$isunique = true;

if(isset($_POST["submit"])){
    //Renser for elementer som f.eks. SQL angrab
    $userName = mysqli_real_escape_string($conn, $_POST['username']);
    $pass1 = mysqli_real_escape_string($conn, $_POST['password']);
    $pass2 = mysqli_real_escape_string($conn, $_POST['repeat-password']);

    //Stemmer de to passwords overens.
    if($pass1 == $pass2){
        $flag = true;
    }

    $sql = "SELECT * FROM user WHERE username = '$userName'";
    $result = mysqli_query($conn, $sql)  or die("Query virker ikke - henter");

    //print_r($result); 

    if(mysqli_num_rows($result)){
        $isunique = false;
    }


    if($flag == true AND $isunique == true){
        //Dette gør at det pasword som man sender og de som ses i databasen er uforståeligt. Men man logger stadig ind med det oprindeligt password. Hvis ikke man ryder rundt i det, vil en "rainbow palette" kunne udregne passwordet.
        //Salt er "støj" som man tilføjet. Det er tilfældige karakere. Det bruger man til at forvirre "fjenderne".
        $salt = "ldfjldjf34lksdf4kle" . $pass1 . "dkj2fldsjljf34elk";
        //hash (skabler) ryder rundt i det. sha512 er en inbygget function som blander rundt i alle bogstaverne. Det er en form for kryptering.
        $hashed = hash('sha512', $salt);

        //$sql = "INSERT INTO login(username, password) VALUES('$userName', '$hashed')";
        $result = mysqli_query($conn, $sql)  or die("Query virker overhoved ikke - upload");

        
        $_SESSION['username'] = $userName;
        $_SESSION['password'] = $hashed;
        $_SESSION['adganginfo'] = 'adganginfo';
        echo "<script>window.location.href='userinfo.php';</script>";
    } 
}
?>

    <div class="container">
        <h1 class="space-to-nav">Register</h1>
        <form action="registrer.php" method="POST" id="checkform" onsubmit="return checkform()"> 
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" name="username" placeholder="Username" id="username" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" placeholder="Password" id="pass1" required>
            </div>
            <div class="form-group">
                <label>Repeat Password</label>
                <input type="password" class="form-control" name="repeat-password" placeholder="Repeat Password" id="pass2" required>
                <p id="errorpassword"></p>
            </div>

            <button type="submit" class="btn btn-light" name="submit">Next</button>
        </form>

        <p class="space-to-nav">Do you have an account? <a href="index.php">login here</a></p>
    </div>

    <?php include 'inc/footer.php'?>
