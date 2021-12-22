const renderSpecificLocation = (res, command) => {
    let info;
    let name;
    if (command === "temp") {
        name = "Temperature";
        info = res.temperature + "&degC";
    }

    responseField.innerHTML = `<h2>${name}: ${info} </h2>`;
}

const renderSurrounding = res => {
    responseField.innerHTML = `<h2>Request sent</h2>`;
}

const render = (measurement, res, command) => {
    if (measurement === "surrounding") {
        renderSurrounding(res);
    } else if (measurement === "specific") {
        renderSpecificLocation(res, command);
    }
}

const warningSurrounding = () => {
    responseField.innerHTML = `<h2>Sensor does not respond</h2>`;
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