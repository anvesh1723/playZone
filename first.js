let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winner=document.getElementById("winner");
let player1=true;
let new1=document.getElementById("new");

let win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],
[2,4,6],[3,4,5],[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(player1){
        box.innerText="X";
        player1=false;
        }
        else{
            box.innerText="O";
            player1=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disable=()=>{
    for(let i of boxes){
        i.disabled=true;
    }

}

new1.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    winner.innerText="";
    player1=true;
})


const checkwinner=()=>{
    for(let pattern of win){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                disable();
                winner.innerText=`Congratulations, Winner! ${pos1val}`;
            }
        }
         
    }
};
