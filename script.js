// let RNum = Math.trunc(Math.random() * 101);
// let score = 0;
// let rekord = 100;

// const DMessage = (message) => 
//     document.getElementById('message').textContent = message;

// document.querySelector('#btn').addEventListener('click', start);
// function start() {
//     let INum = Number(document.querySelector('#inpt').value);

//     if (RNum !== INum) {
//         if (INum > 0)  DMessage(INum > RNum ? 'Ashakda...' : 'Yokarda...');
//         else  DMessage('1-100 aralykdaky sanlary girizin!');
    
//         score += 1;
//         document.querySelector('#score').innerHTML = score;
//     }

//     else if (INum === RNum) {
//         if (score == 0) {
//             document.querySelector('body').innerHTML = 'You ruined the game :)';
//             document.querySelector('body').style.backgroundColor = '#60b347';
//         }
//         DMessage('San tapyldy!');
//         document.querySelector('#secretNumber').textContent = RNum;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector("#btn").removeEventListener('click', start);
//     }
// }

// document.querySelector('#again').addEventListener('click', again);
// function again() {
//     document.getElementById('inpt').value = ''
//     if (rekord > score) {
//         rekord = score;
//         document.querySelector('#highscore').innerHTML = rekord;
//     }
//     score = 0;
//     DMessage('Sany girizin...');
//     document.querySelector('#score').innerHTML = score;
//     document.querySelector('#secretNumber').textContent = '?';
//     document.querySelector('body').style.background = '#222';

//     RNum = Math.trunc(Math.random() * 101);
//     console.log(RNum);
//     document.querySelector('#btn').addEventListener('click', start);
// }













let Dnum = document.getElementById('secretNumber')
let Inum = document.querySelector('.main__input')
let btn = document.getElementById('btn')
let message = document.getElementById('message')
let score = document.getElementById('score')
let highscore = document.getElementById('highscore')
let again = document.getElementById('again')
let _highscore = 100

const RandomNumber = function() {
    return Math.floor(Math.random() * 100)
}

const DMessage = function(param) {
    message.innerText = param
}

let RNum = RandomNumber()

btn.addEventListener('click', start)

function start() {
    let val = Number(Inum.value)
    score.innerText = Number(score.innerText) + 1
    
    if (val !== RNum) {
        if (val > RNum) {
            DMessage('Ashakda...')
        } else if (val < RNum) {
            DMessage('Yokarda...')
        }
    }

    if (val === RNum) {
        DMessage('San tapyldy!')
        Dnum.innerText = RNum

        if (_highscore > Number(score.innerText)) {
            highscore.innerText = score.innerText
            _highscore = Number(score.innerText)
        }

        document.querySelector('body').style.backgroundColor = 'green'
        btn.removeEventListener('click', start)
    }
}

again.addEventListener('click', againFunc)

function againFunc () {
    Dnum.innerText = '?'
    Inum.value = '0'
    score.innerText = '0'
    DMessage('Sany girizin...')
    document.querySelector('body').style.backgroundColor = '#222'
    RNum = RandomNumber()
    btn.addEventListener('click', start)
}