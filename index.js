let clickcounter = 0;
let gameactive=true;
let winner=false;
let playerXwiningcount=0;
let playerOwiningcount=0;
let drawcount=0;
// let currentplayer = "X";
// const playerX = 
const Firstpage = document.getElementById("first-page");
const Playbtn = document.getElementById("play-btn");
const Selectmodepage = document.getElementById("select-mode-page");
const Multiplayerbtn = document.getElementById("multi-player-btn");
const Playernamecontainer = document.getElementById("player-name-container");
const PlayerXname = document.getElementById("player-X-name");
const PlayerOname = document.getElementById("player-O-name");
const Startgamebtn = document.getElementById("start-game-btn");
const TurnXheading = document.getElementById("turn-X-heading");
const TurnOheading = document.getElementById("turn-O-heading");
const Mgame = document.getElementById("M-game");
const turnX = document.getElementById("turn-X");
const turnO = document.getElementById("turn-O");
const boxes = document.querySelectorAll(".boxes");
const PlayerXcountheading = document.getElementById("player-X-count-heading");
const PlayerXcount = document.getElementById("player-X-count");
const Drawcount = document.getElementById("draw-count");
const PlayerOcountheading = document.getElementById("player-O-count-heading");
const PlayerOcount = document.getElementById("player-O-count");
const Reset = document.getElementById("reset");
const Playagainchngplayernames= document.getElementById("play-again-chng-player-names");
const Playagain = document.getElementById("play-again");
const Chngplayernamesbtn = document.getElementById("chng-player-names-btn");

Playbtn.addEventListener("click" , function(){
    Firstpage.style.display="none";
    Selectmodepage.style.display="flex"
})

Multiplayerbtn.addEventListener("click" , function(){
        Selectmodepage.style.display="none"
        Playernamecontainer.style.display="flex"
        if( PlayerXname.value==="" || PlayerXname.value==="" ){
            Startgamebtn.style.pointerEvents="none"
            Startgamebtn.style.opacity="0.5"
        }
        else{
             Startgamebtn.style.pointerEvents="pointer"
            Startgamebtn.style.opacity="1"
        }
})

PlayerXname.addEventListener("change" , function(){
    if( PlayerXname.value==="" ){
        Startgamebtn.style.pointerEvents="none"
        Startgamebtn.style.opacity="0.5"
    }
    else{
         Startgamebtn.style.pointerEvents="auto"
        Startgamebtn.style.opacity="1"
    }
})

PlayerOname.addEventListener("change" , function(){
    if( PlayerOname.value==="" ){
        Startgamebtn.style.pointerEvents="none"
        Startgamebtn.style.opacity="0.5"
    }
    else{
         Startgamebtn.style.pointerEvents="auto"
        Startgamebtn.style.opacity="1"
    }
})

Startgamebtn.addEventListener("click" , function(){
    Playernamecontainer.style.display="none"
    Mgame.style.display="flex"
    TurnXheading.textContent=PlayerXname.value;
    TurnOheading.textContent= PlayerOname.value;
    PlayerXcountheading.textContent=`X(${PlayerXname.value})`;     
    PlayerXcount.textContent=0;
    PlayerOcountheading.textContent=`O(${PlayerOname.value})`;     
    PlayerOcount.textContent=0;
    Drawcount.textContent=0;
})

const checkwinner = () => {
    const winpatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winpatterns.forEach(patterns => {
        const [a, b, c] = patterns;
        if (
            boxes[a].dataset.value &&
            boxes[a].dataset.value === boxes[b].dataset.value &&
            boxes[a].dataset.value === boxes[c].dataset.value
        ) {
            
            winner=true;
            // Change the background color for the winning boxes
            setTimeout(() => {
                
                boxes[a].style.backgroundColor = "rgb(5,218,215)";
                boxes[b].style.backgroundColor = "rgb(5,218,215)";                
                boxes[c].style.backgroundColor = "rgb(5,218,215)";                
            }, 10);
            
            boxes.forEach(box => {
                box.style.pointerEvents="none"
            })
            
            // Display the winner message
            if(boxes[a].dataset.value === "X"){
                playerXwiningcount++;
                document.getElementById("WinnerName").textContent = `Congratulations ${PlayerXname.value} wins!`;               
                PlayerXcount.textContent=playerXwiningcount;
            }
            else{
                playerOwiningcount++;
                document.getElementById("WinnerName").textContent = `Congratulations ${PlayerOname.value} wins!`;                
                PlayerOcount.textContent=playerOwiningcount;
            }
           
            document.getElementById("turnfor").textContent = "Game Over";
            document.getElementsByClassName("flex-turn")[0].style.opacity = "0";

           

            gameactive = false;
            Reset.style.display = "none";
            Playagainchngplayernames.style.display="flex"
        }
    });

        if(!winner && clickcounter===9)
        {
            drawcount++;
            document.getElementById("turnfor").textContent = "Game Draw";
            document.getElementById("WinnerName").textContent = "It's a Draw!";
            document.getElementsByClassName("flex-turn")[0].style.opacity = "0";
            gameactive = false;
            Reset.style.display = "none";
            Drawcount.textContent=drawcount;
            Playagainchngplayernames.style.display="flex"
            clickcounter=0;
            
            // console.log(Drawcount.textContent)
        }
};

 boxes.forEach(box => {
    box.addEventListener("click", function () {
        clickcounter++;

        if (gameactive) {
            let image = box.querySelector("img");

            if (clickcounter % 2 !== 0) {
                turnO.style.backgroundColor = "rgb(253,44,92)";
                turnX.style.backgroundColor = "rgb(34,40,50)";
                image.src = "X-image.png";
                this.dataset.value = "X";
            } else {
                turnX.style.backgroundColor = "rgb(253,44,92)";
                turnO.style.backgroundColor = "rgb(34,40,50)";
                image.src = "O-image.png";
                this.dataset.value = "O";
            }
        }

        Reset.style.display = "block";
        box.style.pointerEvents = "none"; // Prevent further clicks on this box
        checkwinner();
    });
});

Reset.addEventListener("click", function () {
    boxes.forEach(box => {
        box.dataset.value = "";
        let image = box.querySelector("img");
        image.src = "";
        box.addEventListener("mouseover" , function(){
            box.style.backgroundColor="rgb(253,44,92)";
            box.style.cursor="pointer"
        })
        box.addEventListener("mouseout" , function(){
            box.style.backgroundColor="rgb(34,40,50)"
        })

        // Reset background color and pointer events
        box.style.backgroundColor = "rgb(34,40,50)";
        box.style.pointerEvents = "auto";
    });

    clickcounter = 0;
    turnX.style.backgroundColor = "rgb(253,44,92)";
    turnO.style.backgroundColor = "rgb(34,40,50)";
    gameactive = true;
});

Playagain.addEventListener("click", function () {
    boxes.forEach(box => {
        box.dataset.value = "";
        let image = box.querySelector("img");
        image.src = "";

        // Reset background color and pointer events
        box.style.backgroundColor = "rgb(34,40,50)";
        box.style.pointerEvents = "auto";

        box.addEventListener("mouseover" , function(){
            box.style.backgroundColor="rgb(253,44,92)";
            box.style.cursor="pointer"
        })
        box.addEventListener("mouseout" , function(){
            box.style.backgroundColor="rgb(34,40,50)"
        })
      
    });

    document.getElementById("WinnerName").textContent = "";
    document.getElementById("turnfor").textContent = "Turn For";
    document.getElementsByClassName("flex-turn")[0].style.opacity = "1";
    turnX.style.backgroundColor = "rgb(253,44,92)";
    turnO.style.backgroundColor = "rgb(34,40,50)";
   Playagainchngplayernames.style.display="none"
    gameactive = true;
    clickcounter = 0;
    winner=false;
});

Chngplayernamesbtn.addEventListener("click" , function(){
    boxes.forEach(box => {
        box.dataset.value = "";
        let image = box.querySelector("img");
        image.src = "";

        // Reset background color and pointer events
        box.style.backgroundColor = "rgb(34,40,50)";
        box.style.pointerEvents = "auto";

        box.addEventListener("mouseover" , function(){
            box.style.backgroundColor="rgb(253,44,92)";
            box.style.cursor="pointer"
        })
        box.addEventListener("mouseout" , function(){
            box.style.backgroundColor="rgb(34,40,50)"
        })
      
    });
    clickcounter=0;
    gameactive=true;
    PlayerXname.value=""
    PlayerOname.value=""
    Mgame.style.display="none"
    Playernamecontainer.style.display="flex"
    Startgamebtn.style.pointerEvents="none"
    Startgamebtn.style.opacity="0.5"
    Playagainchngplayernames.style.display="none";
    turnX.style.backgroundColor = "rgb(253,44,92)";
    turnO.style.backgroundColor = "rgb(34,40,50)";
    document.getElementsByClassName("flex-turn")[0].style.opacity = "1";
    document.getElementById("WinnerName").textContent = ""; 
    document.getElementById("turnfor").textContent = "Turn For";
    playerOwiningcount=0;
    playerXwiningcount=0;
    drawcount=0;
    winner=false;
})
