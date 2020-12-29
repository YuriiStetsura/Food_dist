function timer (timerSelector , deadline) {
    //timer

    function getTimeReaming(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            total : t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(selector,endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerID = setInterval(updateClock, 1000);

            updateClock();

        function addZero(num) {
            if (num < 10 && num >=0){
                return '0' + num;
            }
            else {
                return num;
            }
        }
        function updateClock() {
            const t = getTimeReaming(endtime);
            if(t.total <= 0) {
                clearInterval(timerID);
            }
            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);
        }

    }

    setClock(timerSelector , deadline);
}

export default timer;