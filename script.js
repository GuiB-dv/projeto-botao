//timer
window.onload = function () {
    seconds = 0o0;
    tens = 0o0;
    c = 0
    n = document.getElementById('quantidade')
    b = document.getElementById('dot')
    cps = document.getElementById('cps')
    appendSeconds = document.getElementById('seconds')
    appendTens = document.getElementById('tens')
    resetBtn = document.getElementById('reset')
    let Interval

    const startTimer = () => {
        tens++
        if(tens <= 9){
            appendTens.innerHTML = '0' + tens
        }
        if(tens > 9){
            appendTens.innerHTML = tens
        }
        if(tens > 99){
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0o0
            appendTens.innerHTML = '0' + 0
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        }
        if(seconds > 59){
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        //limite de tempo
        if(seconds == 3){
            clearInterval(Interval)
            b.setAttribute('disabled', true)
            item = document.createElement('option')
            item.text = `${(c/3).toFixed(4)} clicks per second!`
            cps.appendChild(item)
        }
    }
    
    b.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
        c++
        n.innerHTML = `${c}`
    }

    resetBtn.onclick = () => {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
        n.innerHTML = "0"
        c = 0
        b.disabled = false
    }
   
}

