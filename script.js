let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newbutton")
let message=document.querySelector(".msgcontainer")
let winnerMsg=document.querySelector("#msg");
let current="X";
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    current="X";
    enableButton();
    message.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText=current;
        if(current==="X"){
            current="O"
        }
        else{
            current="X";
        }
        box.disabled="true";
        checkWinner();
    })
});

const disableButton=(()=>{
    for(let box of boxes){
        box.disabled="true";
    }
});
const enableButton=(()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
});
const showWinner=((winner)=>{
    winnerMsg.innerText=`Congratulations,The winner is ${winner}`;
    message.classList.remove("hide");
    disableButton();

});
const checkWinner=(()=>{
    for(let patterns of win){
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
    });
    reset.addEventListener("click",resetGame);
    newgame.addEventListener("click",resetGame);

