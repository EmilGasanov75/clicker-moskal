import armor from './armor.json' assert { type: 'json' };

let value = 0;
let hrv = 0;
let p = document.querySelector(".val")
let hr = document.querySelector(".hr")
let btn = document.querySelector(".btn")
//knife
let knife = document.querySelector(".knife")
let knifeB = document.querySelector(".knifeBtn")
//knife
//pm
let pm = document.querySelector(".pm")
let pmB = document.querySelector(".pmBtn")
//pm
//ak
let ak = document.querySelector(".ak")
let akB = document.querySelector(".akBtn")
//ak
//ur
let ur = document.querySelector(".ur")
let urB = document.querySelector(".urBtn")
//ur
btn.addEventListener("click", function (e) {
    e.preventDefault()
    value++
    hrv++
    p.textContent = value + " мертвих москалів  усього";
    hr.textContent = hrv + " гривень";
    if (hrv == armor[0].cost) {
        knife.className = "knife"
        knife.classList.add("on")
    }
    if (hrv == armor[1].cost) {
        pm.className = "pm"
        pm.classList.add("on")
    }
    if (hrv == armor[2].cost) {
        ak.className = "ak"
        ak.classList.add("on")
    }
    if (hrv == armor[3].cost) {
        ur.className = "ur"
        ur.classList.add("on")
    }
})

knifeB.addEventListener("click", function (e) {
    e.preventDefault()
    if (hrv >= Math.round(armor[0].cost)) {
        hrv -= Math.round(armor[0].cost);
        hr.textContent = hrv + " гривень";
        armor[0].cost *= 1.5
        knifeB.textContent = `Купити ${armor[0].name} (${Math.round(armor[0].cost)} гривень)`
        setInterval(function () {
            hrv++
            value++
            p.textContent = value + " мертвих москалів  усього";
            hr.textContent = hrv + " гривень";

        }, armor[0].cps);
    }
})

pmB.addEventListener("click", function (e) {
    e.preventDefault()
    if (hrv >= Math.round(armor[1].cost)) {
        hrv -= Math.round(armor[1].cost);
        hr.textContent = hrv + " гривень";
        armor[1].cost *= 1.5
        pmB.textContent = `Купити ${armor[1].name} (${Math.round(armor[1].cost)} гривень)`
        setInterval(function () {
            value++
            hrv++
            p.textContent = value + " мертвих москалів  усього";
            hr.textContent = hrv + " гривень";

        }, armor[1].cps);
    }
})

akB.addEventListener("click", function (e) {
    e.preventDefault()
    if (hrv >= Math.round(armor[2].cost)) {
        hrv -= Math.round(armor[2].cost);
        hr.textContent = hrv + " гривень";
        armor[2].cost *= 1.55
        akB.textContent = `Купити ${armor[2].name} (${Math.round(armor[2].cost)} гривень)`
        setInterval(function () {
            value++
            hrv++
            p.textContent = value + " мертвих москалів";
            hr.textContent = hrv + " гривень";

        }, armor[1].cps);
    }
})

urB.addEventListener("click", function (e) {
    e.preventDefault()
    if (hrv >= Math.round(armor[3].cost)) {
        hrv -= Math.round(armor[3].cost);
        hr.textContent = hrv + " гривень";
        armor[3].cost *= 1.55
        urB.textContent = `Купити ${armor[3].name} (${Math.round(armor[3].cost)} гривень)`
        setInterval(function () {
            value++
            hrv++
            p.textContent = value + " мертвих москалів";
            hr.textContent = hrv + " гривень";

        }, armor[3].cps);
    }
})
