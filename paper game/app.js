let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uss=document.querySelector("#user-score");
let com=document.querySelector("#comp-score")

const gameoption=()=>{
    option=["rock","scissor","paper"];
     ranInd=Math.floor(Math.random()*3);
    return option[ranInd];    
}

const drawgame=() => {
  console.log("game was draw");
   msg.innerText="Game was draw! Play again";
     msg.style.backgroundColor="orange";
}

   const showwinner=(userWin,comchoice,userchoice)=>{
    if(userWin){
      userscore++;
      uss.innerText=userscore;
      console.log("You win");
      msg.innerText=`You Win! your ${userchoice} beat ${comchoice}`;
      msg.style.backgroundColor="green"
    }else{
      compscore++;
      com.innerText=compscore;
      console.log("you los game");
      msg.innerText=`You Lose! ${comchoice} beat Your  ${userchoice}`;
        msg.style.backgroundColor="brown";
    }
   }
 

  const playgame = (userchoice) => {
   console.log("user Choice =",userchoice);
   
   const comchoice=gameoption();
   console.log("Comp Choice =",comchoice);


     if(userchoice===comchoice){
       drawgame();
   }

   else{
    let userWin=true;
    if(userchoice=="rock"){
      userWin=comchoice =="paper"? false:true;
    }
    else if(userchoice=="paper"){
      userWin= comchoice =="scissor"?false:true;
    }
    else{
      userWin=comchoice =="rock"?false:true;
    }
    showwinner(userWin,comchoice,userchoice);
   }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
      const  userchoice=choice.getAttribute("id")
      playgame(userchoice)

    })
})



