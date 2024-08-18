let clickcounter = 0;
let gameactive=true
// let currentplayer = "X";
// const playerX = 
const turnX = document.getElementById("turn-X");
const turnO = document.getElementById("turn-O");
const boxes = document.querySelectorAll(".boxes");
const Reset = document.getElementById("reset");
const Playagain = document.getElementById("play-again");

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
            
            
            // Change the background color for the winning boxes
            setTimeout(() => {
                
                boxes[a].style.backgroundColor = "rgb(5,218,215)";
                boxes[b].style.backgroundColor = "rgb(5,218,215)";                
                boxes[c].style.backgroundColor = "rgb(5,218,215)";                
            }, 1);
            
            boxes.forEach(box => {
                box.style.pointerEvents="none"
            })
            
            // Display the winner message
            document.getElementById("WinnerName").textContent = `Player ${boxes[a].dataset.value} wins!`;
            document.getElementById("turnfor").textContent = "Game Over";
            document.getElementsByClassName("flex-turn")[0].style.opacity = "0";

           

            gameactive = false;
            Playagain.style.display = "block";
            Reset.style.display = "none";
        }
    });
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
    Playagain.style.display = "none";
    gameactive = true;
    clickcounter = 0;
});
