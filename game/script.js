// function hide popup introduce

function hide() {
    const popupIntro = document.querySelector('.popupIntro');
    popupIntro.style.display = 'none';
}

// function tools game

function restart() {
    return console.log('restart')
}

function quit() {
    return console.log('quit')
}

// function timer

function setTimer(timer) {
    let minute = 0;
    let second = 0;

    setInterval(() => {
        second++
        if(second === 60) {
            second = 0;
            minute++
        }
    
        const setMinute = minute < 10 ? '0' + minute : minute;
        const setSecond = second < 10 ? '0' + second : second;

        timer.textContent = setMinute + ':' + setSecond;
    }, 1000);

}

window.onload = () => {
    const timer = document.getElementById('timer');
    setTimer(timer);
}

// function username game

let usernameGame = [];
const username = document.getElementById('username').value;
console.log(username)

// function setVirusMoving

function setVirusMoving() {
    const virus = document.getElementById('virus');
    setTimeout( () => {
    virus.style.top = (parseInt(virus.style.top.replace('px', '')) + 1) + 'px';
        if(parseInt(virus.style.top.replace('px', '')) > 600) {
            virus.style.top = '-100px';
        }
        setVirusMoving();
    }, 1);
}

setVirusMoving()