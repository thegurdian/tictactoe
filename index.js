let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
count=0;
const winpattern=[[0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5],
                   [6,7,8],
                 ];
const resetGame=()=>
{
    turnO=true;
    enableBox();
    count=0;
    msgcontainer.classList.add("hide");
}
                 boxes.forEach((box)=>{
                 box.addEventListener("click",()=>{
                    console.log("ITS CLICKED");
                    if(turnO)
                    {
                        box.innerHTML="O";
                        turnO=false;
                    }
                    else
                    {
                        box.innerHTML="X";
                        turnO=true;
                    }
                    box.disabled=true;
 checkwinner() ;                  
                 });
                 });

  const disableBox=()=>
    {
        for(let box of boxes)
        {
            box.disabled=true;
        }
    }       
    
 const enableBox=()=>
    {
        for(let box of boxes)
            {
                box.disabled=false;
            
        box.innerText="";
            }
    }   
    const showWinner=(winner) =>{
         msg.innerText=winner,"is winner";
         msgcontainer.classList.remove("hide");
         disableBox();
         
    }
 const checkwinner=() =>  
 {
     for(let pattern of winpattern)
     {
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;

        if(pos1value !="" && pos2value!="" && pos3value!="")
        {
            if(pos1value===pos2value && pos2value===pos3value)
            {
                console.log("winner",pos1value);
                showWinner(pos1value);
            }
        }
     }
 }      ;
    newGameBtn.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);