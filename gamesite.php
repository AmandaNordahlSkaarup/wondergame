<?php session_start(); ?> 
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
<body class="profile-body">

<?php include 'inc/db.php'?>
<?php include 'inc/nav.php'?>
 

<?php 
if(isset($_SESSION['adgang'])){
$sql = "SELECT * FROM `user`";
$result = mysqli_query($conn, $sql) or die("Query virker ikke!");
$games = mysqli_fetch_all($result, MYSQLI_ASSOC);


} /*else{
    echo "<script>window.location.href='index.php';</script>";
}*/;
?>

<div class="container">
    <div class="row col-lg-12">
        <h1 id="level">Level 1</h1>
    </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 md col-md-3 col-sm-3 col-3 ">   
                <h5 id="scorePoint" >You have <span id="score"></span> points</h5>
            </div>
            <div class="col-xl-3 col-lg-3 md col-md-3 col-sm-3 col-3 ">
                <h5 id="scoreCat1" >You have <span id="scoreCat"></span> Chesire cat</h5>
            </div>
            <div class="col-xl-6 col-lg-3 md col-md-3 col-sm-3 col-3 ">
                <h5 class="ruleText" id="rulesText">Help Alice through Wondergame</h5>
            </div>
        </div> 
     
</div>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <!-- SPILLET -->
            <canvas id="canvas" width="500" height="500"></canvas>
            <!-- INTRO FØR SPILLET -->
                <div class="col-12" id="intro">
                    <h1>HELP!!</h1>
                    <h5>Alice needs your help. <br> She can't finde her way home. <br> To help Alice find the Chesire Cat, he will help you on your way.<br> See how many mushrooms you can find, they will make you grow. <br> But be carefull the Queen of harts men they are looking for you, don't run into them or you will never find your way home. <br><br>
                The rules are simple: <br>
                1. Help Alice through Wondergame <br>
                2. Find Chesire cat be aware there can be more than one <br>
                3. Collect the mushrooms to get points <br>
                4. Eviod the Queens men</h5>
                    <button id="startbtn" class="btn btn-light" onclick="startgame()">Start game</button> 
                </div>
                <!-- NÅR SPILLET ER SLUT -->
                    <div class="col-9" id="endGame">
                        <h3>Congratulation you found home!!</h3>
                        <h5 id="endScorePoint">You have a total score of <span id="endScore"></span></h5>
                        <button id="newbtn" class="btn btn-light" onclick="window.location.href='gamesite.php';">New game</button>
                    </div>
            </div>
        <!-- VISES UNDER SPILLET -->
        <div class= "gifInGame col-12 col-sm-3 col-md-4 col-lg-5">
            <img id="helpMe" src="img/gif/start.gif" alt="">
            <img id="ruels" src="img/frame.png" alt="">
            <img id="grov-gif" src="img/gif/eatmushroom-done.gif" alt="">
            <img id="intoTheBushGif" src="img/gif/hovsa-done.gif" alt="">
            <img id="collectCat" src="img/gif/collectCat.gif" alt="">
            <img id="youAreDead" src="img/gif/queensmen.gif" alt="">
            <img id="youWon" src="img/gif/home.gif" alt="">
        </div>
    </div>
</div>

    <!--<script src="main.js"></script>-->

<?php include 'inc/footer.php'?>