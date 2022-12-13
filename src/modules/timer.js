const timer = (deadLine, id) => {
    const timerDays = document.querySelectorAll('.count_1 span')[id]
    const timerHours = document.querySelectorAll('.count_2 span')[id]
    const timerMinutes = document.querySelectorAll('.count_3 span')[id]
    const timerSeconds = document.querySelectorAll('.count_4 span')[id]

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 3600 / 24)
        let hours = Math.floor((timeRemaining / 3600) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60) 
        let seconds = Math.floor(timeRemaining % 60)

        return {timeRemaining, days, hours, minutes, seconds}
    }

    const updateClock = () => {
        const {timeRemaining, days, hours, minutes, seconds} = getTimeRemaining();
        timerDays.textContent = days
        timerHours.textContent = hours
        timerMinutes.textContent = minutes
        timerSeconds.textContent = seconds

        if (days < 10) timerDays.textContent = '0' + days;
        if (hours < 10) timerHours.textContent = '0' + hours;
        if (minutes < 10) timerMinutes.textContent = '0' + minutes;
        if (seconds < 10) timerSeconds.textContent = '0' + seconds;

        if (timeRemaining < 0) {
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            return false;
        }
        return true;
    }

    const startClock = () => {
        if(updateClock()) {
            let idInterval = setInterval(() => !updateClock() && clearInterval(idInterval), 1000)
        }
    }

    startClock();
}

export default timer