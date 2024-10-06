let clickcounter = 0;
let gameactive = true;
let winner = false;
let playerXwiningcount = 0;
let playerOwiningcount = 0;
let drawcount = 0;
let playercategory = false;
let clickSingleplayer = false;
let clickOradiobtn = false;
let autoplay = true;
// let currentplayer = "X";
// const playerX =
const Firstpage = document.getElementById("first-page");
const Playbtn = document.getElementById("play-btn");
const Selectmodepage = document.getElementById("select-mode-page");
const Multiplayerbtn = document.getElementById("multi-player-btn");
const Singleplayerbtn = document.getElementById("single-player-btn");
const Multiplayernamecontainer = document.getElementById(
  "multi-player-name-container"
);
const Singleplayernamecontainer = document.getElementById(
  "single-player-name-container"
);
const MultiplayerXname = document.getElementById("multi-player-X-name");
const MultiplayerOname = document.getElementById("multi-player-O-name");
const SingleplayerXname = document.getElementById("single-player-X-name");
const SingleplayerOname = document.getElementById("single-player-O-name");
const Xradiobtn = document.getElementById("X-radio-btn");
const Oradiobtn = document.getElementById("O-radio-btn");
const Singleplayerstartgamebtn = document.getElementById(
  "single-player-start-game-btn"
);
const Multiplayerstartgamebtn = document.getElementById(
  "multi-player-start-game-btn"
);
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
const Playagainchngplayernames = document.getElementById(
  "play-again-chng-player-names"
);
const Playagain = document.getElementById("play-again");
const Chngsingleplayersnamebtn = document.getElementById(
  "chng-single-players-name-btn"
);
const Chngmultiplayersnamebtn = document.getElementById(
  "chng-multi-players-name-btn"
);

Playbtn.addEventListener("click", function () {
  Firstpage.style.display = "none";
  Selectmodepage.style.display = "flex";
});

Singleplayerbtn.addEventListener("click", function () {
  Xradiobtn.checked = true;
  Selectmodepage.style.display = "none";
  Singleplayernamecontainer.style.display = "flex";
  SingleplayerOname.value = "CPU";
  SingleplayerOname.style.opacity = "0.5";
  SingleplayerOname.style.pointerEvents = "none";
  SingleplayerXname.value = "";
  SingleplayerXname.style.opacity = "1";
  SingleplayerXname.style.pointerEvents = "auto";
 
  clickSingleplayer = true;
 
});

Multiplayerbtn.addEventListener("click", function () {
  Selectmodepage.style.display = "none";
  Multiplayernamecontainer.style.display = "flex";
 
});
MultiplayerXname.addEventListener("change", checkInputs);
MultiplayerOname.addEventListener("change", checkInputs);

function checkInputs() {
  if (MultiplayerXname.value === "" || MultiplayerOname.value === "") {
    Multiplayerstartgamebtn.disabled = true;
  } else {
    Multiplayerstartgamebtn.disabled = false;
  }
}

Xradiobtn.addEventListener("click", function (e) {
  clickOradiobtn = false;
  const Xvalue = e.target.value;
  if (Xradiobtn.value === Xvalue) {
    SingleplayerOname.value = "CPU";
    SingleplayerOname.style.opacity = "0.5";
    SingleplayerOname.style.pointerEvents = "none";
    SingleplayerXname.value = "";
    SingleplayerXname.style.opacity = "1";
    SingleplayerXname.style.pointerEvents = "auto";
  }
  // if (SingleplayerXname.value !== "") {
  //   Singleplayerstartgamebtn.style.pointerEvents = "auto"; // Enable pointer events
  //   Singleplayerstartgamebtn.style.opacity = "1"; // Enable button
  // } else {
  //   Singleplayerstartgamebtn.style.pointerEvents = "none"; // Disable pointer events
  //   Singleplayerstartgamebtn.style.opacity = "0.5"; // Disable button
  // }
});

Oradiobtn.addEventListener("click", function (e) {
  clickOradiobtn = true ;
  const Ovalue = e.target.value;
  if (Oradiobtn.value === Ovalue) {
    SingleplayerXname.value = "CPU";
    SingleplayerXname.style.opacity = "0.5";
    SingleplayerXname.style.pointerEvents = "none";
    SingleplayerOname.value = "";
    SingleplayerOname.style.opacity = "1";
    SingleplayerOname.style.pointerEvents = "auto";
  }
  // if (SingleplayerOname.value !== "") {
  //   Singleplayerstartgamebtn.style.pointerEvents = "auto"; // Enable pointer events
  //   Singleplayerstartgamebtn.style.opacity = "1"; // Enable button
  // } else {
  //   Singleplayerstartgamebtn.style.pointerEvents = "none"; // Disable pointer events
  //   Singleplayerstartgamebtn.style.opacity = "0.5"; // Disable button
  // }
});

const updatesingleplayerButtonState = () => {
  if (SingleplayerXname.value === "" || SingleplayerOname.value === "") {
    Singleplayerstartgamebtn.style.pointerEvents = "none"; // Disable pointer events
    Singleplayerstartgamebtn.style.opacity = "0.5"; // Disable button
  } else {
    Singleplayerstartgamebtn.style.pointerEvents = "auto"; // Enable pointer events
    Singleplayerstartgamebtn.style.opacity = "1"; // Enable button
  
  }
};

const updatemultiplayerButtonState = () => {
  if (MultiplayerXname.value === "" || MultiplayerOname.value === "") {
    Multiplayerstartgamebtn.style.pointerEvents = "none"; // Enable pointer events
    Multiplayerstartgamebtn.style.opacity = "0.5"; // Enable button
  } else {
    Multiplayerstartgamebtn.style.pointerEvents = "auto"; // Disable pointer events
    Multiplayerstartgamebtn.style.opacity = "1"; // Disable button
  }
};

SingleplayerXname.addEventListener("change", updatesingleplayerButtonState);
SingleplayerOname.addEventListener("change", updatesingleplayerButtonState);
MultiplayerXname.addEventListener("change", updatemultiplayerButtonState);
MultiplayerOname.addEventListener("change", updatemultiplayerButtonState);

Singleplayerstartgamebtn.addEventListener("click", async function () {
  Singleplayernamecontainer.style.display = "none";
  Mgame.style.display = "flex";
  TurnXheading.textContent = SingleplayerXname.value;
  TurnOheading.textContent = SingleplayerOname.value;
  PlayerXcountheading.textContent = `X(${SingleplayerXname.value})`;
  PlayerXcount.textContent = 0;
  PlayerOcountheading.textContent = `O(${SingleplayerOname.value})`;
  PlayerOcount.textContent = 0;
  Drawcount.textContent = 0;
  playercategory=false;

  if(SingleplayerXname.value === "CPU"){
   
    clickcounter++;
    if (gameactive && clickcounter % 2 !== 0) {
      setTimeout(cpuMove, 1000)
    clickcounter--;
  };
  }
  boxes.forEach((box) => {
     
    box.addEventListener("click", function () {
      clickcounter++;
  
      if (gameactive) {
        let image = box.querySelector("img");
  
        if (clickcounter % 2 !== 0) {
          turnO.style.backgroundColor = "rgb(253,44,92)";
          turnX.style.backgroundColor = "rgb(34,40,50)";
          if(clickOradiobtn){
            image.src = "O-image.png";
            this.dataset.value = "O";            
          }
          else{
            image.src = "X-image.png";
            this.dataset.value = "X";
          }
          // box.style.pointerEvents = "none"
          boxes.forEach((bpn) => {
            bpn.style.pointerEvents = "none"
          })
        }
      }
      Reset.style.display = "block";
      checkwinner();
      if(autoplay){
        clickcounter++;
      }

      if (gameactive && SingleplayerOname.value === "CPU" && clickcounter % 2 === 0) {
        setTimeout(cpuMove, 2000)
        setTimeout(()=>{
  
          boxes.forEach((bpa) => {
            bpa.style.pointerEvents = "auto"
          })
        },2500)
      }
      // box.style.pointerEvents = "auto"
        if (gameactive && SingleplayerXname.value === "CPU" && clickcounter % 2 === 0){
           
            setTimeout(cpuMove, 2000)
            setTimeout(()=>{
  
              boxes.forEach((bpa) => {
                bpa.style.pointerEvents = "auto"
              })
            },2500)
        
        } // Delay CPU move for realism

    })
})
});

Multiplayerstartgamebtn.addEventListener("click", function () {
  Multiplayernamecontainer.style.display = "none";
  Mgame.style.display = "flex";
  TurnXheading.textContent = MultiplayerXname.value;
  TurnOheading.textContent = MultiplayerOname.value;
  PlayerXcountheading.textContent = `X(${MultiplayerXname.value})`;
  PlayerXcount.textContent = 0;
  PlayerOcountheading.textContent = `O(${MultiplayerOname.value})`;
  PlayerOcount.textContent = 0;
  Drawcount.textContent = 0;
  playercategory=true;
  boxes.forEach((box) => {
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
});

const checkwinner = () => {
  const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winpatterns.forEach((patterns) => {
    const [a, b, c] = patterns;
    if (
      boxes[a].dataset.value &&
      boxes[a].dataset.value === boxes[b].dataset.value &&
      boxes[a].dataset.value === boxes[c].dataset.value
    ) {
      winner = true;
      // Change the background color for the winning boxes
      setTimeout(() => {
        boxes[a].style.backgroundColor = "rgb(5,218,215)";
        boxes[b].style.backgroundColor = "rgb(5,218,215)";
        boxes[c].style.backgroundColor = "rgb(5,218,215)";
      }, 10);

      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      // Display the winner message
      if (boxes[a].dataset.value === "X") {
        playerXwiningcount++;
        if(playercategory){

            document.getElementById(
              "WinnerName"
            ).textContent = `Congratulations ${MultiplayerXname.value} wins!`;
        }
        else
        {
            
            document.getElementById(
                "WinnerName"
              ).textContent = `Congratulations ${SingleplayerXname.value} wins!`;
        }
        PlayerXcount.textContent = playerXwiningcount;
      } else {
        playerOwiningcount++;
        if(playercategory){

            document.getElementById(
              "WinnerName"
            ).textContent = `Congratulations ${MultiplayerOname.value} wins!`;
        }
        else
        {
            
            document.getElementById(
                "WinnerName"
              ).textContent = `Congratulations ${SingleplayerOname.value} wins!`;
        }
        PlayerOcount.textContent = playerOwiningcount;
      }

      document.getElementById("turnfor").textContent = "Game Over";
      document.getElementsByClassName("flex-turn")[0].style.opacity = "0";

      gameactive = false;
      Reset.style.display = "none";
      if(clickSingleplayer){
        Playagain.style.display = "flex";
        Chngsingleplayersnamebtn.style.display = "flex";
      }
      else{
        Playagain.style.display = "flex";
        Chngmultiplayersnamebtn.style.display = "flex";
      }
      autoplay = false
      // Playagainchngplayernames.style.display = "flex";
    }
  });

  if (!winner && clickcounter === 9) {
    drawcount++;
    document.getElementById("turnfor").textContent = "Game Draw";
    document.getElementById("WinnerName").textContent = "It's a Draw!";
    document.getElementsByClassName("flex-turn")[0].style.opacity = "0";
    gameactive = false;
    Reset.style.display = "none";
    Drawcount.textContent = drawcount;
    if(clickSingleplayer){
      Playagain.style.display = "flex";
      Chngsingleplayersnamebtn.style.display = "flex";
    }
    else{
      Playagain.style.display = "flex";
      Chngmultiplayersnamebtn.style.display = "flex";
    }
    clickcounter = 0;

    // console.log(Drawcount.textContent)
  }
};

const cpuMove = () =>{
    // clickcounter++;
    const emptyBoxes = Array.from(boxes).filter(box=>!box.dataset.value)
    if(emptyBoxes.length !== 0){
        const randomBox = emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)]
        const image = randomBox.querySelector('img')
        turnO.style.backgroundColor = "rgb(34,40,50)";
        turnX.style.backgroundColor = "rgb(253,44,92)";
        if(clickOradiobtn){
          image.src = "X-image.png"
          randomBox.dataset.value = "X"
        }
        else{
          image.src = "O-image.png"
          randomBox.dataset.value = "O"

        }
        
    }
    Reset.style.display = "block";
    // Playagain.style.display = "flex";
    // Chngsingleplayersnamebtn.style.display = "flex";
    checkwinner();
}



Reset.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.dataset.value = "";
    let image = box.querySelector("img");
    image.src = "";
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "rgb(253,44,92)";
      box.style.cursor = "pointer";
    });
    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "rgb(34,40,50)";
    });

    // Reset background color and pointer events
    box.style.backgroundColor = "rgb(34,40,50)";
    box.style.pointerEvents = "auto";
  });

  clickcounter = 0;
  turnX.style.backgroundColor = "rgb(253,44,92)";
  turnO.style.backgroundColor = "rgb(34,40,50)";
  gameactive = true;
  PlayerXcount.textContent = 0;
  PlayerOcount.textContent = 0;
   if(SingleplayerXname.value === "CPU"){
    clickcounter++;
    if (gameactive && clickcounter % 2 !== 0) {
      setTimeout(cpuMove, 1000)
    clickcounter--;
  };
  }
});

Playagain.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.dataset.value = "";
    let image = box.querySelector("img");
    image.src = "";

    // Reset background color and pointer events
    box.style.backgroundColor = "rgb(34,40,50)";
    box.style.pointerEvents = "auto";

    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "rgb(253,44,92)";
      box.style.cursor = "pointer";
    });
    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "rgb(34,40,50)";
    });
  });

  document.getElementById("WinnerName").textContent = "";
  document.getElementById("turnfor").textContent = "Turn For";
  document.getElementsByClassName("flex-turn")[0].style.opacity = "1";
  turnX.style.backgroundColor = "rgb(253,44,92)";
  turnO.style.backgroundColor = "rgb(34,40,50)";
  Playagain.style.display = "none";
  if(clickSingleplayer){
   
    Chngsingleplayersnamebtn.style.display = "none";
  }
  else{
   
    Chngmultiplayersnamebtn.style.display = "none";
  }
  gameactive = true;
  clickcounter = 0;
  winner = false;
  autoplay = true ;
   if(SingleplayerXname.value === "CPU"){
    clickcounter++;
    if (gameactive && clickcounter % 2 !== 0) {
      setTimeout(cpuMove, 1000)
    clickcounter--;
  };
  }
});

Chngmultiplayersnamebtn.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.dataset.value = "";
    let image = box.querySelector("img");
    image.src = "";

    // Reset background color and pointer events
    box.style.backgroundColor = "rgb(34,40,50)";
    box.style.pointerEvents = "auto";

    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "rgb(253,44,92)";
      box.style.cursor = "pointer";
    });
    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "rgb(34,40,50)";
    });
  });
  clickcounter = 0;
  gameactive = true;
  MultiplayerXname.value = "";
  MultiplayerOname.value = "";
  Mgame.style.display = "none";
  Multiplayernamecontainer.style.display = "flex";
  Multiplayerstartgamebtn.style.pointerEvents = "none";
  console.log("Button is ready to disable");
  Multiplayerstartgamebtn.style.opacity = "0.5";
  console.log("Button is disable");
  Playagainchngplayernames.style.display = "none";
  turnX.style.backgroundColor = "rgb(253,44,92)";
  turnO.style.backgroundColor = "rgb(34,40,50)";
  document.getElementsByClassName("flex-turn")[0].style.opacity = "1";
  document.getElementById("WinnerName").textContent = "";
  document.getElementById("turnfor").textContent = "Turn For";
  PlayerXcount.textContent = 0;
  PlayerOcount.textContent = 0;
  drawcount = 0;
  winner = false;
});

Chngsingleplayersnamebtn.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.dataset.value = "";
    let image = box.querySelector("img");
    image.src = "";

    // Reset background color and pointer events
    box.style.backgroundColor = "rgb(34,40,50)";
    box.style.pointerEvents = "auto";

    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "rgb(253,44,92)";
      box.style.cursor = "pointer";
    });
    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "rgb(34,40,50)";
    });
  });
  clickcounter = 0;
  gameactive = true;
  if(clickOradiobtn){
    SingleplayerXname.value = "CPU";
    SingleplayerOname.value = "";
  }
  else{
    SingleplayerXname.value = "";
    SingleplayerOname.value = "CPU";
  }
  Mgame.style.display = "none";
  Singleplayernamecontainer.style.display = "flex";
  Singleplayerstartgamebtn.style.pointerEvents = "none";
  console.log("Button is ready to disable");
  Singleplayerstartgamebtn.style.opacity = "0.5";
  console.log("Button is disable");
  Playagainchngplayernames.style.display = "none";
  turnX.style.backgroundColor = "rgb(253,44,92)";
  turnO.style.backgroundColor = "rgb(34,40,50)";
  document.getElementsByClassName("flex-turn")[0].style.opacity = "1";
  document.getElementById("WinnerName").textContent = "";
  document.getElementById("turnfor").textContent = "Turn For";
  PlayerXcount.textContent = 0;
  PlayerOcount.textContent = 0;
  drawcount = 0;
  winner = false;
});
