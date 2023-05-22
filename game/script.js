// function hide popup introduce

function hide() {
    const popupIntro = document.querySelector('.popupIntro');
    popupIntro.style.display = 'none';
    document.querySelector('.startGame').style.display = 'block';
    // setTimeout( () => {
    //     setTimer();
    //     setVirusMoving();
    // }, 50);
    setTimer();
    setVirusMoving();
}

// function tools game

function restart() {
    return console.log('restart')
}

function quit() {
    return console.log('quit')
}

// function timer

let interval;
let minute = 0;
let second = 0;

function setTimer() {
    const timer = document.getElementById('timer');
    setInterval(() => {
        second++
        if(second === 60) {
            second = 0;
            minute++
        }
    
        const setMinute = minute < 10 ? '0' + minute : minute;
        const setSecond = second < 10 ? '0' + second : second;

        timer.innerText = setMinute + ':' + setSecond;
    }, 1000);

}

// window.onload = () => {
//     const timer = document.getElementById('timer');
//     setTimer(timer);
// }

// function username game

let usernameGame = [];

function showUser() {
    const player = document.querySelector('.player');
    player.innerText = '';

    for(i = 0; i < usernameGame.length; i++) {
        player.innerText = usernameGame[0];
    }
}

function createUser() {
    const username = document.querySelector('input[name=username]');
    usernameGame.push(username.value);
    showUser()
}


// function get random array

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

// function setVirusMoving

function setVirusMoving() {
    const virus = document.getElementById('virus');
    const number = [3, 85, 165, 240];
    // virus moving
    setTimeout( () => {
    virus.style.marginTop = (parseInt(virus.style.marginTop.replace('px', '')) + 1) + 'px';
    if(parseInt(virus.style.marginTop.replace('px', '')) > 430) {
        virus.style.marginLeft = getRandomItem(number) + 'px';
        virus.style.marginTop = '-70px';
        //document.getElementById('fail').innerText = (parseInt(document.getElementById('fail').innerText)) + 1;
        if((document.getElementById('fail').innerText = (parseInt(document.getElementById('fail').innerText)) + 1) >= 10) {
            gameOver();
            document.getElementById('fail').innerText = '0';
        }
    }
        setVirusMoving();
    }, 0.1);
}




// function keydown
const blok4 = document.querySelector('.blok-4');
console.log(blok4)
window.addEventListener('keydown', (e) => {
    if(e.key == 'k') {
        if((parseInt(virus.style.marginTop.replace('px', '')) > 300)) {
            const number = [3, 85, 165, 240];
            virus.style.marginTop = '-70px';
            virus.style.marginLeft = getRandomItem(number) + 'px';
            document.getElementById('score').innerText = (parseInt(document.getElementById('score').innerText)) + 1;
        }
    }
})

function gameOver() {

    const player = document.querySelector('.player');

    const alertGameOver = document.createElement('div');
    alertGameOver.style.width = '300px';
    alertGameOver.style.height = '200px';
    alertGameOver.style.backgroundColor = '#000';
    alertGameOver.style.position = 'absolute';
    alertGameOver.style.top = '170px';
    alertGameOver.style.left = '34%';
    alertGameOver.style.borderRadius = '10px';

    const center = document.querySelector('center');
    center.appendChild(alertGameOver);

    const createH2 = document.createElement('h2');
    createH2.style.textAlign = 'center';
    createH2.style.marginTop = '10px';
    createH2.innerText = 'Game Over';
    createH2.style.color = 'white';

    alertGameOver.appendChild(createH2);

    const createScore = document.createElement('p');
    createScore.style.textAlign = 'center';
    createScore.style.marginTop = '20px';
    createScore.style.fontSize = '1.5em'
    createScore.innerText = `Time : ${document.getElementById('timer').innerText}
                            Score : ${document.getElementById('score').innerText}
                            Player : ${player.innerText = usernameGame[0]}`;
    createScore.style.color = 'white';

    alertGameOver.appendChild(createScore);

    const createButton = document.createElement('button');
    createButton.style.padding = '5px 15px';
    createButton.style.backgroundColor = 'red';
    createButton.style.color = 'white';
    createButton.style.fontFamily = 'Arial';
    createButton.style.marginTop = '20px';
    createButton.style.border = '0';
    createButton.innerText = 'Restart';
    alertGameOver.appendChild(createButton);
}

