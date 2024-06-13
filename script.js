let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-game");
let msg=document.querySelector("#winmsg");
let msgcont=document.querySelector(".msgbox");
let turn0 = true;

let oTurnShow=document.querySelector(".turn-o");
let xTurnShow=document.querySelector(".turn-x");

//player 1=0
//player 2=0

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];




const matchDraw=()=>{
  msgcont.classList.remove("hide");
    msg.textContent=`Match was draw`;
    disableBoxes();
 

}




let count=0;

const showTurn=()=>{
  if(turn0){
   
    oTurnShow.classList.add("turn-show-o");
    xTurnShow.classList.remove("turn-show-x");

  
  }
  else{
   
    xTurnShow.classList.add("turn-show-x");
    oTurnShow.classList.remove("turn-show-o");
    
  
  }
}


boxes.forEach((box) => {
  showTurn();

  box.addEventListener("click", () => {
    console.log("box was clicked");
   

    if (turn0) {
     
      box.textContent = "O";
      box.style.color="#FE7F2D";
     


      turn0 = false;
      // showTurn();
    } else {
     
      box.textContent = "X";
      box.style.color="#02A9EA";
      
      turn0 = true;
      // showTurn();
    }
    showTurn();
    box.disabled = true;
    checkWinner();
    count=count+1;
    if(count>=9){
      matchDraw();

    }
    
  
     });
});

const disableBoxes=()=>{
    boxes.forEach(box => {
        box.disabled=true;
        
    });
}

const showWinner=(winner)=>{
    msgcont.classList.remove("hide");
    msg.textContent=`Congratulations ! winner is ${winner}`;
    disableBoxes();
}






const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
            
         break;
        }

   

    }
  }
 

};

const resetGame=()=>{
  xTurnShow.classList.remove("turn-show");
    oTurnShow.classList.add("turn-show");
    turn0=true;
    count=0;
    boxes.forEach(box => {
        box.textContent="";
        
    });
   enableBoxes();
    msgcont.classList.add("hide");

}
const enableBoxes=()=>{
    boxes.forEach(box => {
        box.disabled=false;
        
    });
}

resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);