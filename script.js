let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","Paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
 const drawGame=()=>{
    msg.innerText="game was draw.";
    msg.style.backgroundColor="#081b31";
 }
const showWinner=(userWin,userChoice,CompChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor="green";
  }else{
    compScore++;
    CompScorePara.innerText=compScore;
    msg.innerText=`You lose ${CompChoice} beats ${userChoice}`;
    msg.style.backgroundColor= "red";
  }
}
const playGame=(userChoice)=>{
    const CompChoice=genCompChoice();
   

    if(userChoice===CompChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=CompChoice==="Paper"? false:true;
        }else if(userChoice==="Paper"){
            userWin=CompChoice==="scissors"? false:true;
        }else{
          userWin=CompChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
})