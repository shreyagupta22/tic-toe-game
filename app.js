let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgcont = document.querySelector(".msgcont");
let message = document.querySelector("#msg");

let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //button ko band krne ke liye 

        checkWinner();
    });
});


 const disabledBoxes = () =>{
   for ( let box of boxes ){
    box.disabled = true;
   }
 };


 const enabledBoxes = () =>{
    for ( let box of boxes ){
     box.disabled = false;
     box.innerText ="";
    }
  };
 

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgcont.classList.remove("hide");
     disabledBoxes();
};

const checkWinner = () => {
    for (pattern of winpattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);//to access the index  
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;//to access the index  

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1) {
                console.log("winner", pos1);
                showWinner(pos1);

            }
        }
    }
};

const resetgame = () => {
    turnO = true; 
   enabledBoxes();
   msgcont.classList.add("hide");
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


