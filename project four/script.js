let randomNumber= (parseInt(Math.random()*100+1))
const submit=document.querySelector('#subt')
const input=document.querySelector('#guessField')
const guesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuss=[]
let numGuss=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess= parseInt (input.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert("please enter a number greater than one")
    }
    else if(guess >100){
        alert("please enter a  number lass than 100")
    }
    else{
        prevGuss.push(guess)
        if(numGuss===11){
            displayGuess(guess);
            displayMassage(`game over,random number was ${randomNumber}`);
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMassage('you guessed it right')
        endGame()
    }else if(guess<randomNumber){
        displayMassage('number is tooo low')  
    }else if(guess>randomNumber){
        displayMassage('number is tooo high')  
    }
}
function displayGuess(guess){
    input.value=''
    guesslot.innerHTML+=`${guess}, `;
    numGuss++;
    remaining.innerHTML=`${11-numGuss}`
}
function displayMassage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
   input.value=''
   input.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id='newgame'>start new game</h2>`;
   startOver.appendChild(p)
   playGame=false
   newGame() 
}


function newGame(){
   const newGameButton= document.querySelector('#newgame')
   newGameButton.addEventListener('click',function(e){
    randomNumber= (parseInt(Math.random()*100+1))
    prevGuss=[]
    numGuss=1
    guesslot.innerHTML=''
    remaining.innerHTML=`${11-numGuss}`
    input.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
   })
}

