const displayTemp = temp => {
    if (temp < 25) {
        return "The weather is cold";
    } 

    return "The weather is hot";
}

const displayHumid = humid => {
    if (humid >= 30 && humid <= 50) {
        return "The humidity is good";
    }

    return "The humidity is bad";
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

    responseField.innerHTML = `<h2>${name}: ${info} </h2><h2>${display}</h2>`;
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

function showElement(divId, element) {
    document.getElementById(divId).style.display = element.value === "specific" ? 'block' : 'none';
    responseField.innerHTML = "";
    inputField.value = "";
}