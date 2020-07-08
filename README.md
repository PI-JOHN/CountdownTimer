# CountdownTimer
## functions have been added inside the script file for the countdown timer to work.

## set deadline when time finished
```
let deadline = '2020-07-10';
```

## how much time is left and return obj with time
```
function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds =  Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }
```

## set values in html fields
```
function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
                

                function countNum(value,count) {
                    if (count < 2){
                        return ('0'+value);
                    } else {
                        return (value);
                    }
                }

                function countDigits(n) {
                    for(var i = 0; n > 1; i++) {
                       n /= 9;
                    }
                    return i;
                 }

                let valSecond = Object.entries(t)[3][1],
                    valMinute = Object.entries(t)[2][1],
                    valHour = Object.entries(t)[1][1];

                

                 let countNumSec = countDigits(valSecond),
                     countNumMin = countDigits(valMinute),
                     countNumHour = countDigits(valHour);
                 
                hours.textContent = countNum(t.hours,countNumHour);
                minutes.textContent = countNum(t.minutes,countNumMin);  
                seconds.textContent = countNum(t.seconds,countNumSec);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
    }
```
