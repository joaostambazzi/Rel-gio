const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const secund = document.querySelector("#second")

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    hour.textContent = hr
    minute.textContent = min
    secund.textContent = sec

    const backgroundElement = document.getElementById("background");


    

    if (hr >= 1 && hr < 12) {
  backgroundElement.style.backgroundImage = "url('/img/dawid-zawila--G3rw6Y02D0-unsplash.jpg')";

    }   else if (hr >= 12 && hr < 18) {
  backgroundElement.style.backgroundImage = "url('/img/lisa-mcintyre-XGzW_tr_8YI-unsplash.jpg')";

    }   else {
  backgroundElement.style.backgroundImage = "url('/img/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg')";
    }

})


