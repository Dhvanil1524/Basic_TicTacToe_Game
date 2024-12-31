let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector(".res");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let playerX=true;

const winPatts=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("you clicked on a box");
        if(playerX){
            box.innerText="X";
            playerX=false;
        }else{
            box.innerText="O";
            playerX=true;
        }
        box.disabled=true;

        winner();
    });
});

const resetgame=()=>{
    playerX=true;
    enableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disables=false;
        box.innerText="";
    }
}

const showWin=(winner)=>{
    msg.innerText=`${winner} wins this round !`;
    msg.classList.remove("hide");
    disableBoxes();
}

const winner=()=>{
    for(let pattern of winPatts){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos2val){
                console.log("winner",pos1val);
                showWin(pos1val);
            }
        }

    }
}

newgame.addEventListener("click",resetgame);