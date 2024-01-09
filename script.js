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
    <div class="progress-bar time" style="width:${timeValue}%;background-color:blue">Time: ${timeValue}%</div>
    <div class="progress-bar money" style="width:${moneyValue}%">Money: ${moneyValue}%</div>
    <div class="progress-bar energy" style="width:${energyValue}%">Energy: ${energyValue}%</div>
    `
}

updateProgressBars(20, 50, 80)