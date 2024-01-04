
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnerP = document.querySelector("#msg");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disabledBoxes = ()=>{
   for(let box of boxes){
    box.disabled = true;
   } 
}
const enabledBoxes = ()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    } 
 }

const showWinner = (winner)=>{
    winnerP.innerHTML = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkwinner = ()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]],boxes[pattern[2]].innerText);
        // if(){
        //     console.log("winner")
        // }

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos1 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2==pos3){
                console.log("winnner",pos1);
                showWinner(pos1);
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("o-color");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("x-color");
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const resetGame = ()=>{
    enabledBoxes();
    turnO = true;
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame); 