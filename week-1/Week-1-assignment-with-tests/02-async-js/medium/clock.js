const moment = require('moment');

function updateClock() {
    const currentTime = moment().format('HH:mm:ss');
    const currentTimeAmPm = moment().format('hh:mm:ss A');
    console.clear();
    console.log(currentTime);
    console.log(currentTimeAmPm);

}

setInterval(updateClock, 1000);
