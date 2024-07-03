let uscore=0;
let cscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#move");
let userscore=document.querySelector("#uscore");
let compscore=document.querySelector("#cscore");


const cgenchoice= () =>{
    const options=["rock", "paper","scissors"];
   const idx= Math.floor(Math.random()*3);
   return options[idx];
}
const showWin = (userwin,id,compchoice) =>{
    if(userwin){
        uscore++;
        userscore.innerText=uscore;
        console.log("You win!");
        msg.innerText=`You win! Your ${id} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        cscore++;
        compscore.innerText=cscore; 
        console.log("You lose");
        msg.innerText=`You Lose!  ${compchoice} beats your ${id}`;
        msg.style.backgroundColor="red";


    }

};

const playgame= (id) =>{
const compchoice=cgenchoice();
if(id===compchoice){
    drawGame();
 }
 else{
    let userwin=true;
    if(id==="rock"){
   userwin=compchoice==="paper"? false:true;
    }
    else if(id==="paper"){
        userwin=compchoice==="scissors"? false:true;
         }
         else if(id==="scissors"){
            userwin=compchoice==="rock"? false:true;
             }
             showWin(userwin, id , compchoice);
 }
};

choices.forEach((choice)=>{
choice.addEventListener( "click", () =>{
    const id = choice.getAttribute("id");
   playgame(id);
});
});  
 const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw!.Try again";
    msg.style.backgroundColor="orange";
 }





