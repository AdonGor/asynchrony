const logger = time => console.log(`log every ${time}ms - ${Date.now()}`);

// setInterval(logger, 10000, 2000);

console.log('to');

let subCounter = 0;
let hasSubscribed = false;

const intId = setInterval(() => {
    
    if(subCounter === 3 || hasSubscribed){
        console.log('Stop!');
        clearInterval(intId);
        return;
    }

    console.log('Subscribe please!');
    hasSubscribed = true;
    subCounter += 1;

}, 2000);

console.log('after');
