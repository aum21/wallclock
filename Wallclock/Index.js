
const sec_hand = document.querySelector('#second_hand');
const min_hand = document.querySelector('#miniute_hand');
const hour_hand = document.querySelector('#hour_hand');

setInterval(setclock, 1000)
function setclock(){
    const ConstDate = new Date();
    const sec_ratio = ConstDate.getSeconds() / 60
    const min_ratio = (sec_ratio + ConstDate.getMinutes()) / 60
    const hour_ratio = (min_ratio + ConstDate.getHours() )/12
    
    setRotation(sec_hand,sec_ratio)
    setRotation(min_hand, min_ratio)
    setRotation(hour_hand, hour_ratio)
}


function setRotation(e,rotationRatio) {
    e.style.setProperty('--rotation', rotationRatio * 360)
}

setclock()