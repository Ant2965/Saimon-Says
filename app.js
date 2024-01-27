let gameseq =[];
let userseq=[];
let high =0;

let btns =["yellow","red","green","purple"];


let start= false;
let level =0;
let h2= document.querySelector('h2')
document.addEventListener("keypress",()=>{
    if(start=false){
        console.log("started")
    }
    start=true;
    levelup();
});

function btflash(btn){
    btn.classList.add("flash");

    setTimeout(()=>{
        btn.classList.remove("flash")
    },350)

}


function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(()=>{
        btn.classList.remove("userflash")
    },350)

}
function levelup(){
    userseq=[];
    level++;
    high++;
   h2.innerText=`LEVEL ${level}`;

   // random color flas
   let ran=Math.floor(Math.random()*4);

   let randcolor=btns[ran];

   let ranbt=document.querySelector(`.${randcolor}`);
   console.log(ran);
   console.log(ranbt)
   console.log(randcolor)

   gameseq.push(randcolor);
//    console.log(gameseq)
    btflash(ranbt);

}

function check(inx){
    console.log("current level : ",level)
    // let inx = level-1;

    if(userseq[inx]===gameseq[inx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level} and high score is ${high}</b> <br> press any key to start over`;
        resizeTo();
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor='white';

        }, 250);
    }

}

function btnpress(){
    let currentbt=this;
    // console.log(this)
    userflash(currentbt);
    userColor = currentbt.getAttribute("id");

    console.log(userColor)
    userseq.push(userColor);

    check(userseq.length-1);
}
let all =document.querySelectorAll(".btn");

function resizeTo(){
    level=0;
    start =false;
    gameseq =[];
    userseq=[];
}


for(btn of all){
    btn.addEventListener('click',btnpress)
}