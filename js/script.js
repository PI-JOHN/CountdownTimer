window.addEventListener('DOMContentLoaded', function (){
    'use strict';

    // Tabs

 /*    let tab,
        info,
        tabContent;

    function createVariable(tabs, inf, tabContents){
        tab = document.querySelectorAll('.' + tabs + '');
        info = document.querySelector('.' + inf + '');
        tabContent = document.querySelectorAll('.' + tabContents + '');
           
    }
    
    createVariable('info-header-tab','info-header','info-tabcontent');
    
        
       
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); 
            tabContent[i].classList.add('hide');
        }
    }    

    hideTabContent(1);


    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide'); 
            tabContent[b].classList.add('show');
        }
    }
    
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    }); */

    // Timer

    let deadline = '2020-07-10';

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

    setClock('timer', deadline);
});


    