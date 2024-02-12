let gameseq= [];
let userseq= [];
let btns = ['red','yellow','green','purple']
let started = false;
let level = 0;
let h3 = document.querySelector('h3');
document.addEventListener('keypress',function(){
            if(started == false){

        // console.log('game sttarted')
        started =true;
        levelup();
        
        
    }
    })
function levelup(){
    userseq = [];
    level++;
    
    h3.innerHTML = `Level ${level}`

    let rand = Math.floor(Math.random()*4);
    let randcolor =btns[rand] ;
    let randbtn = document.querySelector(`.${randcolor}`)
    
    setTimeout(() => {btnflash(randbtn)
        
    }, 500);
    // btnflash(randbtn);    
    gameseq.push(randcolor);
    // console.log(gameseq)
}
function btnflash(btn){
    btn.classList.add('flash');
    setInterval(function(){
        btn.classList.remove('flash')
    },250)
}
function userflash(btn){
    btn.classList.add('userflash');
    setInterval(function(){
        btn.classList.remove('userflash')
    },250)
}
function btnpress(){
   let btn = this;
   userflash(btn);
   let usercolor = btn.getAttribute('id')
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click',btnpress)
}
function checkAns(idx){
    
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,500)

        }
        
    }else{
        h3.innerHTML = `Game over!!!!!!!!<b>${level}</b><br> press any key to start`;
        bodyflas();
        
        reset();
    }
}
let higharr = [];
h2 = document.createElement('h2');
let h1 = document.querySelector('h1');
function reset(){
    
    higharr.push(level);
    let high = Math.max(...higharr);
    
    if(level>high){
        h2.innerHTML = `High score : ${level}`;
    }else{
        h2.innerHTML = `High score : ${high}`;
        
    }
    h1.appendChild(h2);

    level = 0;
    gameseq = [];
    userseq = [];
    started = false;
    
    // let highscore = level;
}
function bodyflas(){
    let body = document.querySelector('body')
    body.classList.add('bodyflash')
    setInterval(function(){body.classList.remove('bodyflash')},150);
}
// let boxes = document.querySelectorAll('.box')
// for (const box of boxes) {
//     box.addEventListener('click',function(){
//         console.dir(box)
//         let boxnumber = box.classList[1]

        
//         if(boxnumber==rand){
//             console.log('right')
//         }

//     })
    
// }
