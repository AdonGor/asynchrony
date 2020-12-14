const refs = {
    notification: document.querySelector('.js-notification'),
}

let timeoutId = null;

refs.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
    clearTimeout(timeoutId);
    hideNotification();
}

function showNotification() {
    refs.notification.classList.add('is-visible');
    console.log('i call hideNotification');
    setTimeout(hideNotification, 3000);
}
function hideNotification() {
    refs.notification.classList.remove('is-visible');
}