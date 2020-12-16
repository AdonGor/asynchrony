
const log = () => {
    console.log('Лог при вызове callback - функции через 3 секунды');
}



const logger = time => {
    console.log(`Лог через ${time}ms, потому, что не отменили таймаут`);
}

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer);

if (shouldCancelTimer) {
    clearTimeout(timerId);
}