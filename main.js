let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');


//MAZES
let maze = [
    [0, 0, -1, 1, 4, 5, 1, 3, 1, 3, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 3, 0, 0, 1, 0, 1, 0, 1, 0, 1, 3],
    [1, 1, 5, 0, 1, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 3, 0, 0, 1, 1, 0, 0, 3, 0],
    [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 5, 0, 1, 0, 5, 1, 2, 1],
    [1, 1, 0, 1, 0, 3, 1, 0, 0, 1, 0, 5],
    [0, 0, 0, 5, 0, 1, 4, 1, 0, 5, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [3, 0, 0, 5, 0, 0, 0, 3, 1, 0, 0, 3],
      
];
let maze2 = [
    [4, 0, 0, 0, 0, 1, 0, 5, 3, 1, 0, 1],
    [1, 1, 1, 5, 0, 1, 0, 1, 0, 3, 0, 0],
    [1, 3, 0, 0, 0, 0, 0, 1, 0, 1, 5, 2],
    [1, 0, 5, 1, 1, 1, 0, 1, 0, 0, 5, 5],
    [1, 0, 5, 3, 0, 0, 0, 1, 1, 0, 0, 0],
    [-1, 0, 5, 1, 1, 1, 0, 1, 3, 0, 1, 0],
    [1, 0, 5, 3, 0, 0, 0, 0, 5, 0, 0, 0],
    [1, 0, 5, 1, 0, 1, 1, 0, 5, 1, 1, 0],
    [1, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 4, 1, 1, 1, 1, 3],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [4, 0, 1, 3, 0, 0, 1, 3, 1, 0, 0, 0],
      
];
let maze3 = [
    [4, 0, 3, 5, 0, 0, 0, 1, 1, 4, 1, 5],
    [0, 1, 0, 0, 0, 1, 3, 0, 5, 0, 0, 3],
    [0, 0, 1, 5, 1, 1, 1, 0, 0, 0, 1, 0],
    [5, 0, 1, 0, 0, 0, 0, 0, 3, 5, 1, 0],
    [0, 3, 1, 0, 5, 5, 5, 0, 1, 0, 0, 0],
    [0, 5, 5, 0, 0, 2, 5, 0, 1, 0, 1, 5],
    [0, 0, 0, 1, 1, 1, 5, 1, 1, 0, 0, 3],
    [1, 1, 0, 0, 5, 3, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 3, 1, 0, 1, 5, 1, 0, 5, 0],
    [0, 1, 5, 1, 1, 0, 1, 3, 0, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 1, 0, 1, 5, 1, 1],
    [5, 0, 0, 3, 1, 4, 5, 0, 0, 0, 0, -1],
      
];


//PICES IN THE GAME
let x = 0;
let y = 0;
let player = -1;
let playerPosition = -1;
let mushroom = 3;
let chesire = 4;
let kort = 5;
let tSize = 40;


//SCORE
let score = 0;
let chesireScore = 0;
let endScore = 0
let point = 1;

let scoreText = document.querySelector('#score');
scoreText.innerHTML = score;
let endScoreText = document.querySelector('#endScore');
endScoreText.innerHTML = endScore;
let chesireText = document.querySelector('#scoreCat');
chesireText.innerHTML = chesireScore;


function pointScore() {
    score += point;
    scoreText.innerHTML = score;
}
function chesireCat(){
    chesireScore += point;
    chesireText.innerHTML = chesireScore;
}
function totalScore(){
    endScore += point;
    endScoreText.innerHTML = endScore;
}


//IMAGE
let imgmushroom = new Image()
imgmushroom.src = 'img/mushroom1.jpg';

let imgcheshire = new Image()
imgcheshire.src = 'img/cheshire1.jpg';

let imgbush = new Image()
imgbush.src = 'img/bush.jpg';

let imgcard = new Image()
imgcard.src = 'img/card1.jpg';

let imgalice = new Image()
imgalice.src = 'img/alice.jpg';

let imghole = new Image()
imghole.src = 'img/hole.jpg';

//GIFFER
function eatMushroom() {
    document.getElementById("grov-gif").style.display = "block";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
}
function rulesForGame() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("ruels").style.display = "block";
}
function startGif() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("helpMe").style.display = "block";
}
function intoTheBush() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "block";
}
function getCat() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("collectCat").style.display = "block";
}
function youLost() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("youWon").style.display = "none";
    document.getElementById("youAreDead").style.display = "block";
}
function youWonGif() {
    document.getElementById("grov-gif").style.display = "none";
    document.getElementById("ruels").style.display = "none";
    document.getElementById("helpMe").style.display = "none";
    document.getElementById("intoTheBushGif").style.display = "none";
    document.getElementById("collectCat").style.display = "none";
    document.getElementById("youAreDead").style.display = "none";
    document.getElementById("youWon").style.display = "block";
}

//SOUND

function soundWall() {
    let audio = new Audio('img/sound/bush.wav');
    audio.play();
   }

function soundWalk() {
    let audio = new Audio('img/sound/walk.wav');
    audio.play();
   }

function soundMushroom() {
    let audio = new Audio('img/sound/mushroom.wav');
    audio.play();
   }

function soundCat() {
    let audio = new Audio('img/sound/cat.wav');
    audio.play();
   }

   function soundCard() {
    let audio = new Audio('img/sound/card.wav');
    audio.play();
   }

   function soundGoal() {
    let audio = new Audio('img/sound/goal.wav');
    audio.play();
   }

//NEXT MAZE
function toNewMaze(){
    if(chesireScore == 2){
        maze = maze2;
        //chesireScore = 0;
        document.getElementById("level").innerHTML = "Level 2";
    }
    else if (chesireScore == 5){
        maze = maze3;
        document.getElementById("level").innerHTML = "Level 3";
    }
    else if (chesireScore == 8){
        endGame();
    }
    
}

//DIE FUNCTION IN GAME
function diecard(){
    setTimeout(function(){location.href = "gamesite.php";}, 1500);
    
}
//FUNCTION FOR GAME TO BEGIN
function startgame(){
    rulesForGame();
    document.getElementById("canvas").style.display = "block";
    document.getElementById("level").style.display = "block";
    document.getElementById("scorePoint").style.display = "block";
    document.getElementById("scoreCat1").style.display = "block";
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("endScorePoint").style.display = "none";
    document.getElementById("newGame").style.display = "none";
    document.getElementById("endGame").style.display = "none";
    
}
//FUNCTION FOR GAME WHEN ENDING
function endGame(){
    youWonGif();
    document.getElementById("canvas").style.display = "none";
    document.getElementById("level").style.display = "none";
    document.getElementById("scorePoint").style.display = "none";
    document.getElementById("scoreCat1").style.display = "none";
    document.getElementById("endScorePoint").style.display = "block";
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("newbtn").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("endGame").style.display = "block";
    
}


// KEY FUNCTIONS IN GAME
function keyUp(){
    if(maze[playerPosition.y-1][playerPosition.x] == 0){
        maze[playerPosition.y - 1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }else if(maze[playerPosition.y-1][playerPosition.x] == 1){
        soundWall();
        intoTheBush();
    }else if(maze[playerPosition.y-1][playerPosition.x] == 2){
        toNewMaze();
        soundGoal();
    }
    else if(maze[playerPosition.y-1][playerPosition.x] == 3){
        maze[playerPosition.y - 1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        pointScore();
        totalScore();
        soundMushroom();
        eatMushroom();
    }
    else if(maze[playerPosition.y-1][playerPosition.x] == 4){
        maze[playerPosition.y - 1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        chesireCat();
        getCat();
        totalScore();
        soundCat();
    }else if(maze[playerPosition.y-1][playerPosition.x] == 5){
        diecard();
        youLost();
        soundCard();
    }
}
function keyRight(){
    if(maze[playerPosition.y][playerPosition.x+1] == 0){
        maze[playerPosition.y][playerPosition.x+1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
    else if(maze[playerPosition.y][playerPosition.x+1] == 1){
        soundWall();
        intoTheBush();
    }else if(maze[playerPosition.y][playerPosition.x+1] == 2){
        toNewMaze();
        soundGoal();
    
    }else if(maze[playerPosition.y][playerPosition.x+1] == 3){
        maze[playerPosition.y][playerPosition.x+1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        pointScore();
        totalScore();
        soundMushroom();
        eatMushroom();
    }
    else if(maze[playerPosition.y][playerPosition.x+1] == 4){
        maze[playerPosition.y][playerPosition.x+1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        chesireCat();
        getCat();
        totalScore();
        soundCat();
    }else if(maze[playerPosition.y][playerPosition.x+1] == 5){
        diecard();
        youLost();
        soundCard();
    }
}

function keyDown(){
    if(maze[playerPosition.y+1][playerPosition.x] == 0){
        maze[playerPosition.y +1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
    else if(maze[playerPosition.y+1][playerPosition.x] == 1){
        soundWall();
        intoTheBush();
    }else if(maze[playerPosition.y+1][playerPosition.x] == 2){
        toNewMaze();
        soundGoal();
    }else if(maze[playerPosition.y+1][playerPosition.x] == 3){
        maze[playerPosition.y+1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        pointScore();
        totalScore();
        soundMushroom();
        eatMushroom();
    }else if(maze[playerPosition.y+1][playerPosition.x] == 4){
        maze[playerPosition.y+1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        chesireCat();
        getCat();
        totalScore();
        soundCat();
    }else if(maze[playerPosition.y+1][playerPosition.x] == 5){
        diecard();
        youLost();
        soundCard();
    }
}

function keyLeft(){
    if(maze[playerPosition.y][playerPosition.x-1] == 0){
        maze[playerPosition.y][playerPosition.x-1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
    else if(maze[playerPosition.y][playerPosition.x-1] == 1){
        soundWall();
        intoTheBush();
    }else if(maze[playerPosition.y][playerPosition.x-1] == 2){
        toNewMaze();
        soundGoal();
    }else if(maze[playerPosition.y][playerPosition.x-1] == 3){
        maze[playerPosition.y][playerPosition.x-1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        pointScore();
        totalScore();
        soundMushroom();
        eatMushroom();
    }else if(maze[playerPosition.y][playerPosition.x-1] == 4){
        maze[playerPosition.y][playerPosition.x-1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
        chesireCat();
        getCat();
        totalScore();
        soundCat();
    }else if(maze[playerPosition.y][playerPosition.x-1] == 5){
        diecard();
        youLost();
        soundCard();
    }
}

//STYLING ON GAME AND POSISTION

function grid(){
for(y = 0; y < maze.length; y++){
    
    for(x = 0; x < maze[y].length; x++){
    
        if(maze[y][x] == 0){
    ctx.fillStyle = "#315625";
    ctx.fillRect(x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 2){
    ctx.drawImage(imghole, x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 1){
    ctx.drawImage(imgbush, x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 3){
    ctx.drawImage(imgmushroom, x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 4){
    ctx.drawImage(imgcheshire, x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 5){
    ctx.drawImage(imgcard, x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == player){
    ctx.drawImage(imgalice, x*tSize,y*tSize,tSize,tSize);
    playerPosition = {y:y,x:x};
    console.log(playerPosition.y + " " + playerPosition.x)
            }
        }
    }
}

// SWITCH TO RUN TELL WHAT FUNCTION TO RUN AT WHAT KEY
window.addEventListener('keydown', function(event){
soundWalk(); 
switch (event.keyCode) {
    case 38: //KeyUp
        keyUp()
        grid()
        break;

    case 39: //KeyRight
        keyRight()
        grid()
        
        break;
    case 40: //KeyDown
        keyDown()
        grid() 
        break;

    case 37: //KeyLeft
        keyLeft()
        grid() 
        break;

    default:
        break;
}

})

window.addEventListener("load", grid);

function checkform(){
    let formElement = document.querySelector("#checkform");
    let userName = formElement.username; 
    let pass1 = formElement.pass1; 
    let pass2 = formElement.pass2; 

    let enspasswords = false; 
    let passlængde = false; 

    if(pass1.value == pass2.value){
        enspasswords = true; 
    }

    if(pass1.value.length > 8){
        passlængde = true; 
        
    }

    if(enspasswords && passlængde){
        return true;
    }else{
        alert("Dit password er for kort eller er ikke ens");
        return false;
    }

}
/* TEST MED REGULAR EXPRETION
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);*/
