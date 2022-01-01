const displayTemp = temp => {
    if (temp < 25) {
        return "The weather is cold";
    } 

    return "The weather is hot";
}

const displayHumid = humid => {
    if (humid >= 30 && humid <= 60) {
        return "The humidity is good for your health";
    } else if (humid < 30) {
        return "The weather is too dry. It can cause dry skin";
    }

    return "The weather is too moist. It can cause respiratory problems";
}

const displayPressure = pressure => {
    if (pressure > 1022) {
        return "The weather is calm with clear sky";
    }

    if (pressure > 1009) {
        return "The weather is steady";
    }

    return "There can be rain";
}

const render = (res, command) => {
    let info;
    let name;
    let display;
    if (command === "temp") {
        name = "Temperature";
        info = res.temperature + "&degC";
        display = displayTemp(res.temperature);
    } else if (command === "humid") {
        name = "Humidity";
        info = res.humidity + "%";
        display = displayHumid(res.humidity);
    } else if (command === "pressure") {
        name = "Pressure";
        info = res.pressure + "mb";
        display = displayPressure(res.pressure);
    }

    if (res.temperature === undefined || res.humidity === undefined || res.pressure === undefined) {
        responseField.innerHTML = `<h2>Sensor does not respond</h2>`;
        return;
    }

    responseField.innerHTML = `<h2>${name}: ${info}</h2><h2>${display}</h2>`;
}

const warningSurrounding = () => {
    responseField.innerHTML = `<h2>Server does not respond</h2>`;
}

const warningSpecificLocation = () => {
    responseField.innerHTML = `<h2>Location not found</h2>`;
}

const warning = measurement => {
    if (measurement === "surrounding") {
        warningSurrounding();
    } else if (measurement === "specific") {
        warningSpecificLocation();
    }
}

function showAndHideElement(element) {
    if (element.value === "specific") {
        document.getElementById("location").style.display = 'block';
        document.getElementById("chart").style.display = 'none';
    } else if (element.value === "surrounding"){
        document.getElementById("location").style.display = 'none';
        document.getElementById("chart").style.display = 'block';
    }
    inputField.value = "";
}

function clearText() {
    responseField.innerHTML = "";
}