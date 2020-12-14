const refs = {
    startBtn:  document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface')
}; 

// const date = new Date(5000000);

// console.dir(date.getTime());

// const dateS = Date.now();

// console.log(dateS);

// const mathDate = dateS - date.getTime();

// console.log(mathDate);

// setInterval(() => {
//     console.log(new Date);
// }, 2000);

updateClockface(0);

const timer = {
    intervalId: null,
    isActive: false,
    
    start() {

        if(this.isActive) {
            return;
        }
        // console.log(this);
        
        this.isActive = true;
        const startTime = Date.now();

        updateClockface(0);

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            // console.log('startTime: ', startTime);
            // console.log('currentTime: ', currentTime);
            const deltaTime = currentTime - startTime;
            // console.log(deltaTime);
            updateClockface(deltaTime);
        }, 1000);
    },
    stop() {
        this.isActive = false;
        // console.log(this);
        clearInterval(this.intervalId);
        this.intervalId = null;
        updateClockface(0);
    },
};
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
    // console.log(`${hours}:${mins}:${secs}`);
}

function pad(value) {

    return String(value).padStart(2, '0');
}