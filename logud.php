<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Emilys+Candy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main-style.css">
    <title>logud</title>
</head>
<body>
    
<?php include 'inc/db.php'?>
<?php include 'inc/nav.php'?>

<?php 

session_destroy();
echo "<script>window.location.href='index.php';</script>";
?>

<?php include 'inc/footer.php'?>

