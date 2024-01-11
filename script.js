const Change = (radio) => {
    if (radio.id == 'young')
        updateProgressBars(20, 50, 80)
    else if (radio.id == 'adult')
        updateProgressBars(40, 70, 60)
    else if (radio.id == 'old')
        updateProgressBars(60, 90, 40)
}

function updateProgressBars(timeValue, moneyValue, energyValue) {
    bars.innerHTML = `
    <div class="boxwidth">
    <div class="progress-bar time" style="width:${timeValue}%";border-radius:20px></div>
    </div>
    <div class="boxwidth">
    <div class="progress-bar money" style="width:${moneyValue}%"></div>
    </div>
    <div class="boxwidth">
    <div class="progress-bar energy" style="width:${energyValue}%"></div>
    </div>
    `
}

updateProgressBars(20, 50, 80)